"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import LocationInput from '@/components/ui/LocationInput';
import { Input } from '@/components/ui/Input';
import { toast } from 'sonner';

const houseSizes = [
    { label: 'Studio', value: 'studio' },
    { label: '1 Bedroom', value: '1br' },
    { label: '2 Bedrooms', value: '2br' },
    { label: '3 Bedrooms', value: '3br' },
    { label: '4+ Bedrooms', value: '4br+' },
    { label: 'Office', value: 'office' },
];

const QuoteForm = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        pickup: "",
        destination: "",
        houseSize: "",
        movingDate: "",
        notes: "",
    });
    const [validity, setValidity] = useState({
        pickup: false,
        destination: false
    });

    const updateFormData = (data: Partial<typeof formData>) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    const nextStep = () => {
        if (step === 1) {
            if (!formData.pickup || !formData.destination) {
                toast.error("Please select both pickup and destination");
                return;
            }
            if (!validity.pickup || !validity.destination) {
                toast.error("Please provide valid locations in Addis Ababa");
                return;
            }
        }
        if (step === 2) {
            if (!formData.houseSize || !formData.movingDate) {
                toast.error("Please provide house size and moving date");
                return;
            }
        }
        setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validity.pickup || !validity.destination) {
            toast.error("Please provide valid locations in Addis Ababa");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    pickupAddress: formData.pickup,
                    destinationAddress: formData.destination,
                    houseSize: formData.houseSize,
                    movingDate: formData.movingDate,
                    notes: formData.notes,
                }),
            });

            if (response.ok) {
                toast.success("Quote request sent successfully!");
                setStep(4); // Success state
            } else {
                const data = await response.json();
                toast.error(data.error || "Submission failed");
            }
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md border-t-4 border-primary">
            {step < 4 && (
                <>
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-extrabold text-foreground">Let&apos;s Get You Moving</h3>
                        <p className="text-sm text-secondary-foreground opacity-70 mt-1">
                            Get your free quote in three quick steps.
                        </p>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex items-center justify-between px-4 mb-8">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center w-full last:w-auto">
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 font-bold text-lg transition-colors
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
                                        className={`h-1 mx-2 flex-grow rounded-full transition-colors ${s < step ? 'bg-primary' : 'bg-gray-200'
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
                            <label className="block text-sm font-medium text-foreground mb-1">Pickup Address</label>
                            <LocationInput
                                placeholder="Pickup from..."
                                defaultValue={formData.pickup}
                                onSelect={(address, isValid) => {
                                    updateFormData({ pickup: address });
                                    setValidity(v => ({ ...v, pickup: isValid }));
                                }}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">Destination Address</label>
                            <LocationInput
                                placeholder="Moving to..."
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
                            Continue
                        </Button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">House Size</label>
                            <select
                                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                                value={formData.houseSize}
                                onChange={(e) => updateFormData({ houseSize: e.target.value })}
                            >
                                <option value="">Select Size</option>
                                {houseSizes.map(size => (
                                    <option key={size.value} value={size.value}>{size.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1">Moving Date</label>
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
                                Back
                            </Button>
                            <Button
                                type="button"
                                className="flex-[2] h-12 text-lg font-bold bg-primary hover:bg-primary/90 text-white"
                                onClick={nextStep}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4">
                        <Input
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={(e) => updateFormData({ fullName: e.target.value })}
                            required
                        />
                        <Input
                            placeholder="Email Address"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData({ email: e.target.value })}
                            required
                        />
                        <Input
                            placeholder="Phone Number"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateFormData({ phone: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Special Notes (Optional)"
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
                                {loading ? "Sending..." : "Get Free Quote"}
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
                        <h3 className="text-2xl font-bold text-foreground">Request Received!</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Thank you for choosing Habesha Movers. We will review your request and contact you within 30 minutes with a detailed quote.
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
                                    houseSize: "",
                                    movingDate: "",
                                    notes: "",
                                });
                            }}
                        >
                            Make Another Request
                        </Button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default QuoteForm;
