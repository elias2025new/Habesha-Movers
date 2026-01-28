import { prisma } from "@/lib/prisma";
export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import {
    Calendar,
    MapPin,
    Mail,
    Phone,
    User,
    Home,
    FileText,
    ArrowLeft,
    Trash2,
    ClipboardList,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import StatusUpdater from "@/components/admin/StatusUpdater";
import DeleteRequestButton from "@/components/admin/DeleteRequestButton";
import ImageLightbox from "@/components/admin/ImageLightbox";

export default async function RequestDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const request = await prisma.movingRequest.findUnique({
        where: { id: id },
    });

    if (request) {
        console.log(`[AdminView] Request ID: ${request.id}`);
        console.log(`[AdminView] AttachmentPath: ${request.attachmentPath ? request.attachmentPath.substring(0, 50) + '...' : 'null'}`);
    }

    if (!request) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <Link href="/admin" className="flex items-center text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors group">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="sm:hidden">Dashboard</span>
                    <span className="hidden sm:inline">Back to Requests</span>
                </Link>
                <div className="flex gap-2">
                    <DeleteRequestButton requestId={request.id} variant="full" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Details */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{request.fullName}</h1>
                                <p className="text-gray-500">Request ID: #{request.id.slice(-6)}</p>
                            </div>
                            <StatusUpdater requestId={request.id} currentStatus={request.status} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-3">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                        <User className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900">Customer Info</h3>
                                        <div className="mt-1 space-y-1">
                                            {request.email && <p className="flex items-center text-sm text-gray-600"><Mail className="h-3 w-3 mr-2" /> {request.email}</p>}
                                            <p className="flex items-center text-sm text-gray-600"><Phone className="h-3 w-3 mr-2" /> {request.phone}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                        <Calendar className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900">Moving Date</h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            {new Date(request.movingDate).toLocaleDateString(undefined, { dateStyle: 'full' })}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                        <Home className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900">House Size</h3>
                                        <p className="text-sm text-gray-600 mt-1">{request.houseSize}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-3">
                                    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900">Pickup Address</h3>
                                        <p className="text-sm text-gray-600 mt-1">{request.pickupAddress}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900">Destination Address</h3>
                                        <p className="text-sm text-gray-600 mt-1">{request.destinationAddress}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {request.attachmentPath && (
                            <div className="mt-10 pt-8 border-t border-gray-50">
                                <div className="flex items-start space-x-3 mb-4">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                        <ClipboardList className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-sm font-bold text-gray-900">Item Photos</h3>
                                </div>
                                <ImageLightbox
                                    images={request.attachmentPath.split(/,(?=data:)/).map((imagePath) =>
                                        imagePath.startsWith('data:')
                                            ? imagePath
                                            : `data:image/jpeg;base64,${imagePath}`
                                    )}
                                />
                            </div>
                        )}

                        <div className="mt-10 pt-8 border-t border-gray-50">
                            <div className="flex items-start space-x-3">
                                <div className="p-2 bg-gray-50 text-gray-600 rounded-lg">
                                    <FileText className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold text-gray-900 text-gray-900">Additional Notes</h3>
                                    <p className="text-sm text-gray-600 mt-2 bg-gray-50/50 p-4 rounded-xl leading-relaxed italic">
                                        {request.notes || "No additional notes provided."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Quick Actions</h3>
                        <div className="space-y-3">
                            {request.email && (
                                <a href={`mailto:${request.email}`} className="block">
                                    <Button className="w-full justify-start py-6 bg-blue-50 text-blue-700 hover:bg-blue-100 border-none shadow-none">
                                        <Mail className="h-4 w-4 mr-2" />
                                        Email Customer
                                    </Button>
                                </a>
                            )}
                            <a href={`tel:${request.phone}`} className="block">
                                <Button className="w-full justify-start py-6 bg-green-50 text-green-700 hover:bg-green-100 border-none shadow-none">
                                    <Phone className="h-4 w-4 mr-2" />
                                    Call Customer
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-900 text-white rounded-3xl shadow-lg p-6 overflow-hidden relative">
                        <h3 className="text-lg font-bold mb-2">Request Timeline</h3>
                        <div className="space-y-4 relative z-10 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="h-2 w-2 rounded-full bg-blue-500" />
                                <p className="text-xs text-gray-400">Received: {new Date(request.createdAt).toLocaleString()}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="h-2 w-2 rounded-full bg-gray-600" />
                                <p className="text-xs text-gray-400">Last Updated: {new Date(request.updatedAt).toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 h-24 w-24 opacity-10 rotate-12">
                            <Image
                                src="/images/habesha-logo-svg.svg"
                                alt="Logo"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
