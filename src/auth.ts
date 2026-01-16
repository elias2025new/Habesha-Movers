import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    secret: process.env.AUTH_SECRET,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    console.log(`[AUTH DEBUG] Attempting login for: ${email}`);

                    const user = await prisma.user.findUnique({ where: { email } });
                    console.log(`[AUTH DEBUG] User found in DB:`, user ? 'YES' : 'NO');

                    if (!user) return null;

                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    console.log(`[AUTH DEBUG] Password match:`, passwordsMatch ? 'YES' : 'NO');

                    if (passwordsMatch) return user;
                }

                return null;
            },
        }),
    ],
});
