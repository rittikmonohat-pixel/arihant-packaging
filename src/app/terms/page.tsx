import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms governing the use of the Arihant Packaging website (arihantpackagingindia.com).',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[{ name: 'Terms of Use', href: '/terms' }]} />
      </section>

      <section className="container-x pb-16 max-w-3xl">
        <h1 className="heading-xl">Terms of <span className="serif-accent">Use</span></h1>
        <p className="lede mt-4">Last updated: 12 May 2026</p>

        <div className="prose prose-brand max-w-none mt-8 space-y-6 text-ink-700 leading-relaxed">
          <p>
            These Terms of Use (&quot;Terms&quot;) govern your use of the website {SITE.url} (the
            &quot;Service&quot;) operated by {SITE.name}. By accessing or using the Service, you
            agree to be bound by these Terms.
          </p>

          <h2 className="heading-sm mt-8">1. Use of the Service</h2>
          <p>
            You may use this Service to learn about our flexible packaging products, request a
            quote, or contact us. You agree not to use the Service:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>For any unlawful purpose.</li>
            <li>To impersonate any person or misrepresent your affiliation.</li>
            <li>To transmit harmful code, spam, or to scrape content programmatically without consent.</li>
          </ul>

          <h2 className="heading-sm mt-8">2. Content and intellectual property</h2>
          <p>
            All content on this Service — including text, logos, photographs, illustrations, and the
            site design — is the property of {SITE.name} or its licensors and is protected by Indian
            and international copyright laws. You may not reproduce, distribute, or create derivative
            works without our written permission.
          </p>

          <h2 className="heading-sm mt-8">3. Product information</h2>
          <p>
            Product descriptions, technical specifications, and images are illustrative and subject
            to change. Actual products may vary slightly in appearance. Specifications, lead times,
            and pricing shared via this Service are estimates; firm quotations are provided in writing
            after a detailed brief.
          </p>

          <h2 className="heading-sm mt-8">4. Quotation and orders</h2>
          <p>
            Any quote we provide is valid for the period stated and subject to acceptance of our
            commercial terms (MOQ, payment terms, lead time, delivery, GST). A binding order is
            formed only when we acknowledge your purchase order in writing.
          </p>

          <h2 className="heading-sm mt-8">5. Disclaimers</h2>
          <p>
            The Service is provided &quot;as is&quot; without warranties of any kind, express or
            implied. We do not warrant that the Service will be uninterrupted, error-free, or free
            of viruses.
          </p>

          <h2 className="heading-sm mt-8">6. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by Indian law, {SITE.name} shall not be liable for any
            indirect, incidental, special, or consequential damages arising from your use of, or
            inability to use, the Service.
          </p>

          <h2 className="heading-sm mt-8">7. External links</h2>
          <p>
            The Service may contain links to third-party websites (IndiaMART, TradeIndia, Google,
            social media platforms, etc.). We are not responsible for the content or privacy
            practices of those sites.
          </p>

          <h2 className="heading-sm mt-8">8. Governing law and jurisdiction</h2>
          <p>
            These Terms are governed by the laws of India. Any dispute will be subject to the
            exclusive jurisdiction of the courts at Kolkata, West Bengal.
          </p>

          <h2 className="heading-sm mt-8">9. Changes to these Terms</h2>
          <p>
            We may update these Terms occasionally. Continued use of the Service after changes
            constitutes acceptance of the revised Terms.
          </p>

          <h2 className="heading-sm mt-8">10. Contact</h2>
          <p>
            Questions about these Terms? Write to:<br />
            <strong>{SITE.name}</strong><br />
            {SITE.address.full}<br />
            Email: <a className="text-brand-600 underline" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
