import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/ui/MobileCTA";
import BackToTop from "@/components/ui/BackToTop";
import Preloader from "@/components/Preloader";
import SchemaMarkup from "@/components/SEO/SchemaMarkup";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Preloader />
            <SchemaMarkup />
            <Header />
            <main className="flex-grow pt-32">
                {children}
            </main>
            <Footer />
            <MobileCTA />
            <BackToTop />
        </>
    );
}
