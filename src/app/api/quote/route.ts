import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';


const quoteSchema = z.object({
    fullName: z.string().min(2),
    email: z.string().email().optional().or(z.literal("")),
    phone: z.string().regex(/^\+2510?\d{9}$/, 'Invalid Ethiopian phone number'),
    pickupAddress: z.string().min(3),
    destinationAddress: z.string().min(3),
    houseSize: z.string().min(1),
    movingDate: z.string().min(1),
    notes: z.string().optional(),
    serviceType: z.string().optional(),
    attachmentPath: z.string().optional().nullable(),
});

export async function POST(req: Request) {
    try {
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
        const formData = await req.formData();

        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;

        // Rate Limit Checks
        const fifteenMinsAgo = new Date(Date.now() - 15 * 60 * 1000);
        const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

        // 1. Check for 15 minute cooldown
        const recentRequest = await prisma.movingRequest.findFirst({
            where: {
                OR: [
                    ...(email ? [{ email: email }] : []),
                    { phone: phone },
                    { ipAddress: ip }
                ],
                createdAt: { gte: fifteenMinsAgo }
            }
        });

        if (recentRequest) {
            return NextResponse.json({
                error: 'Rate Limit',
                message: 'rateLimit15m'
            }, { status: 429 });
        }

        // 2. Check for 24 hour limit (max 2 requests)
        const dailyRequestsCount = await prisma.movingRequest.count({
            where: {
                OR: [
                    ...(email ? [{ email: email }] : []),
                    { phone: phone },
                    { ipAddress: ip }
                ],
                createdAt: { gte: twentyFourHoursAgo }
            }
        });

        if (dailyRequestsCount >= 2) {
            return NextResponse.json({
                error: 'Rate Limit',
                message: 'rateLimit24h'
            }, { status: 429 });
        }

        const rawData: any = {
            fullName: formData.get('fullName'),
            email: email,
            phone: phone,
            pickupAddress: formData.get('pickupAddress'),
            destinationAddress: formData.get('destinationAddress'),
            houseSize: formData.get('houseSize'),
            movingDate: formData.get('movingDate'),
            notes: formData.get('notes') || undefined,
            serviceType: formData.get('serviceType') || undefined,
        };

        const files = formData.getAll('attachments') as unknown as File[];
        const savedPaths: string[] = [];

        if (files.length > 0) {
            if (files.length > 0) {
                for (const file of files) {
                    if (file && file.size > 0) {
                        // Check file size (max 3MB)
                        if (file.size > 3 * 1024 * 1024) {
                            return NextResponse.json({
                                error: 'File too large',
                                message: `File ${file.name} exceeds 3MB limit`
                            }, { status: 400 });
                        }

                        const bytes = await file.arrayBuffer();
                        const buffer = Buffer.from(bytes);
                        const base64String = `data:${file.type};base64,${buffer.toString('base64')}`;
                        savedPaths.push(base64String);
                    }
                }
            }
        }

        rawData.attachmentPath = savedPaths.length > 0 ? savedPaths.join(',') : null;
        const validatedData = quoteSchema.parse(rawData);

        const request = await prisma.movingRequest.create({
            data: {
                ...validatedData,
                movingDate: new Date(validatedData.movingDate),
                ipAddress: ip
            },
        });

        return NextResponse.json({ success: true, id: request.id }, { status: 201 });
    } catch (error: any) {
        console.error('API Error details:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({
                error: 'Validation failed',
                details: (error as z.ZodError).flatten()
            }, { status: 400 });
        }
        return NextResponse.json({
            error: 'Internal Server Error',
            message: error.message || "Unknown error"
        }, { status: 500 });
    }
}
