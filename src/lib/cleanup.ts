import { prisma } from "./prisma";

/**
 * Automatically deletes requests that have been marked as 'COMPLETED'
 * for more than 5 minutes.
 */
export async function cleanupCompletedRequests() {
    try {
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

        const deleted = await prisma.movingRequest.deleteMany({
            where: {
                status: 'COMPLETED',
                updatedAt: {
                    lt: fiveMinutesAgo,
                },
            },
        });

        if (deleted.count > 0) {
            console.log(`🧹 Auto-cleanup: Deleted ${deleted.count} completed requests.`);
        }
    } catch (error) {
        console.error('❌ Auto-cleanup Error:', error);
    }
}
