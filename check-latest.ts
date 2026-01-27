import 'dotenv/config';
import { prisma } from './src/lib/prisma';

async function checkLatestRequest() {
    console.log('Connecting to DB...');
    const count = await prisma.movingRequest.count();
    console.log(`Total requests: ${count}`);

    const request = await prisma.movingRequest.findFirst({
        orderBy: { createdAt: 'desc' },
        select: {
            id: true,
            fullName: true,
            createdAt: true,
            attachmentPath: true
        }
    });

    if (request) {
        console.log('Latest Request ID:', request.id);
        console.log('Name:', request.fullName);
        console.log('Created:', request.createdAt);
        console.log('Has attachment:', !!request.attachmentPath);
        if (request.attachmentPath) {
            const paths = request.attachmentPath.split(',');
            console.log('Number of images:', paths.length);
            console.log('First image starts with:', paths[0].substring(0, 50));
            console.log('Is Base64:', paths[0].startsWith('data:'));
        }
    }
}

checkLatestRequest().catch(console.error).finally(() => process.exit());
