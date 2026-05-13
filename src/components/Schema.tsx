import { SITE } from '@/lib/site';

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        logo: `${SITE.url}/images/logo.svg`,
        foundingDate: '2016',
        email: SITE.contact.email,
        telephone: SITE.contact.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.country,
        },
        sameAs: [
          SITE.social.facebook,
          SITE.social.instagram,
          SITE.social.twitter,
          SITE.social.youtube,
          SITE.social.indiamart,
          SITE.social.tradeindia,
          SITE.social.justdial,
        ],
      }}
    />
  );
}

export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${SITE.url}/#localbusiness`,
        name: SITE.name,
        image: `${SITE.url}/images/logo.svg`,
        url: SITE.url,
        telephone: SITE.contact.phone,
        email: SITE.contact.email,
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE.geo.latitude,
          longitude: SITE.geo.longitude,
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '17:00' },
        ],
        areaServed: { '@type': 'Country', name: 'India' },
        sameAs: [SITE.social.google, SITE.social.facebook, SITE.social.instagram],
      }}
    />
  );
}

export function ProductSchema({
  name, description, image, sku, mpn, brand = SITE.name, offers,
}: {
  name: string; description: string; image: string; sku?: string; mpn?: string; brand?: string;
  offers?: { priceCurrency?: string; availability?: string; minimumOrderQuantity?: string };
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        image: image.startsWith('http') ? image : `${SITE.url}${image}`,
        sku,
        mpn,
        brand: { '@type': 'Brand', name: brand },
        manufacturer: { '@type': 'Organization', name: SITE.name, url: SITE.url },
        offers: {
          '@type': 'Offer',
          priceCurrency: offers?.priceCurrency || 'INR',
          availability: offers?.availability || 'https://schema.org/InStock',
          eligibleQuantity: { '@type': 'QuantitativeValue', minValue: offers?.minimumOrderQuantity || '300', unitCode: 'KGM' },
          seller: { '@type': 'Organization', name: SITE.name },
        },
      }}
    />
  );
}

export function FAQSchema({ items }: { items: { q: string; a: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: it.name,
          item: `${SITE.url}${it.href}`,
        })),
      }}
    />
  );
}

export function ArticleSchema({
  title, description, image, datePublished, dateModified, author = SITE.name,
}: {
  title: string; description: string; image: string;
  datePublished: string; dateModified?: string; author?: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: image.startsWith('http') ? image : `${SITE.url}${image}`,
        datePublished,
        dateModified: dateModified || datePublished,
        author: { '@type': 'Organization', name: author },
        publisher: {
          '@type': 'Organization',
          name: SITE.name,
          logo: { '@type': 'ImageObject', url: `${SITE.url}/images/logo.svg` },
        },
      }}
    />
  );
}
