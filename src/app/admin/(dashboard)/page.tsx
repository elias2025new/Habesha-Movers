import { prisma } from "@/lib/prisma";
import {
    ClipboardList,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MovingRequest } from "@prisma/client";
import { Button } from "@/components/ui/Button";
import DeleteRequestButton from "@/components/admin/DeleteRequestButton";

export default async function AdminDashboard() {
    // Fetch all requests
    const requests = await prisma.movingRequest.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 ">Customer Requests</h1>
                    <p className="text-gray-500 ">View and manage all incoming moving service requests.</p>
                </div>
            </div>

            {/* Requests Table */}
            <div className="bg-white dark:bg-[#1C1C1C] rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden transition-colors">
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-white/10">
                    <table className="w-full text-left border-collapse min-w-[700px] md:min-w-full">
                        <thead>
                            <tr className="bg-gray-50/50 dark:bg-white/2">
                                <th className="px-4 md:px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                                <th className="px-4 md:px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Pickup & Delivery</th>
                                <th className="px-4 md:px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Move Date</th>
                                <th className="px-4 md:px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-4 md:px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                            {requests.map((request: MovingRequest) => (
                                <tr key={request.id} className="hover:bg-gray-50 dark:hover:bg-white/2 transition-colors">
                                    <td className="px-4 md:px-6 py-4">
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">{request.fullName}</p>
                                        <div className="sm:hidden mt-1 space-y-0.5">
                                            <p className="text-[10px] text-gray-500 truncate">From: {request.pickupAddress}</p>
                                            <p className="text-[10px] text-gray-400">{new Date(request.movingDate).toLocaleDateString()}</p>
                                        </div>
                                        <p className="hidden sm:block text-xs text-gray-500">{request.email}</p>
                                    </td>
                                    <td className="px-4 md:px-6 py-4 hidden sm:table-cell">
                                        <div className="text-xs text-gray-600 dark:text-gray-400 max-w-[200px] md:max-w-[250px]">
                                            <p className="truncate"><span className="font-bold">From:</span> {request.pickupAddress}</p>
                                            <p className="truncate"><span className="font-bold">To:</span> {request.destinationAddress}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 md:px-6 py-4 text-sm text-gray-600 dark:text-gray-400 hidden lg:table-cell">
                                        {new Date(request.movingDate).toLocaleDateString(undefined, { dateStyle: 'medium' })}
                                    </td>
                                    <td className="px-4 md:px-6 py-4 text-right sm:text-left">
                                        <span className={cn(
                                            "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold",
                                            request.status === 'PENDING' ? "bg-orange-100 text-orange-800 dark:bg-orange-500/20 dark:text-orange-400" :
                                                request.status === 'IN_PROGRESS' ? "bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-400" :
                                                    "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
                                        )}>
                                            {request.status.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-4 md:px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-1 md:gap-2">
                                            <Link href={`/admin/requests/${request.id}`}>
                                                <Button variant="ghost" size="sm" className="h-8 w-8 md:h-9 md:w-auto p-0 md:px-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10">
                                                    <span className="hidden md:inline text-xs">View Details</span>
                                                    <ClipboardList className="h-4 w-4 md:hidden" />
                                                </Button>
                                            </Link>
                                            <DeleteRequestButton requestId={request.id} className="h-8 w-8 md:h-9 md:w-9" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {requests.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500  italic">
                                        <div className="flex flex-col items-center">
                                            <ClipboardList className="h-12 w-12 text-gray-200 mb-4" />
                                            <p>No requests found yet.</p>
                                        </div>
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

