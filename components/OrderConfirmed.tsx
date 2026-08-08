"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import JewelIcon from "./JewelIcon";
import { formatRs } from "./CartContext";
import { getLastOrder, type Order } from "./orderData";

export default function OrderConfirmed() {
  const [order, setOrder] = useState<Order | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setOrder(getLastOrder());
    setReady(true);
  }, []);

  if (ready && !order) {
    return (
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto text-center">
        <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(28px,4vw,42px)] mb-6">
          No order found
        </h1>
        <p className="text-gray-500 mb-8">Looks like there&apos;s nothing to show here yet.</p>
        <Link
          href="/shop"
          className="inline-block text-sm tracking-wider uppercase border border-navy-deep text-navy-deep px-8 py-4 rounded-sm hover:bg-navy-deep hover:text-white transition"
        >
          Start shopping
        </Link>
      </main>
    );
  }

  if (!order) {
    return <main className="pt-40 pb-24 text-center text-gray-400">Loading…</main>;
  }

  const c = order.customer;

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
      {/* Success header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/15 mb-6">
          <span className="text-gold text-4xl">✓</span>
        </div>
        <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(28px,4.5vw,44px)] mb-3">
          Thank you, {c.fullName.split(" ")[0]}!
        </h1>
        <p className="text-gray-500">
          Your order is confirmed. We&apos;ll call you shortly to arrange delivery.
        </p>
        <div className="inline-block mt-5 text-sm tracking-wider uppercase text-navy-deep bg-ivory-soft border border-gray-200 rounded-full px-5 py-2">
          Order #{order.id}
        </div>
      </div>

      {/* Items */}
      <div className="border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-xs uppercase tracking-widest text-gold mb-4">Order summary</h2>
        <div className="divide-y divide-gray-100">
          {order.items.map(({ product, qty }) => (
            <div key={product.id} className="flex items-center gap-3 py-3">
              <div className="w-14 h-14 shrink-0 rounded-md bg-gradient-to-br from-ivory-soft to-[#e7e0cf] flex items-center justify-center">
                <JewelIcon shape={product.shape} size={36} />
              </div>
              <div className="flex-1">
                <div className="font-serif text-sm text-navy-deep">{product.name}</div>
                <div className="text-[11px] text-gray-400">Qty {qty}</div>
              </div>
              <div className="text-sm text-navy-deep">{formatRs(product.priceValue * qty)}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-sm border-t border-gray-200 mt-4 pt-4">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span><span className="text-navy-deep">{formatRs(order.subtotal)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span className="text-navy-deep">{order.shipping === 0 ? "Free" : formatRs(order.shipping)}</span>
          </div>
          <div className="flex justify-between pt-2 mt-1 border-t border-gray-200">
            <span className="uppercase tracking-wider text-navy-deep">Total</span>
            <span className="text-lg font-medium text-navy-deep">{formatRs(order.total)}</span>
          </div>
        </div>
      </div>

      {/* Delivery + payment */}
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xs uppercase tracking-widest text-gold mb-3">Delivering to</h3>
          <p className="text-sm text-navy-deep leading-6">
            {c.fullName}<br />
            {c.address}<br />
            {c.city}{c.postalCode ? `, ${c.postalCode}` : ""}<br />
            {c.phone}
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xs uppercase tracking-widest text-gold mb-3">Payment</h3>
          <p className="text-sm text-navy-deep">{order.paymentMethod}</p>
          <p className="text-xs text-gray-400 mt-2">
            Please keep {formatRs(order.total)} ready at delivery.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/shop"
          className="inline-block text-sm tracking-wider uppercase bg-navy-deep text-white px-9 py-4 rounded-sm hover:bg-navy-mid transition"
        >
          Continue shopping
        </Link>
      </div>
    </main>
  );
}
