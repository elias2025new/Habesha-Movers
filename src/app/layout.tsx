import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Movers in Addis Ababa | House & Office Moving Company | Habesha Movers",
  description: "Reliable, fast, and secure house and office moving services in Addis Ababa, Ethiopia. Get a free quote today!",
  keywords: ["moving company", "Addis Ababa", "Ethiopia", "house moving", "office relocation", "Habesha Movers"],
  icons: {
    icon: [
      { url: "/images/habesha-logo-svg.svg" },
      { url: "/images/habesha-logo-svg.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/images/habesha-logo-svg.svg" },
    ],
  },
  manifest: "/manifest.json",
};



import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/components/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            <Toaster position="top-center" richColors />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
