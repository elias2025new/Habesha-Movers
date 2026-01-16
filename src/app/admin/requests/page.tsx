import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Search, Filter, ClipboardList } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

import { MovingRequest } from "@prisma/client";

export default async function RequestsListPage() {
    const requests = await prisma.movingRequest.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Moving Requests</h1>
                    <p className="text-gray-500">Manage all incoming quote requests from customers.</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="bg-white">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                    </Button>
                    <Button variant="primary" size="sm">Export CSV</Button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-50 flex items-center gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search by name, email or address..." className="pl-10 border-none bg-gray-50" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Pickup & Delivery</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Move Date</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {requests.map((request: MovingRequest) => (
                                <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-medium text-gray-900">{request.fullName}</p>
                                        <p className="text-xs text-gray-500">{request.email}</p>
                                        <p className="text-xs text-gray-400">{request.phone}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-xs text-gray-600 max-w-[250px]">
                                            <p className="truncate"><span className="font-bold">From:</span> {request.pickupAddress}</p>
                                            <p className="truncate"><span className="font-bold">To:</span> {request.destinationAddress}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {new Date(request.movingDate).toLocaleDateString(undefined, { dateStyle: 'medium' })}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                                            request.status === 'PENDING' ? "bg-orange-100 text-orange-800" :
                                                request.status === 'IN_PROGRESS' ? "bg-purple-100 text-purple-800" :
                                                    "bg-green-100 text-green-800"
                                        )}>
                                            {request.status.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Link href={`/admin/requests/${request.id}`}>
                                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                                View Details
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            {requests.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-20 text-center text-gray-500 italic">
                                        <div className="flex flex-col items-center">
                                            <ClipboardList className="h-12 w-12 text-gray-200 mb-4" />
                                            <p>No requests found matching your criteria.</p>
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
