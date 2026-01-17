import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const quoteSchema = z.object({
    fullName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(6),
    pickupAddress: z.string().min(3),
    destinationAddress: z.string().min(3),
    houseSize: z.string().min(1),
    movingDate: z.string().min(1),
    notes: z.string().optional(),
    serviceType: z.string().optional(), // Added generic service type
    attachmentPath: z.string().optional().nullable(),
});

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        
        // Extract fields
        const rawData: any = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            pickupAddress: formData.get('pickupAddress'),
            destinationAddress: formData.get('destinationAddress'),
            houseSize: formData.get('houseSize'),
            movingDate: formData.get('movingDate'),
            notes: formData.get('notes') || undefined,
            serviceType: formData.get('serviceType') || undefined,
        };

        const file: File | null = formData.get('attachment') as unknown as File;
        let attachmentPath = null;

        if (file && file.size > 0) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Create unique filename
            const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
            const originalName = file.name.replace(/\s+/g, '-');
            const filename = `${uniqueSuffix}-${originalName}`;
            
            // Save to public/uploads
            const uploadDir = join(process.cwd(), 'public', 'uploads');
            const filepath = join(uploadDir, filename);
            
            await writeFile(filepath, buffer);
            attachmentPath = `/uploads/${filename}`;
        }

        rawData.attachmentPath = attachmentPath;

        const validatedData = quoteSchema.parse(rawData);

        const request = await prisma.movingRequest.create({
            data: {
                ...validatedData,
                movingDate: new Date(validatedData.movingDate),
            },
        });

        return NextResponse.json({ success: true, id: request.id }, { status: 201 });
    } catch (error) {
        console.error('API Error details:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({
                error: 'Validation failed',
                details: (error as z.ZodError).flatten()
            }, { status: 400 });
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
