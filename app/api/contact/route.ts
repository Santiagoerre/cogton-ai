import { NextResponse } from 'next/server';
import { CONTACT_EMAIL } from '@/lib/contact';

const text = (value: unknown, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data || typeof data !== 'object') {
    return NextResponse.json({ error: 'invalid' }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (text(data.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = text(data.name, 200);
  const email = text(data.email, 200);
  const company = text(data.company, 200);
  const message = text(data.message, 5000);
  const goals = Array.isArray(data.goals)
    ? data.goals.map((goal: unknown) => text(goal, 100)).filter(Boolean).slice(0, 10)
    : [];

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'invalid' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set');
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || 'Cogton AI <onboarding@resend.dev>',
      to: process.env.CONTACT_TO || CONTACT_EMAIL,
      reply_to: email,
      subject: `Solicitud de demo — ${company || name}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Empresa: ${company || '—'}`,
        `Quiere optimizar: ${goals.join(', ') || '—'}`,
        '',
        message
      ].join('\n')
    })
  });

  if (!response.ok) {
    console.error('Contact form: Resend error', response.status, await response.text());
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
