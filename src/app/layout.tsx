import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Habesha Movers | Professional Moving Services in Addis Ababa",
  description: "Reliable, fast, and secure house and office moving services in Addis Ababa, Ethiopia. Get a free quote today!",
  keywords: ["moving company", "Addis Ababa", "Ethiopia", "house moving", "office relocation", "Habesha Movers"],
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaMarkup from "@/components/SEO/SchemaMarkup";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import Preloader from "@/components/Preloader";
import { LanguageProvider } from "@/components/LanguageContext";
import MobileCTA from "@/components/ui/MobileCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light" style={{ colorScheme: 'light' }}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  localStorage.removeItem('theme'); // Clear legacy key
                  const key = 'habesha-movers-theme';
                  const theme = localStorage.getItem(key);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="habesha-movers-theme"
            enableColorScheme={true}
            disableTransitionOnChange
          >
            <Toaster position="top-center" richColors />
            <Preloader />
            <SchemaMarkup />
            <Header />
            <main className="flex-grow pt-32">
              {children}
            </main>
            <Footer />
            <MobileCTA />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
