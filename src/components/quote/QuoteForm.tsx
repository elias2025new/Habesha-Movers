"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import DatePicker from '@/components/ui/DatePicker';
import LocationInput from '@/components/ui/LocationInput';
import { useLanguage } from '@/components/LanguageContext';
import { toast } from 'sonner';

const QuoteForm = () => {
    const { t } = useLanguage();
    const [loading, setLoading] = useState(false);
    const [attachments, setAttachments] = useState<File[]>([]);
    const [isLocked, setIsLocked] = useState(false);
    const [cooldownRemaining, setCooldownRemaining] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "+251",
        pickup: "",
        destination: "",
        serviceType: "",
        houseSize: "",
        movingDate: "",
        notes: "",
    });
    const [validity, setValidity] = useState({
        pickup: false,
        destination: false,
    });

    // Check for cooldown on mount
    useEffect(() => {
        const checkCooldown = () => {
            const lastSubmission = localStorage.getItem('last_quote_submission');
            if (lastSubmission) {
                const timeDiff = Date.now() - parseInt(lastSubmission);
                const fifteenMins = 15 * 60 * 1000;

                if (timeDiff < fifteenMins) {
                    setIsLocked(true);
                    setCooldownRemaining(Math.ceil((fifteenMins - timeDiff) / 60000));
                } else {
                    setIsLocked(false);
                }
            }
        };

        checkCooldown();
        const interval = setInterval(checkCooldown, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    const updateFormData = (updates: Partial<typeof formData>) => {
        setFormData(prev => ({ ...prev, ...updates }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isLocked) {
            toast.error(`${t('error.rateLimit15m')} (${cooldownRemaining}m remaining)`);
            return;
        }

        // Validation
        if (!formData.pickup || !formData.destination) {
            toast.error(t('toast.locationError'));
            return;
        }
        if (!formData.serviceType) {
            toast.error(t('toast.selectService'));
            return;
        }
        if ((formData.serviceType === 'house' || formData.serviceType === 'packing' || formData.serviceType === 'office') && !formData.houseSize) {
            toast.error(t('val.selectSize'));
            return;
        }
        if (!formData.movingDate) {
            toast.error(t('val.selectDate'));
            return;
        }
        if (formData.fullName.length < 2) {
            toast.error("Full Name must be at least 2 characters");
            return;
        }

        // Ethiopian Phone Validation
        const phoneRegex = /^\+2510?\d{9}$/;
        if (!phoneRegex.test(formData.phone)) {
            toast.error(t('error.invalidPhone'));
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

            attachments.forEach((file) => {
                data.append('attachments', file);
            });

            const response = await fetch('/api/quote', {
                method: 'POST',
                body: data,
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(t('toast.success'));
                localStorage.setItem('last_quote_submission', Date.now().toString());
                setIsLocked(true);
                setCooldownRemaining(15);
                setIsSuccess(true);
            } else if (response.status === 429) {
                const errorKey = result.message === 'rateLimit24h' ? 'error.rateLimit24h' : 'error.rateLimit15m';
                toast.error(t(errorKey));
            } else if (result.details && result.details.fieldErrors) {
                const fieldErrors = result.details.fieldErrors;
                const firstErrorField = Object.keys(fieldErrors)[0];
                const errorMessage = fieldErrors[firstErrorField]?.[0];
                toast.error(`${firstErrorField}: ${errorMessage}`);
            } else {
                toast.error(result.message || result.error || "Submission failed");
            }
        } catch (error) {
            toast.error(t('toast.error'));
        } finally {
            setLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-12 bg-white dark:bg-[#1C1C1C] rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100 dark:border-gray-800 transition-colors">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('quote.successTitle')}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    {t('quote.successMessage')}
                </p>
                <Button
                    onClick={() => {
                        setIsSuccess(false);
                        setAttachments([]);
                        setFormData({
                            fullName: "",
                            email: "",
                            phone: "+251",
                            pickup: "",
                            destination: "",
                            serviceType: "",
                            houseSize: "",
                            movingDate: "",
                            notes: "",
                        });
                    }}
                    className="w-full sm:w-auto"
                >
                    {t('quote.another')}
                </Button>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/95 dark:bg-[#1C1C1C] backdrop-blur-md rounded-[24px] shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-6 sm:p-10 w-full max-w-4xl mx-auto border border-gray-100 dark:border-gray-800 transition-all duration-300"
        >
            {isLocked && (
                <div className="mb-8 p-4 bg-primary/10 dark:bg-[#8B3A2C]/20 border border-primary/20 dark:border-[#8B3A2C]/30 rounded-xl text-center">
                    <p className="text-sm font-bold text-primary dark:text-[#FF6B4A]">
                        🔒 {t('error.rateLimit15m')}
                    </p>
                    <p className="text-xs text-primary/70 dark:text-[#FF6B4A]/70 mt-1">
                        {cooldownRemaining} {t('quote.minutesRemaining')}
                    </p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Services & Locations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-primary/10 dark:bg-[#8B3A2C]/20 text-primary dark:text-[#F5A623] flex items-center justify-center text-sm">1</span>
                            {t('nav.services')} & {t('nav.locations')}
                        </h3>

                        <div>
                            <Select
                                label={t('quote.serviceType')}
                                options={[
                                    { value: 'house', label: t('quote.service.house') },
                                    { value: 'office', label: t('quote.service.office') },
                                    { value: 'packing', label: t('quote.service.packing') },
                                ]}
                                value={formData.serviceType}
                                onChange={(val) => updateFormData({ serviceType: val, houseSize: "" })}
                                placeholder={t('quote.serviceTypePlaceholder')}
                            />
                        </div>

                        {(formData.serviceType === 'house' || formData.serviceType === 'packing') && (
                            <div>
                                <Select
                                    label={t('quote.houseSize')}
                                    options={[
                                        { value: 'studio', label: t('size.studio') },
                                        { value: '1br', label: t('size.1br') },
                                        { value: '2br', label: t('size.2br') },
                                        { value: '3br', label: t('size.3br') },
                                        { value: '4br', label: t('size.4br') },
                                    ]}
                                    value={formData.houseSize}
                                    onChange={(val) => updateFormData({ houseSize: val })}
                                    placeholder={t('quote.selectSize')}
                                />
                            </div>
                        )}

                        {formData.serviceType === 'office' && (
                            <div>
                                <Select
                                    label={t('quote.officeSize')}
                                    options={[
                                        { value: 'small_office', label: t('quoteForm.smallOffice') },
                                        { value: 'medium_office', label: t('quote.service.mediumOffice') },
                                        { value: 'large_office', label: t('quoteForm.largeOffice') },
                                        { value: 'floor_relocation', label: t('quote.service.floorRelocation') },
                                    ]}
                                    value={formData.houseSize}
                                    onChange={(val) => updateFormData({ houseSize: val })}
                                    placeholder={t('quote.selectSize')}
                                />
                            </div>
                        )}

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
                    </div>

                    {/* 2. Details & Contact */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-primary/10 dark:bg-[#8B3A2C]/20 text-primary dark:text-[#F5A623] flex items-center justify-center text-sm">2</span>
                            {t('quote.movingDate')} & {t('footer.contactUs')}
                        </h3>

                        <div>
                            <DatePicker
                                label={t('quote.movingDate')}
                                value={formData.movingDate}
                                onChange={(val) => updateFormData({ movingDate: val })}
                                placeholder={t('quote.movingDate')}
                            />
                        </div>

                        <Input
                            placeholder={t('quote.fullName')}
                            value={formData.fullName}
                            onChange={(e) => updateFormData({ fullName: e.target.value })}
                            required
                            minLength={2}
                            className=""
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                placeholder={t('quote.email')}
                                type="email"
                                value={formData.email}
                                onChange={(e) => updateFormData({ email: e.target.value })}
                                className=""
                            />
                            <Input
                                placeholder={t('quote.phone')}
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => {
                                    let val = e.target.value;
                                    if (!val.startsWith('+251')) {
                                        val = '+251' + val.replace(/^\+?2?5?1?/, '');
                                    }
                                    if (val.length <= 14) {
                                        updateFormData({ phone: val });
                                    }
                                }}
                                required
                                className=""
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground dark:text-[#F2F2F2] mb-1">{t('quote.attachFile')}</label>
                            <div className="relative">
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e.target.files) {
                                            const files = Array.from(e.target.files);
                                            if (files.length > 4) {
                                                toast.error(t('quote.photoLimitError'));
                                                e.target.value = "";
                                                setAttachments([]);
                                                return;
                                            }
                                            setAttachments(files);
                                        }
                                    }}
                                    className="w-full px-4 py-3 bg-white dark:bg-[#121212] border border-gray-300 dark:border-[#2A2A2A] rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-[#8B3A2C]/40 focus:border-transparent outline-none transition-all text-foreground dark:text-[#F2F2F2] cursor-pointer text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 dark:file:bg-[#8B3A2C]/20 file:text-primary dark:file:text-[#FF6B4A] hover:file:bg-primary/20 dark:hover:file:bg-[#8B3A2C]/30 file:transition-all file:duration-200 file:cursor-pointer"
                                />
                                {attachments.length > 0 && (
                                    <div className="mt-2 space-y-1">
                                        <p className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {attachments.length} {t('quote.selectedPhotos')}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <textarea
                            placeholder={t('quote.notes')}
                            className="w-full px-4 py-3 bg-white dark:bg-[#121212] border border-gray-300 dark:border-[#2A2A2A] rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-[#8B3A2C]/40 focus:border-transparent outline-none transition-all text-foreground dark:text-[#F2F2F2] placeholder:dark:text-[#777] resize-none h-24"
                            value={formData.notes}
                            onChange={(e) => updateFormData({ notes: e.target.value })}
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 text-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-[1.01] dark:bg-[#8B3A2C] dark:hover:bg-[#7A3226]"
                >
                    {loading ? t('quote.sending') : t('quote.button')}
                </Button>
            </form>
        </motion.div>
    );
};

export default QuoteForm;
