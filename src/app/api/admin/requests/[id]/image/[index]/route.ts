import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string; index: string }> }
) {
    try {
        const { id, index } = await params;
        const imageIndex = parseInt(index);

        if (isNaN(imageIndex)) {
            return new NextResponse("Invalid image index", { status: 400 });
        }

        const movingRequest = await prisma.movingRequest.findUnique({
            where: { id },
            select: { attachmentPath: true },
        });

        if (!movingRequest || !movingRequest.attachmentPath) {
            return new NextResponse("Image not found", { status: 404 });
        }

        const attachments = movingRequest.attachmentPath.split(/,(?=data:)/);

        if (imageIndex < 0 || imageIndex >= attachments.length) {
            return new NextResponse("Image not found", { status: 404 });
        }

        const base64String = attachments[imageIndex];

        // Extract content type and base64 data
        // Format: data:image/jpeg;base64,...
        const matches = base64String.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

        if (!matches || matches.length !== 3) {
            return new NextResponse("Invalid image data", { status: 500 });
        }

        const contentType = matches[1];
        const data = matches[2];
        const buffer = Buffer.from(data, "base64");

        return new NextResponse(buffer, {
            headers: {
                "Content-Type": contentType,
                "Content-Length": buffer.length.toString(),
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    } catch (error) {
        console.error("Error serving image:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
