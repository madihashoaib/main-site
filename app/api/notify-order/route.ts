import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Customer ka likha hua text email ke HTML ko kharab na kare
function esc(v: unknown): string {
  return String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: Request) {
  // 1. Secret check
  if (req.headers.get('x-webhook-secret') !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  // 2. Supabase ka bheja hua order nikalo
  const body = await req.json();
  const order = body.record;
  if (!order) {
    return NextResponse.json({ error: 'no record' }, { status: 400 });
  }

  // 3. Order ki har cheez ki ek table row banao
  const rows = Object.entries(order)
    .filter(([, v]) => v !== null && v !== '')
    .map(([k, v]) => {
      const val = typeof v === 'object' ? JSON.stringify(v) : String(v);
      return `<tr>
        <td style="padding:6px 12px;border:1px solid #ddd"><b>${esc(k)}</b></td>
        <td style="padding:6px 12px;border:1px solid #ddd">${esc(val)}</td>
      </tr>`;
    })
    .join('');

  // 4. Kis kis ko bhejna hai
  const to = [process.env.ADMIN_EMAIL_1, process.env.ADMIN_EMAIL_2].filter(
    (e): e is string => !!e
  );

  // 5. Email bhejo
  const { error } = await resend.emails.send({
    from: 'Adorn N Adobe <orders@adornnadobe.pk>',
    to,
    subject: `🛍️ Naya Order aya hai${order.id ? ' #' + order.id : ''}`,
    html: `
      <h2>Naya order aya hai!</h2>
      <table style="border-collapse:collapse">${rows}</table>
      <p><a href="https://adornnadobe.pk/admin">Admin panel kholo</a></p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'email failed' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}