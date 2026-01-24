import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const session = await auth();

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { status } = body;

        const request = await prisma.movingRequest.update({
            where: { id: id },
            data: { status },
        });

        return NextResponse.json(request);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const start = Date.now();
    const { id } = await params;

    // Auth check
    const session = await auth();
    const authTime = Date.now() - start;

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const dbStart = Date.now();
        await prisma.movingRequest.delete({
            where: { id: id },
        });
        const dbTime = Date.now() - dbStart;

        console.log(`🗑️ DELETE Request ${id}: Total ${Date.now() - start}ms (Auth: ${authTime}ms, DB: ${dbTime}ms)`);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
