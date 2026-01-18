"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const QuoteForm = () => {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const quoteSchema = z.object({
        fullName: z.string().min(2, t('val.nameShort')),
        email: z.string().email(t('val.emailInvalid')),
        phone: z.string().min(10, t('val.phoneInvalid')),
        pickupAddress: z.string().min(5, t('val.addrShort')),
        destinationAddress: z.string().min(5, t('val.addrShort')),
        houseSize: z.string().min(1, t('val.selectSize')),
        movingDate: z.string().min(1, t('val.selectDate')),
        notes: z.string().optional(),
    });

    type QuoteFormData = z.infer<typeof quoteSchema>;

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
                alert(t('val.genericError'));
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert(t('val.connError'));
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-12 bg-white  rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100  transition-colors">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900  mb-4">{t('quoteForm.successTitle')}</h2>
                <p className="text-lg text-gray-600  mb-8">
                    {t('quoteForm.successMessage')}
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                    {t('quoteForm.another')}
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-white  rounded-3xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto border border-gray-100  transition-colors">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ">{t('quote.fullName')}</label>
                        <Input {...register('fullName')} placeholder="John Doe" />
                        {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ">{t('quote.email')}</label>
                        <Input type="email" {...register('email')} placeholder="john@example.com" />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ">{t('quote.phone')}</label>
                        <Input {...register('phone')} placeholder="+251 ..." />
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                    </div>

                    {/* House Size */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ">{t('quoteForm.houseOrOffice')}</label>
                        <select
                            {...register('houseSize')}
                            className="flex h-10 w-full rounded-md border border-gray-300  bg-white  px-3 py-2 text-sm text-gray-900  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            <option value="">{t('quote.selectSize')}</option>
                            <option value="Studio">{t('size.studio1br')}</option>
                            <option value="2 Bedrooms">{t('size.2br')}</option>
                            <option value="3+ Bedrooms">{t('size.3plusbr')}</option>
                            <option value="Villa">{t('quoteForm.villa')}</option>
                            <option value="Small Office">{t('quoteForm.smallOffice')}</option>
                            <option value="Large Office">{t('quoteForm.largeOffice')}</option>
                        </select>
                        {errors.houseSize && <p className="text-red-500 text-xs">{errors.houseSize.message}</p>}
                    </div>

                    {/* Pickup Address */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ">{t('quote.pickup')}</label>
                        <Input {...register('pickupAddress')} placeholder={t('quote.pickupPlaceholder')} />
                        {errors.pickupAddress && <p className="text-red-500 text-xs">{errors.pickupAddress.message}</p>}
                    </div>

                    {/* Destination Address */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ">{t('quote.destination')}</label>
                        <Input {...register('destinationAddress')} placeholder={t('quote.destinationPlaceholder')} />
                        {errors.destinationAddress && <p className="text-red-500 text-xs">{errors.destinationAddress.message}</p>}
                    </div>

                    {/* Moving Date */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ">{t('quoteForm.movingDatePref')}</label>
                        <Input type="date" {...register('movingDate')} className="" />
                        {errors.movingDate && <p className="text-red-500 text-xs">{errors.movingDate.message}</p>}
                    </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ">{t('quote.notes')}</label>
                    <textarea
                        {...register('notes')}
                        placeholder={t('quote.notesPlaceholder')}
                        className="flex min-h-[100px] w-full rounded-md border border-gray-300  bg-white  px-3 py-2 text-sm text-gray-900  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {t('quoteForm.processing')}
                        </>
                    ) : (
                        t('quoteForm.submit')
                    )}
                </Button>
            </form>
        </div>
    );
};

export default QuoteForm;
