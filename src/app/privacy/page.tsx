import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Arihant Packaging collects, uses, and protects information submitted through arihantpackagingindia.com.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy' }]} />
      </section>

      <section className="container-x pb-16 max-w-3xl">
        <h1 className="heading-xl">Privacy <span className="serif-accent">Policy</span></h1>
        <p className="lede mt-4">Last updated: 13 May 2026</p>

        <div className="prose prose-brand max-w-none mt-8 space-y-6 text-ink-700 leading-relaxed">
          <p>
            {SITE.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website
            <strong> {SITE.url}</strong> (the &quot;Service&quot;). This Privacy Policy explains what
            information we collect, how we use it, and the choices you have. We comply with the
            Digital Personal Data Protection Act, 2023 (DPDP Act), the Information Technology Act,
            2000, and the Information Technology (Reasonable Security Practices and Procedures and
            Sensitive Personal Data or Information) Rules, 2011 of India.
          </p>

          <h2 className="heading-sm mt-8">1. Information we collect</h2>
          <p>
            When you submit our &quot;Get a Quote&quot; contact form, we collect: your name, company name
            (optional), phone or WhatsApp number, email (optional), city/state (optional), estimated
            quantity (optional), and your message. We use this information solely to respond to your
            inquiry and discuss your packaging requirements.
          </p>
          <p>
            We may also collect anonymous usage data such as your browser type, device type, pages
            visited, and approximate location via standard web-analytics tools. This data is aggregated
            and does not identify you personally.
          </p>

          <h2 className="heading-sm mt-8">2. How we use your information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To respond to your inquiry and provide a quote.</li>
            <li>To communicate with you about orders, deliveries, and follow-ups.</li>
            <li>To improve our website and customer experience.</li>
            <li>To comply with applicable Indian tax, accounting, and legal requirements.</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties.</p>

          <h2 className="heading-sm mt-8">3. Sharing</h2>
          <p>
            We share your information only with service providers necessary to operate this Service
            (e.g., transactional email provider, hosting). All providers are bound by confidentiality.
            We may disclose information if required by a lawful Indian authority.
          </p>

          <h2 className="heading-sm mt-8">4. Data retention</h2>
          <p>
            We retain inquiry data only as long as needed to fulfil the purpose for which it was
            submitted or as required by law (typically up to 3 years from last interaction). After
            that, we delete or anonymise the data.
          </p>

          <h2 className="heading-sm mt-8">5. Security</h2>
          <p>
            We use reasonable security practices including HTTPS encryption, restricted access to
            inquiry data, and standard hosting safeguards. No internet transmission is 100% secure;
            we cannot guarantee absolute security.
          </p>

          <h2 className="heading-sm mt-8">6. Your rights as a Data Principal</h2>
          <p>Under the Digital Personal Data Protection Act, 2023, you can ask us to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access the personal information we hold about you.</li>
            <li>Correct any inaccurate or incomplete information.</li>
            <li>Erase your information (subject to lawful retention requirements).</li>
            <li>Withdraw consent for any non-essential processing, including analytics cookies.</li>
            <li>Nominate another person to exercise these rights on your behalf in the event of death or incapacity.</li>
            <li>Raise a grievance about how we handle your data (see Section 11 below).</li>
          </ul>
          <p>
            To exercise any of these rights, write to us at{' '}
            <a className="text-brand-600 underline" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>.
            We will respond within 30 days as required by the DPDP Act.
          </p>

          <h2 className="heading-sm mt-8">7. Cookies and analytics</h2>
          <p>
            This Service uses only essential cookies required for site functionality plus
            anonymous analytics cookies (Google Analytics 4) to understand aggregate visitor
            behaviour. We do not use advertising cookies, retargeting cookies, or sell cookie
            data to third parties.
          </p>
          <p>
            When you first visit, you will see a cookie notice. You can also block or delete
            cookies through your browser settings at any time without affecting site functionality.
          </p>

          <h2 className="heading-sm mt-8">8. Children</h2>
          <p>
            The Service is intended for businesses. We do not knowingly collect data from anyone
            under 18 years of age.
          </p>

          <h2 className="heading-sm mt-8">9. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be highlighted
            on this page. The &quot;Last updated&quot; date above shows the current version.
          </p>

          <h2 className="heading-sm mt-8">10. Contact us</h2>
          <p>
            For questions about this Privacy Policy, write to:<br />
            <strong>{SITE.name}</strong><br />
            {SITE.address.full}<br />
            Email: <a className="text-brand-600 underline" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a><br />
            Phone: <a className="text-brand-600 underline" href={`tel:${SITE.contact.phone}`}>{SITE.contact.phoneDisplay}</a>
          </p>

          <h2 className="heading-sm mt-8">11. Grievance Officer</h2>
          <p>
            As required by the Digital Personal Data Protection Act, 2023, you can raise a
            grievance about how we handle your personal data with our Grievance Officer:
          </p>
          <p>
            <strong>Rittik Monohat</strong><br />
            {SITE.name}<br />
            {SITE.address.full}<br />
            Email: <a className="text-brand-600 underline" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a><br />
            Phone: <a className="text-brand-600 underline" href={`tel:${SITE.contact.phone}`}>{SITE.contact.phoneDisplay}</a>
          </p>
          <p>
            We will acknowledge your grievance within 7 working days and resolve it within 30 days,
            as required by the DPDP Act and its Rules.
          </p>
        </div>
      </section>
    </>
  );
}
