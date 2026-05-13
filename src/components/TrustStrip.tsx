import { Award, Calendar, Layers, Palette, ShieldCheck } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function TrustStrip() {
  const items = [
    { icon: Calendar, label: `Since ${SITE.foundedYear}`, sub: `${SITE.stats.yearsInBusiness}+ years experience` },
    { icon: Award, label: 'MSME Registered', sub: 'Udyam certified' },
    { icon: Layers, label: 'Multi-layers Lamination', sub: 'Full barrier protection' },
    { icon: Palette, label: 'Up to 8 Colours', sub: 'Rotogravure printing' },
    { icon: ShieldCheck, label: 'Custom Sizes', sub: 'Made-to-order' },
  ];

  return (
    <div className="relative">
      <div className="container-x py-8">
        <div className="glass rounded-3xl px-6 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {items.map(({ icon: Icon, label, sub }, i) => (
              <div
                key={label}
                className="flex items-center gap-3 text-left animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 border border-brand-200/60 grid place-items-center text-brand-600">
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
    </div>
  );
}
