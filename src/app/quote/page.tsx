import QuoteForm from '@/components/quote/QuoteForm';

export default function QuotePage() {
    return (
        <div className="bg-background dark:bg-gray-900/50 min-h-screen pt-24 pb-24 transition-colors">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl mb-4">Get a Free Quote</h1>
                    <p className="text-xl text-secondary-foreground opacity-90 max-w-2xl mx-auto">
                        Fill out the form below and we&apos;ll provide you with a detailed, no-obligation quote for your move.
                    </p>
                </div>

                <QuoteForm />
            </div>
        </div>
    );
}
