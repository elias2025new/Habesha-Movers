import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const quoteSchema = z.object({
    fullName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    pickupAddress: z.string().min(5),
    destinationAddress: z.string().min(5),
    houseSize: z.string().min(1),
    movingDate: z.string().min(1),
    notes: z.string().optional(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = quoteSchema.parse(body);

        const request = await prisma.movingRequest.create({
            data: {
                ...validatedData,
                movingDate: new Date(validatedData.movingDate),
            },
        });

        return NextResponse.json({ success: true, id: request.id }, { status: 201 });
    } catch (error) {
        console.error('API Error:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: 'Validation failed', details: (error as z.ZodError).flatten() }, { status: 400 });
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
