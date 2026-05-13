import { NextResponse } from 'next/server';
import { z } from 'zod';

const Schema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  phone: z.string().min(7),
  email: z.string().email().optional().or(z.literal('')),
  city: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().optional(),
  context: z.string().optional(),
  hp: z.string().max(0).optional(),
});

const TO_EMAIL = process.env.INQUIRY_TO_EMAIL || 'arihantpackagingsalesenquiry@gmail.com';

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = Schema.parse(json);

    // Honeypot — silently succeed for bots
    if (data.hp) return NextResponse.json({ ok: true });

    // Try Web3Forms first (no domain verification needed, delivers to any inbox)
    const w3fKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (w3fKey) {
      const message = `Page: ${data.context || '—'}
Name: ${data.name}
Company: ${data.company || ''}
Phone: ${data.phone}
Email: ${data.email || ''}
City: ${data.city || ''}
Quantity: ${data.quantity || ''}

Message:
${data.message || ''}`;

      const r = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: w3fKey,
          subject: `Website Inquiry — ${data.name} (${data.company || data.phone})`,
          from_name: 'Arihant Packaging Website',
          email: data.email || 'no-reply@arihantpackagingindia.com',
          replyto: data.email || '',
          message,
          to: TO_EMAIL,
        }),
      });
      if (!r.ok) {
        const t = await r.text();
        console.error('web3forms error', r.status, t);
        // fall through to Resend / log
      } else {
        return NextResponse.json({ ok: true, via: 'web3forms' });
      }
    }

    // Fallback to Resend if configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const from = process.env.INQUIRY_FROM_EMAIL || 'Arihant Packaging <onboarding@resend.dev>';
      const html = `
        <h2>New website inquiry</h2>
        <p><strong>Page:</strong> ${escapeHtml(data.context || '—')}</p>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(data.name)}</td></tr>
          <tr><td><strong>Company</strong></td><td>${escapeHtml(data.company || '')}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(data.phone)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(data.email || '')}</td></tr>
          <tr><td><strong>City</strong></td><td>${escapeHtml(data.city || '')}</td></tr>
          <tr><td><strong>Quantity</strong></td><td>${escapeHtml(data.quantity || '')}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(data.message || '').replace(/\n/g, '<br>')}</td></tr>
        </table>
        <p style="font-size:12px;color:#777">Sent from arihantpackagingindia.com</p>
      `;
      const { Resend } = await import('resend');
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from,
        to: [TO_EMAIL],
        replyTo: data.email || undefined,
        subject: `Inquiry — ${data.name} (${data.company || data.phone})`,
        html,
      });
      return NextResponse.json({ ok: true, via: 'resend' });
    }

    // No backend configured — log and accept silently so users get the success state
    console.warn('No email backend configured (set WEB3FORMS_ACCESS_KEY or RESEND_API_KEY)');
    console.log('Quote inquiry (logged only):', data);
    return NextResponse.json({ ok: true, via: 'log' });
  } catch (e) {
    console.error('quote error', e);
    return NextResponse.json({ error: 'Could not send' }, { status: 400 });
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c]!));
}
