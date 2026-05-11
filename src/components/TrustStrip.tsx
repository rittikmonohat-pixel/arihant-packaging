import { ShieldCheck, Award, Layers, Palette, Calendar } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function TrustStrip() {
  const items = [
    { icon: Calendar, label: `Since ${SITE.foundedYear}`, sub: `${SITE.stats.yearsInBusiness}+ years experience` },
    { icon: Award, label: 'MSME Registered', sub: 'Udyam certified' },
    { icon: Layers, label: '3-layer Lamination', sub: 'Full barrier protection' },
    { icon: Palette, label: 'Up to 8 Colors', sub: 'Rotogravure printing' },
    { icon: ShieldCheck, label: 'FSSAI Compliant', sub: 'Food-grade materials' },
  ];

  return (
    <div className="bg-brand-50 border-y border-brand-100/60">
      <div className="container-x py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {items.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 text-left">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-brand-200 grid place-items-center text-brand-600">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-900 leading-tight">{label}</div>
                <div className="text-xs text-ink-500 leading-tight">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
