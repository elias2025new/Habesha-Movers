"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Check,
    ChevronDown,
    Loader2,
    Clock,
    TrendingUp,
    CheckCircle2,
    LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { RequestStatus } from '@prisma/client';

interface StatusUpdaterProps {
    requestId: string;
    currentStatus: RequestStatus;
}

const statusOptions: { value: RequestStatus; label: string; icon: LucideIcon; color: string }[] = [
    { value: 'PENDING', label: 'Pending', icon: Clock, color: 'text-orange-600 bg-orange-100' },
    { value: 'IN_PROGRESS', label: 'In Progress', icon: TrendingUp, color: 'text-purple-600 bg-purple-100' },
    { value: 'COMPLETED', label: 'Completed', icon: CheckCircle2, color: 'text-green-600 bg-green-100' },
];

const StatusUpdater = ({ requestId, currentStatus }: StatusUpdaterProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<RequestStatus>(currentStatus);
    const [isUpdating, setIsUpdating] = useState(false);
    const router = useRouter();

    const handleUpdate = async (newStatus: RequestStatus) => {
        if (newStatus === status) return;

        setIsUpdating(true);
        setIsOpen(false);

        try {
            const response = await fetch(`/api/requests/${requestId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });

            if (response.ok) {
                setStatus(newStatus);
                router.refresh();
            } else {
                alert('Failed to update status');
            }
        } catch (error) {
            console.error('Update error:', error);
        } finally {
            setIsUpdating(false);
        }
    };

    const currentOption = statusOptions.find(opt => opt.value === status) || statusOptions[0];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={isUpdating}
                className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-bold border transition-all duration-200",
                    currentOption.color,
                    "border-transparent hover:shadow-md"
                )}
            >
                {isUpdating ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    <currentOption.icon className="h-4 w-4" />
                )}
                <span>{currentOption.label}</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden py-1">
                    {statusOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => handleUpdate(option.value)}
                            className={cn(
                                "flex items-center justify-between w-full px-4 py-3 text-sm transition-colors",
                                status === option.value
                                    ? "bg-gray-50 text-gray-900 font-bold"
                                    : "text-gray-600 hover:bg-gray-50"
                            )}
                        >
                            <div className="flex items-center space-x-2">
                                <option.icon className={cn("h-4 w-4", option.color.split(' ')[0])} />
                                <span>{option.label}</span>
                            </div>
                            {status === option.value && <Check className="h-4 w-4 text-blue-600" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StatusUpdater;
