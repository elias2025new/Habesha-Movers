"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface DeleteRequestButtonProps {
    requestId: string;
    variant?: 'icon' | 'full';
    className?: string;
}

const DeleteRequestButton = ({ requestId, variant = 'icon', className }: DeleteRequestButtonProps) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        setIsDeleting(true);

        try {
            const response = await fetch(`/api/requests/${requestId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                toast.success('Request deleted successfully');
                setIsModalOpen(false); // Close modal immediately
                router.refresh(); // Then refresh in background
                if (variant === 'full') {
                    router.push('/admin');
                }
            } else {
                toast.error('Failed to delete request');
            }
        } catch (error) {
            console.error('Delete error:', error);
            toast.error('An error occurred while deleting');
        } finally {
            setIsDeleting(false);
            // Modal is closed earlier on success, or stays open on error (or we can close it anyway)
            // But if there's an error, we might want it to stay open? 
            // In case of error, setIsDeleting(false) allows them to try again.
        }
    };

    const triggerButton = variant === 'icon' ? (
        <button
            onClick={() => setIsModalOpen(true)}
            disabled={isDeleting}
            className={cn(
                "p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                isDeleting && "opacity-50 cursor-not-allowed",
                className
            )}
            title="Delete Request"
        >
            <Trash2 className="h-4 w-4" />
        </button>
    ) : (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsModalOpen(true)}
            disabled={isDeleting}
            className={cn("text-red-600 hover:bg-red-50", className)}
        >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Request
        </Button>
    );

    return (
        <>
            {triggerButton}

            <Modal
                isOpen={isModalOpen}
                onClose={() => !isDeleting && setIsModalOpen(false)}
                title="Confirm Deletion"
            >
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-orange-600 bg-orange-50 dark:bg-orange-500/10 p-4 rounded-2xl border border-orange-100 dark:border-orange-500/20">
                        <AlertCircle className="h-6 w-6 flex-shrink-0" />
                        <p className="text-sm font-medium">
                            Are you sure you want to delete this moving request? This action is permanent and cannot be reversed.
                        </p>
                    </div>

                    <div className="flex gap-3 pt-2">
                        <Button
                            variant="primary"
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                            onClick={handleDelete}
                            disabled={isDeleting}
                        >
                            {isDeleting ? (
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            ) : (
                                <Trash2 className="h-4 w-4 mr-2" />
                            )}
                            {isDeleting ? 'Deleting...' : 'Delete Permanently'}
                        </Button>
                        <Button
                            variant="outline"
                            className="flex-1 border-gray-200 dark:border-white/10"
                            onClick={() => setIsModalOpen(false)}
                            disabled={isDeleting}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default DeleteRequestButton;
