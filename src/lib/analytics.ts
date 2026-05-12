// Lightweight analytics helper - fires GA4 events when NEXT_PUBLIC_GA_ID is set.
type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  const w = window as GtagWindow;
  if (typeof w.gtag === 'function') {
    try { w.gtag('event', name, params || {}); } catch { /* noop */ }
  }
}

export const events = {
  whatsappClick: (source: string) => trackEvent('whatsapp_click', { source }),
  quoteSubmitted: (context: string) => trackEvent('generate_lead', { context, currency: 'INR' }),
  phoneClick: (source: string) => trackEvent('phone_click', { source }),
  productView: (slug: string) => trackEvent('view_item', { item_id: slug }),
  applicationView: (slug: string) => trackEvent('view_item_list', { item_list_id: slug }),
};
