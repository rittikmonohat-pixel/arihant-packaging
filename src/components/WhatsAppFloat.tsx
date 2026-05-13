'use client';

import { useEffect, useState } from 'react';
import { whatsappLink, SITE } from '@/lib/site';
import { MessageCircle } from 'lucide-react';
import { events } from '@/lib/analytics';

export default function WhatsAppFloat() {
  const [pageHint, setPageHint] = useState('');

  useEffect(() => {
    const title = document.title.split('|')[0].trim() || 'your website';
    setPageHint(`Hi Arihant Packaging, I am inquiring about: ${title}. Please share your best price.`);
  }, []);

  return (
    <a
      href={whatsappLink(pageHint)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => events.whatsappClick('float_button')}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      aria-label={`Chat with ${SITE.name} on WhatsApp`}
    >
      <MessageCircle className="w-5 h-5 fill-white" strokeWidth={0} />
      <span className="hidden sm:inline text-sm font-semibold">Chat on WhatsApp</span>
    </a>
  );
}
