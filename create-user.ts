import 'dotenv/config';
import { prisma } from './src/lib/prisma';
import bcrypt from 'bcryptjs';

async function main() {
    const email = 'admin@habeshamovers.com';
    const password = 'password123';

    console.log(`Creating user ${email}...`);

    // 1. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Create the user
    try {
        const user = await prisma.user.upsert({
            where: { email },
            update: {},
            create: {
                email,
                password: hashedPassword,
                name: 'Admin User',
                role: 'ADMIN',
            },
        });
        console.log(`✅ User created successfully: ${user.email}`);
    } catch (e) {
        console.error('Error creating user:', e);
    }
}

main();
