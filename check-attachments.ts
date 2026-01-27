import 'dotenv/config';
import { prisma } from './src/lib/prisma';

async function checkRequest() {
    const requests = await prisma.movingRequest.findMany({
        where: {
            attachmentPath: {
                not: null
            }
        },
        select: {
            id: true,
            fullName: true,
            attachmentPath: true
        },
        take: 1
    });

    if (requests.length > 0) {
        console.log('Request ID:', requests[0].id);
        console.log('Full Name:', requests[0].fullName);
        console.log('Attachment Path Length:', requests[0].attachmentPath?.length);
        console.log('First 200 chars:', requests[0].attachmentPath?.substring(0, 200));
    } else {
        console.log('No requests with attachments found');
    }
}

checkRequest().catch(console.error).finally(() => process.exit());
