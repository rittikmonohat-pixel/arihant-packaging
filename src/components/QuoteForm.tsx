'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Schema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  phone: z.string().min(7, 'A valid phone is required'),
  email: z.string().email('A valid email is required').optional().or(z.literal('')),
  city: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().optional(),
  context: z.string().optional(),
  hp: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof Schema>;

export default function QuoteForm({
  context = 'general inquiry',
  compact = false,
  title = 'Request a Quote',
  subtitle = 'Our team will get back to you with a competitive price.',
}: {
  context?: string;
  compact?: boolean;
  title?: string;
  subtitle?: string;
}) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errMessage, setErrMessage] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: { context },
  });

  async function onSubmit(values: FormValues) {
    setStatus('submitting');
    setErrMessage('');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Could not send. Please WhatsApp us instead.');
      }
      setStatus('success');
      reset();
    } catch (e) {
      setErrMessage(e instanceof Error ? e.message : 'Something went wrong');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="card p-6 text-center">
        <CheckCircle2 className="w-10 h-10 text-success mx-auto mb-2" />
        <h3 className="text-lg font-semibold text-ink-900">Thanks — we got your inquiry.</h3>
        <p className="mt-1 text-sm text-ink-500">Our team will be in touch shortly.</p>
        <button onClick={() => setStatus('idle')} className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700">
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-5 sm:p-6">
      <div className="mb-5">
        <h3 className="heading-sm text-brand-700">{title}</h3>
        <p className="text-sm text-ink-500 mt-1">{subtitle}</p>
      </div>

      <input type="text" tabIndex={-1} autoComplete="off" {...register('hp')} className="hidden" aria-hidden="true" />
      <input type="hidden" {...register('context')} />

      <div className={compact ? 'space-y-3' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        <div>
          <label className="label" htmlFor="qf-name">Name *</label>
          <input id="qf-name" {...register('name')} className="input-field" autoComplete="name" placeholder="Your name" />
          {errors.name && <p className="text-xs text-accent-600 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="label" htmlFor="qf-company">Company</label>
          <input id="qf-company" {...register('company')} className="input-field" autoComplete="organization" placeholder="Company / brand" />
        </div>
        <div>
          <label className="label" htmlFor="qf-phone">Phone / WhatsApp *</label>
          <input id="qf-phone" {...register('phone')} className="input-field" type="tel" autoComplete="tel" placeholder="+91 XXXXX XXXXX" />
          {errors.phone && <p className="text-xs text-accent-600 mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="label" htmlFor="qf-email">Email</label>
          <input id="qf-email" {...register('email')} className="input-field" type="email" autoComplete="email" placeholder="you@company.com" />
          {errors.email && <p className="text-xs text-accent-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="label" htmlFor="qf-city">City / State</label>
          <input id="qf-city" {...register('city')} className="input-field" autoComplete="address-level2" placeholder="Kolkata, WB" />
        </div>
        <div>
          <label className="label" htmlFor="qf-qty">Estimated Quantity</label>
          <input id="qf-qty" {...register('quantity')} className="input-field" placeholder="e.g. 500 kg" />
        </div>
      </div>

      <div className="mt-4">
        <label className="label" htmlFor="qf-msg">Message</label>
        <textarea id="qf-msg" {...register('message')} className="input-field min-h-[88px]" placeholder="Pouch size, material, finish, application?" />
      </div>

      <p className="text-xs text-ink-400 mt-3">Your details are used only to respond to this inquiry.</p>

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full mt-5 text-base">
        {status === 'submitting' ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : 'Send Inquiry'}
      </button>

      {status === 'error' && (
        <div className="mt-3 flex items-start gap-2 text-sm text-accent-700 bg-accent-50 border border-accent-100 rounded-lg p-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{errMessage}</span>
        </div>
      )}
    </form>
  );
}
