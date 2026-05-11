import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { OrganizationSchema, LocalBusinessSchema } from '@/components/Schema';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arihantpackagingindia.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Arihant Packaging | Custom Flexible Packaging Manufacturer in Kolkata',
    template: '%s | Arihant Packaging',
  },
  description: 'Arihant Packaging — leading manufacturer of custom printed flexible packaging pouches, laminated rolls, and stand-up zipper pouches in Kolkata, West Bengal. Rotogravure printed up to 8 colors. MOQ from 300 kg. Get a quote today.',
  keywords: ['flexible packaging manufacturer', 'custom printed pouches', 'laminated pouch Kolkata', 'rotogravure printing', 'stand up pouch manufacturer', 'packaging pouch India', 'plastic pouch manufacturer'],
  authors: [{ name: 'Arihant Packaging' }],
  creator: 'Arihant Packaging',
  publisher: 'Arihant Packaging',
  applicationName: 'Arihant Packaging',
  alternates: { canonical: '/' },
  formatDetection: { telephone: true, address: true, email: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Arihant Packaging',
    title: 'Arihant Packaging | Custom Flexible Packaging Manufacturer in Kolkata',
    description: 'Custom printed pouches, laminated rolls, stand-up zipper pouches. Rotogravure printing up to 8 colors. Made in Kolkata, India.',
    images: [
      { url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Arihant Packaging — flexible packaging manufacturer' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arihant Packaging | Custom Flexible Packaging Manufacturer',
    description: 'Custom printed pouches, laminated rolls. Made in Kolkata.',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'TP6FOz3J7_6FAFl9XYubMDH2nSYnXozGyzQgJGb8zIE', // existing GSC verification preserved
    other: { 'msvalidate.01': 'C12AABF815B551846A2FF6749ECB4575', 'yandex-verification': '0125bac755d751c6' },
  },
  category: 'Packaging',
};

export const viewport: Viewport = {
  themeColor: '#924C00',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white">
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />

        {/* JSON-LD: Organization + LocalBusiness sit on every page */}
        <OrganizationSchema />
        <LocalBusinessSchema />

        {/* Google Analytics 4 — replace with real ID once we have it */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
