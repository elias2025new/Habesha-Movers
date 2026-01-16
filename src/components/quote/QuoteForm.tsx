"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

const quoteSchema = z.object({
    fullName: z.string().min(2, 'Name is too short'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Invalid phone number'),
    pickupAddress: z.string().min(5, 'Address is too short'),
    destinationAddress: z.string().min(5, 'Address is too short'),
    houseSize: z.string().min(1, 'Please select a house size'),
    movingDate: z.string().min(1, 'Please select a moving date'),
    notes: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const QuoteForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<QuoteFormData>({
        resolver: zodResolver(quoteSchema),
    });

    const onSubmit = async (data: QuoteFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                reset();
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to send request. Check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100 dark:border-gray-700 transition-colors">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Request Sent!</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Thank you for choosing Habesha Movers. Our team will review your request and contact you within 24 hours with a free quote.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                    Send another request
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto border border-gray-100 dark:border-gray-700 transition-colors">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
                        <Input {...register('fullName')} placeholder="John Doe" />
                        {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                        <Input type="email" {...register('email')} placeholder="john@example.com" />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</label>
                        <Input {...register('phone')} placeholder="+251 ..." />
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                    </div>

                    {/* House Size */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">House/Office Size</label>
                        <select
                            {...register('houseSize')}
                            className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            <option value="">Select size...</option>
                            <option value="Studio">Studio / 1 Bedroom</option>
                            <option value="2 Bedrooms">2 Bedrooms</option>
                            <option value="3+ Bedrooms">3+ Bedrooms</option>
                            <option value="Villa">Villa / Large House</option>
                            <option value="Small Office">Small Office</option>
                            <option value="Large Office">Large Office</option>
                        </select>
                        {errors.houseSize && <p className="text-red-500 text-xs">{errors.houseSize.message}</p>}
                    </div>

                    {/* Pickup Address */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Pickup Address</label>
                        <Input {...register('pickupAddress')} placeholder="Megenaga" />
                        {errors.pickupAddress && <p className="text-red-500 text-xs">{errors.pickupAddress.message}</p>}
                    </div>

                    {/* Destination Address */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Destination Address</label>
                        <Input {...register('destinationAddress')} placeholder="Summit" />
                        {errors.destinationAddress && <p className="text-red-500 text-xs">{errors.destinationAddress.message}</p>}
                    </div>

                    {/* Moving Date */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Preferred Moving Date</label>
                        <Input type="date" {...register('movingDate')} className="dark:color-scheme-dark" />
                        {errors.movingDate && <p className="text-red-500 text-xs">{errors.movingDate.message}</p>}
                    </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Additional Notes (Optional)</label>
                    <textarea
                        {...register('notes')}
                        placeholder="Special instructions, fragile items, etc."
                        className="flex min-h-[100px] w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        'Submit Quote Request'
                    )}
                </Button>
            </form>
        </div>
    );
};

export default QuoteForm;
