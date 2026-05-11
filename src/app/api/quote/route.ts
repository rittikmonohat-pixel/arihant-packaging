import { NextResponse } from 'next/server';
import { Resend } from 'resend';
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

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = Schema.parse(json);

    // Honeypot — silently succeed for bots
    if (data.hp) return NextResponse.json({ ok: true });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.INQUIRY_TO_EMAIL || 'info@arihantpackagingindia.com';
    const from = process.env.INQUIRY_FROM_EMAIL || 'quotes@arihantpackagingindia.com';

    // If Resend isn't configured, log and still return ok so users get success in dev/preview.
    if (!apiKey) {
      console.warn('RESEND_API_KEY not set — quote saved to logs only');
      console.log('Quote inquiry:', data);
      return NextResponse.json({ ok: true, note: 'logged' });
    }

    const resend = new Resend(apiKey);

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

    await resend.emails.send({
      from: `Arihant Packaging Website <${from}>`,
      to: [to],
      replyTo: data.email || undefined,
      subject: `Inquiry — ${data.name} (${data.company || data.phone})`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('quote error', e);
    return NextResponse.json({ error: 'Could not send' }, { status: 400 });
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c]!));
}
