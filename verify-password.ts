import 'dotenv/config';
import { prisma } from './src/lib/prisma';
import bcrypt from 'bcryptjs';

async function main() {
    const email = 'admin@habeshamovers.com';
    const password = 'password123';

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            console.error(`❌ User not found: ${email}`);
            return;
        }

        console.log(`User found: ${user.email}`);
        console.log(`Stored Hash: ${user.password}`);

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            console.log('✅ Success! Password matches hash.');
        } else {
            console.error('❌ Failed! Password does NOT match hash.');

            // Debug: create new hash and compare
            const newHash = await bcrypt.hash(password, 10);
            console.log(`Expected Hash format example: ${newHash}`);
        }
    } catch (e) {
        console.error('Error:', e);
    }
}

main();
