import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const order = await req.json();

    const itemsHtml = order.items
      .map(
        (i: any) => `
        <tr>
          <td style="padding:8px;border-bottom:1px solid #eee;">${i.product.name}</td>
          <td style="padding:8px;border-bottom:1px solid #eee;text-align:center;">${i.qty}</td>
          <td style="padding:8px;border-bottom:1px solid #eee;text-align:right;">Rs. ${i.product.priceValue * i.qty}</td>
        </tr>`
      )
      .join("");

    const html = `
      <div style="font-family: sans-serif; max-width:600px; margin:auto;">
        <h2 style="color:#1a2b4c;">Adorn & Adobe</h2>
        <p>Hi ${order.customer.fullName},</p>
        <p>Thank you for your order! Here are the details:</p>
        <p><strong>Order ID:</strong> ${order.id}</p>
        <table style="width:100%; border-collapse:collapse; margin:16px 0;">
          <thead>
            <tr>
              <th style="text-align:left;padding:8px;border-bottom:2px solid #333;">Item</th>
              <th style="padding:8px;border-bottom:2px solid #333;">Qty</th>
              <th style="text-align:right;padding:8px;border-bottom:2px solid #333;">Price</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
        </table>
        <p>Subtotal: Rs. ${order.subtotal}</p>
        <p>Shipping: ${order.shipping === 0 ? "Free" : "Rs. " + order.shipping}</p>
        <p style="font-size:18px;"><strong>Total: Rs. ${order.total}</strong></p>
        <p><strong>Delivery Address:</strong><br/>${order.customer.address}, ${order.customer.city}</p>
        <p>Payment Method: ${order.paymentMethod}</p>
        <p>We'll notify you once your order ships. Thank you for shopping with us!</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Adorn & Adobe <onboarding@resend.dev>",
      to: order.customer.email,
      subject: `Order Confirmed - #${order.id}`,
      html,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
