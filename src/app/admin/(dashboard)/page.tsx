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
                <h1 className="text-2xl font-bold text-gray-900 ">Dashboard Overview</h1>
                <p className="text-gray-500 ">Welcome back! Here&apos;s what&apos;s happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white  p-6 rounded-2xl shadow-sm border border-gray-100  transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.bg} ${stat.color} p-3 rounded-xl 
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <span className="flex items-center text-xs font-medium text-green-600  bg-green-50  px-2 py-1 rounded-full">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                +12%
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 ">{stat.value}</p>
                        <p className="text-sm font-medium text-gray-500  mt-1">{stat.name}</p>
                    </div>
                ))}
            </div>

            {/* Recent Requests Table */}
            <div className="bg-white  rounded-2xl shadow-sm border border-gray-100  overflow-hidden transition-colors">
                <div className="p-6 border-b border-gray-50  flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900 ">Recent Requests</h2>
                    <Link href="/admin/requests" className="text-sm font-semibold text-blue-600  hover:text-blue-700">
                        View all
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 ">
                                <th className="px-6 py-4 text-xs font-bold text-gray-500  uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500  uppercase tracking-wider">Pickup</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500  uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500  uppercase tracking-wider text-right">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 ">
                            {recentRequests.map((request: MovingRequest) => (
                                <tr key={request.id} className="hover:bg-gray-50  transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-medium text-gray-900 ">{request.fullName}</p>
                                        <p className="text-xs text-gray-500 ">{request.email}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600  truncate max-w-[200px]">
                                        {request.pickupAddress}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                                            request.status === 'PENDING' ? "bg-orange-100 text-orange-800  " :
                                                request.status === 'IN_PROGRESS' ? "bg-purple-100 text-purple-800  " :
                                                    "bg-green-100 text-green-800  "
                                        )}>
                                            {request.status.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right text-xs text-gray-500 ">
                                        {new Date(request.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                            {recentRequests.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500  italic">
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
