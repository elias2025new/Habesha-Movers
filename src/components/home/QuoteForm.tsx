"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import LocationInput from '@/components/ui/LocationInput';
import { Input } from '@/components/ui/Input';
import { toast } from 'sonner';
import { useLanguage } from '../LanguageContext';

const QuoteForm = () => {
    const { t } = useLanguage();

    const houseSizes = [
        { label: t('size.studio'), value: 'studio' },
        { label: t('size.1br'), value: '1br' },
        { label: t('size.2br'), value: '2br' },
        { label: t('size.3br'), value: '3br' },
        { label: t('size.4br'), value: '4br+' },
        { label: t('size.office'), value: 'office' },
    ];

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        pickup: "",
        destination: "",
        serviceType: "",
        houseSize: "",
        movingDate: "",
        notes: "",
    });
    const [validity, setValidity] = useState({
        pickup: false,
        destination: false
    });
    const [attachment, setAttachment] = useState<File | null>(null);

    const updateFormData = (data: Partial<typeof formData>) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    const nextStep = () => {
        if (step === 1) {
            if (!formData.pickup || !formData.destination) {
                toast.error(t('toast.locationError'));
                return;
            }
            if (!validity.pickup || !validity.destination) {
                toast.error(t('toast.addisError'));
                return;
            }
        }
        if (step === 2) {
            if (!formData.serviceType || !formData.houseSize || !formData.movingDate) {
                toast.error(t('toast.detailsError'));
                return;
            }
        }
        setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validity.pickup || !validity.destination) {
            toast.error(t('toast.addisError'));
            return;
        }

        setLoading(true);

        try {
            const data = new FormData();
            data.append('fullName', formData.fullName);
            data.append('email', formData.email);
            data.append('phone', formData.phone);
            data.append('pickupAddress', formData.pickup);
            data.append('destinationAddress', formData.destination);
            data.append('serviceType', formData.serviceType);
            data.append('houseSize', formData.houseSize);
            data.append('movingDate', formData.movingDate);
            data.append('notes', formData.notes);
            if (attachment) {
                data.append('attachment', attachment);
            }

            const response = await fetch('/api/quote', {
                method: 'POST',
                // Content-Type header not needed for FormData, browser sets it with boundary
                body: data,
            });

            if (response.ok) {
                toast.success(t('toast.success'));
                setStep(4); // Success state
            } else {
                const data = await response.json();
                toast.error(data.error || "Submission failed");
            }
        } catch (error) {
            toast.error(t('toast.error'));
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-md border-t-4 border-primary">
            {step < 4 && (
                <>
                    <div className="text-center mb-6 sm:mb-8">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground dark:text-white tracking-tight">{t('quote.title')}</h3>
                        <p className="text-sm text-secondary-foreground opacity-70 mt-2">
                            {t('quote.subtitle')}
                        </p>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex items-center justify-between px-2 sm:px-4 mb-6 sm:mb-8">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center w-full last:w-auto">
                                <div
                                    className={`flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full border-2 font-bold text-xs sm:text-lg transition-colors
                                    ${s === step
                                            ? 'border-primary bg-primary text-white'
                                            : s < step
                                                ? 'border-primary bg-primary text-white'
                                                : 'border-gray-200 text-gray-400'
                                        }`}
                                >
                                    {s}
                                </div>
                                {s < 3 && (
                                    <div
                                        className={`h-0.5 sm:h-1 mx-1 sm:mx-2 flex-grow rounded-full transition-colors ${s < step ? 'bg-primary' : 'bg-gray-200'
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}

            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">{t('quote.pickup')}</label>
                            <LocationInput
                                placeholder={t('quote.pickupPlaceholder')}
                                defaultValue={formData.pickup}
                                onSelect={(address, isValid) => {
                                    updateFormData({ pickup: address });
                                    setValidity(v => ({ ...v, pickup: isValid }));
                                }}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">{t('quote.destination')}</label>
                            <LocationInput
                                placeholder={t('quote.destinationPlaceholder')}
                                defaultValue={formData.destination}
                                onSelect={(address, isValid) => {
                                    updateFormData({ destination: address });
                                    setValidity(v => ({ ...v, destination: isValid }));
                                }}
                            />
                        </div>
                        <Button
                            type="button"
                            className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90 text-white mt-4"
                            onClick={nextStep}
                        >
                            {t('quote.continue')}
                        </Button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">{t('quote.serviceType')}</label>
                            <select
                                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                                value={formData.serviceType}
                                onChange={(e) => updateFormData({ serviceType: e.target.value, houseSize: "" })} // Reset size on type change
                            >
                                <option value="">{t('quote.serviceTypePlaceholder')}</option>
                                <option value="house">{t('quote.service.house')}</option>
                                <option value="office">{t('quote.service.office')}</option>
                                <option value="packing">{t('quote.service.packing')}</option>
                            </select>
                        </div>

                        {(formData.serviceType === 'house' || formData.serviceType === 'packing') && (
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">{t('quote.houseSize')}</label>
                                <select
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                                    value={formData.houseSize}
                                    onChange={(e) => updateFormData({ houseSize: e.target.value })}
                                >
                                    <option value="">{t('quote.selectSize')}</option>
                                    <option value="studio">{t('size.studio')}</option>
                                    <option value="1br">{t('size.1br')}</option>
                                    <option value="2br">{t('size.2br')}</option>
                                    <option value="3br">{t('size.3br')}</option>
                                    <option value="4br">{t('size.4br')}</option>
                                </select>
                            </div>
                        )}

                        {formData.serviceType === 'office' && (
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">{t('quote.officeSize')}</label>
                                <select
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                                    value={formData.houseSize} // reusing houseSize field for convenience, or add officeSize
                                    onChange={(e) => updateFormData({ houseSize: e.target.value })}
                                >
                                    <option value="">{t('quote.selectSize')}</option>
                                    <option value="small_office">{t('quoteForm.smallOffice')}</option>
                                    <option value="medium_office">{t('quote.service.mediumOffice')}</option>
                                    <option value="large_office">{t('quoteForm.largeOffice')}</option>
                                    <option value="floor_relocation">{t('quote.service.floorRelocation')}</option>
                                </select>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">{t('quote.attachFile')}</label>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setAttachment(e.target.files[0]);
                                    }
                                }}
                                className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">{t('quote.movingDate')}</label>
                            <Input
                                type="date"
                                value={formData.movingDate}
                                onChange={(e) => updateFormData({ movingDate: e.target.value })}
                                min={new Date().toISOString().split('T')[0]}
                            />
                        </div>
                        <div className="flex gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                className="flex-1 h-12"
                                onClick={prevStep}
                            >
                                {t('quote.back')}
                            </Button>
                            <Button
                                type="button"
                                className="flex-[2] h-12 text-lg font-bold bg-primary hover:bg-primary/90 text-white"
                                onClick={nextStep}
                            >
                                {t('quote.next')}
                            </Button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4">
                        <Input
                            placeholder={t('quote.fullName')}
                            value={formData.fullName}
                            onChange={(e) => updateFormData({ fullName: e.target.value })}
                            required
                        />
                        <Input
                            placeholder={t('quote.email')}
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData({ email: e.target.value })}
                            required
                        />
                        <Input
                            placeholder={t('quote.phone')}
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateFormData({ phone: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder={t('quote.notes')}
                            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground resize-none h-24"
                            value={formData.notes}
                            onChange={(e) => updateFormData({ notes: e.target.value })}
                        />
                        <div className="flex gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                className="flex-1 h-12"
                                onClick={prevStep}
                            >
                                Back
                            </Button>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="flex-[2] h-12 text-lg font-bold bg-secondary hover:bg-secondary/90 text-white"
                            >
                                {loading ? t('quote.sending') : t('quote.button')}
                            </Button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="text-center py-8 space-y-4">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{t('quote.successTitle')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {t('quote.successMessage')}
                        </p>
                        <Button
                            type="button"
                            className="w-full"
                            onClick={() => {
                                setStep(1);
                                setFormData({
                                    fullName: "",
                                    email: "",
                                    phone: "",
                                    pickup: "",
                                    destination: "",
                                    serviceType: "",
                                    houseSize: "",
                                    movingDate: "",
                                    notes: "",
                                });
                            }}
                        >
                            {t('quote.another')}
                        </Button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default QuoteForm;
