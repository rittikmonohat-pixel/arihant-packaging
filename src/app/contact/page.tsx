import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us — Get a Quote',
  description: `Contact Arihant Packaging — Madhyamgram, Kolkata. Phone ${SITE.contact.phoneDisplay}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
      </section>

      <section className="container-x pb-12">
        <div className="max-w-3xl">
          <h1 className="heading-xl">Get in touch</h1>
          <p className="lede mt-4">
            Tell us what you need — pouch type, material, quantity, target launch date — and our team will get back to you.
          </p>
        </div>
      </section>

      <section className="container-x pb-24 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-2xl border border-ink-100 p-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm text-ink-500">Phone / WhatsApp</div>
                <a href={`tel:${SITE.contact.phone}`} className="text-lg font-semibold text-ink-900 hover:text-brand-600">
                  {SITE.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-ink-100 p-6">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm text-ink-500">Email</div>
                <a href={`mailto:${SITE.contact.email}`} className="text-base font-semibold text-ink-900 hover:text-brand-600 break-all">
                  {SITE.contact.email}
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-ink-100 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm text-ink-500">Factory</div>
                <p className="text-base font-semibold text-ink-900 leading-snug">{SITE.address.full}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-ink-100 p-6">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm text-ink-500">Working hours</div>
                <p className="text-sm text-ink-900">Mon–Fri: {SITE.hours.monFri}<br />Sat: {SITE.hours.sat}<br />Sun: {SITE.hours.sun}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-ink-100 aspect-[4/3]">
            <iframe
              title="Arihant Packaging — Google Maps"
              src="https://www.google.com/maps?q=Arihant+Packaging+Madhyamgram+Kolkata&output=embed"
              loading="lazy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <QuoteForm context="Contact page" subtitle="Our team will be in touch shortly." />
        </div>
      </section>
    </>
  );
}
