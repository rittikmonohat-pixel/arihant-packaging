import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ApplicationCard from '@/components/ApplicationCard';
import { APPLICATIONS } from '@/lib/applications';

export const metadata: Metadata = {
  title: 'Packaging Applications — Foods, Snacks, Dairy, Personal Care, Agri',
  description: 'Custom flexible packaging for atta, namkeen, tea, masala, ice cream, batter, dried fruits, makhana, fertilizer, seeds, sanitary pads, and more — manufactured in Kolkata.',
  alternates: { canonical: '/applications' },
};

const CATEGORIES: { id: string; label: string }[] = [
  { id: 'foods', label: 'Foods & Cereals' },
  { id: 'snacks', label: 'Snacks & Namkeen' },
  { id: 'dairy-batter', label: 'Dairy & Batter' },
  { id: 'personal-care', label: 'Personal Care' },
  { id: 'detergents', label: 'Detergents' },
  { id: 'agri', label: 'Agriculture & Fertilizer' },
];

export default function ApplicationsIndex() {
  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[{ name: 'Applications', href: '/applications' }]} />
      </section>
      <section className="container-x pb-12">
        <div className="max-w-3xl">
          <h1 className="heading-xl">Applications We Serve</h1>
          <p className="lede mt-4">
            From atta and namkeen to dairy, detergent, and fertiliser — our flexible packaging is engineered for the demands of every industry we serve.
          </p>
        </div>
      </section>

      {CATEGORIES.map((cat) => {
        const inCat = APPLICATIONS.filter((a) => a.category === cat.id);
        if (inCat.length === 0) return null;
        return (
          <section key={cat.id} className="container-x pb-14">
            <h2 className="heading-md mb-5">{cat.label}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {inCat.map((a) => <ApplicationCard key={a.slug} app={a} />)}
            </div>
          </section>
        );
      })}
    </>
  );
}
