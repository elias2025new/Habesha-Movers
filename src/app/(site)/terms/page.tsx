import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Habesha Movers',
    description: 'Terms of Service for Habesha Movers. Read our terms and conditions for moving services in Addis Ababa.',
};

export default function TermsPage() {
    return (
        <div className="bg-background min-h-screen py-24 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-white">Terms of Service</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Last Updated: February 2026</p>

                <div className="prose dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">1. Agreement to Terms</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Habesha Movers ("we," "us," or "our"), concerning your access to and use of the habeshamovers.com website and our moving services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">2. Service Description</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Habesha Movers provides residential and commercial moving services, packing, and relocation assistance within Addis Ababa and surrounding areas. We reserve the right to refuse service to anyone for any reason at any time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">3. Estimates and Pricing</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Quotes provided through our website or over the phone are estimates based on the information provided. Final pricing may vary based on:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Actual volume or weight of items moved.</li>
                            <li>Accessibility of pickup or delivery locations (stairs, elevators, long carries).</li>
                            <li>Additional services requested (packing, assembly/disassembly).</li>
                            <li>Unforeseen circumstances or delays not caused by us.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">4. Cancellations and Rescheduling</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            You may cancel or reschedule your move up to 48 hours before the scheduled time without penalty. Cancellations made within 48 hours of the scheduled service may be subject to a cancellation fee.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">5. Liability and Insurance</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            We take great care in handling your belongings. However, our liability for loss or damage is limited in accordance with local regulations and our insurance policy.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            We are not responsible for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Damage to items packed by the customer (PBO - Packed By Owner).</li>
                            <li>Cash, jewelry, documents, or other high-value personal items.</li>
                            <li>Minor scratches or dents to walls or floors in difficult access situations, though we take all precautions to avoid this.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">6. Payment Terms</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Payment is due upon completion of the service unless otherwise agreed in writing. We accept cash, bank transfers, and mobile money payments.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">7. Governing Law</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            These Terms shall be governed by and defined following the laws of Ethiopia. Habesha Movers and yourself irrevocably consent that the courts of Ethiopia shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">8. Contact Information</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Questions about the Terms of Service should be sent to us at:
                        </p>
                        <div className="mt-4 p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
                            <p className="font-semibold text-foreground dark:text-white">Habesha Movers</p>
                            <p className="text-gray-600 dark:text-gray-400">Phone: 0999220000</p>
                            <p className="text-gray-600 dark:text-gray-400">Email: info@habeshamovers.com</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
