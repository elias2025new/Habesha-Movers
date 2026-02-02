import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Habesha Movers',
    description: 'Privacy Policy for Habesha Movers. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
    return (
        <div className="bg-background min-h-screen py-24 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-white">Privacy Policy</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Last Updated: February 2026</p>

                <div className="prose dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">1. Introduction</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Habesha Movers ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (habeshamovers.com) and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">2. Information We Collect</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of services you have purchased from us.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform on the devices you use to access this website.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">3. How We Use Your Personal Data</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>To provide the moving services you requested.</li>
                            <li>To process your payments and manage your account.</li>
                            <li>To manage our relationship with you which will include notifying you about changes to our terms or privacy policy.</li>
                            <li>To improve our website, services, marketing and customer relationships.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">4. Data Security</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">5. Third-Party Links</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-white">6. Contact Us</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        </p>
                        <div className="mt-4 p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
                            <p className="font-semibold text-foreground dark:text-white">Habesha Movers</p>
                            <p className="text-gray-600 dark:text-gray-400">Gurd Shola, Addis Ababa, Ethiopia</p>
                            <p className="text-gray-600 dark:text-gray-400">Email: info@habeshamovers.com</p>
                            <p className="text-gray-600 dark:text-gray-400">Phone: 0999220000</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
