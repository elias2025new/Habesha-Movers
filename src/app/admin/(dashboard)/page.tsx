import { prisma } from "@/lib/prisma";
import {
    ClipboardList,
    Clock,
    CheckCircle2,
    TrendingUp,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MovingRequest } from "@prisma/client";

export default async function AdminDashboard() {
    // Fetch stats from DB
    const [total, pending, inProgress, completed] = await Promise.all([
        prisma.movingRequest.count(),
        prisma.movingRequest.count({ where: { status: 'PENDING' } }),
        prisma.movingRequest.count({ where: { status: 'IN_PROGRESS' } }),
        prisma.movingRequest.count({ where: { status: 'COMPLETED' } }),
    ]);

    const stats = [
        { name: 'Total Requests', value: total, icon: ClipboardList, color: 'text-blue-600', bg: 'bg-blue-100' },
        { name: 'Pending', value: pending, icon: Clock, color: 'text-orange-600', bg: 'bg-orange-100' },
        { name: 'In Progress', value: inProgress, icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
        { name: 'Completed', value: completed, icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-100' },
    ];

    const recentRequests = await prisma.movingRequest.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
                <p className="text-gray-500 dark:text-gray-400">Welcome back! Here&apos;s what&apos;s happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.bg} ${stat.color} p-3 rounded-xl dark:bg-opacity-20`}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <span className="flex items-center text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                +12%
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">{stat.name}</p>
                    </div>
                ))}
            </div>

            {/* Recent Requests Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden transition-colors">
                <div className="p-6 border-b border-gray-50 dark:border-gray-700 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Requests</h2>
                    <Link href="/admin/requests" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700">
                        View all
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 dark:bg-gray-900/50">
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pickup</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
                            {recentRequests.map((request: MovingRequest) => (
                                <tr key={request.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">{request.fullName}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{request.email}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 truncate max-w-[200px]">
                                        {request.pickupAddress}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                                            request.status === 'PENDING' ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400" :
                                                request.status === 'IN_PROGRESS' ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400" :
                                                    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                        )}>
                                            {request.status.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right text-xs text-gray-500 dark:text-gray-400">
                                        {new Date(request.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                            {recentRequests.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400 italic">
                                        No requests found yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
