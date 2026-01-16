import 'dotenv/config';
import { prisma } from './src/lib/prisma';

async function main() {
    try {
        const users = await prisma.user.findMany();
        console.log('Current users in database:');
        users.forEach((u: any) => console.log(`- ${u.email} (Role: ${u.role})`));
    } catch (e) {
        console.error('Could not connect to database:', e);
    }
}

main();
