import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const rawConnectionString = process.env.DATABASE_URL;
const connectionString = rawConnectionString ? `${rawConnectionString}` : '';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined,
  pool: Pool | undefined,
  adapter: PrismaPg | undefined
};

if (!globalForPrisma.pool && connectionString) {
  try {
    const pool = new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false
      },
      max: 10, // Reduced max connections for better stability with Neon
      idleTimeoutMillis: 20000,
      connectionTimeoutMillis: 10000,
      keepAlive: true,
    });

    // Add error handler to prevent "Connection terminated unexpectedly" from unhandled crashes
    pool.on('error', (err) => {
      console.error('❌ Database Pool Error:', err.message);
    });

    globalForPrisma.pool = pool;
  } catch (e) {
    console.error('❌ Failed to create database pool:', e);
  }
}

if (!globalForPrisma.adapter && globalForPrisma.pool) {
  globalForPrisma.adapter = new PrismaPg(globalForPrisma.pool);
}

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: globalForPrisma.adapter,
    log: ['error', 'warn'], // Removed 'query' to reduce noise while debugging termination
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
