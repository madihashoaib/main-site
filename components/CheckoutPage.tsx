"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import JewelIcon from "./JewelIcon";
import { useCart, formatRs } from "./CartContext";
import { useAuth } from "./AuthContext";
import {
  FREE_SHIPPING_OVER,
  SHIPPING_FEE,
  saveLastOrder,
  saveOrderToDb,
  makeOrderId
} from "./orderData";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes: string;
};

const emptyForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  notes: ""
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, subtotalLabel, count, hydrated, clear } = useCart();
  const { user } = useAuth();

  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [placing, setPlacing] = useState(false);

  const shipping = subtotal >= FREE_SHIPPING_OVER || subtotal === 0 ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  // Prefill name/email for logged-in shoppers.
  useEffect(() => {
    if (!user) return;
    setForm((f) => ({
      ...f,
      email: f.email || user.email || "",
      fullName: f.fullName || (user.user_metadata?.full_name as string) || ""
    }));
  }, [user]);

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your name";
    if (!form.email.trim()) next.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.phone.trim()) next.phone = "Please enter your phone number";
    else if (form.phone.replace(/\D/g, "").length < 10) next.phone = "Enter a valid phone number";
    if (!form.address.trim()) next.address = "Please enter your address";
    if (!form.city.trim()) next.city = "Please enter your city";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const placeOrder = async () => {
    if (items.length === 0) return;
    if (!validate()) {
      // scroll to first error
      const first = document.querySelector("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setPlacing(true);
    const order = {
      id: makeOrderId(),
      items,
      subtotal,
      shipping,
      total,
      customer: {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        address: form.address.trim(),
        city: form.city.trim(),
        postalCode: form.postalCode.trim(),
        notes: form.notes.trim()
      },
      paymentMethod: "Cash on Delivery",
      createdAt: new Date().toISOString()
    };
    // Always keep a local copy for the confirmation page…
    saveLastOrder(order);
    // …and send it to the database (reaches seller + saves to account history).
    // If the DB call fails, the order still completes locally.
    try {
      await saveOrderToDb(order, user?.id ?? null);
    } catch {
      /* network/DB issue — local order already saved */
    }
    clear();
    router.push("/order-confirmed");
  };

  // Empty bag state
  if (hydrated && items.length === 0) {
    return (
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto text-center">
        <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(28px,4vw,42px)] mb-6">
          Your bag is empty
        </h1>
        <p className="text-gray-500 mb-8">Add a piece you love, then come back to check out.</p>
        <Link
          href="/shop"
          className="inline-block text-sm tracking-wider uppercase border border-navy-deep text-navy-deep px-8 py-4 rounded-sm hover:bg-navy-deep hover:text-white transition"
        >
          Browse the collection
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      <nav className="text-xs text-gray-400 tracking-wide mb-8">
        <Link href="/" className="hover:text-navy-deep transition">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-navy-deep transition">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-deep">Checkout</span>
      </nav>

      <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(28px,4vw,44px)] mb-10">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
        {/* Left — form */}
        <div>
          {/* Contact & shipping */}
          <section className="mb-10">
            <h2 className="text-xs uppercase tracking-widest text-gold mb-5">
              Shipping details
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" value={form.fullName} onChange={set("fullName")} error={errors.fullName} />
              <Field label="Phone" value={form.phone} onChange={set("phone")} error={errors.phone} placeholder="03xx xxxxxxx" />
              <div className="sm:col-span-2">
                <Field label="Email" type="email" value={form.email} onChange={set("email")} error={errors.email} />
              </div>
              <div className="sm:col-span-2">
                <Field label="Address" value={form.address} onChange={set("address")} error={errors.address} placeholder="House #, street, area" />
              </div>
              <Field label="City" value={form.city} onChange={set("city")} error={errors.city} />
              <Field label="Postal code (optional)" value={form.postalCode} onChange={set("postalCode")} />
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Order notes (optional)
                </label>
                <textarea
                  value={form.notes}
                  onChange={set("notes")}
                  rows={3}
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm outline-none focus:border-navy-deep bg-white resize-none"
                  placeholder="Any delivery instructions?"
                />
              </div>
            </div>
          </section>

          {/* Payment method */}
          <section>
            <h2 className="text-xs uppercase tracking-widest text-gold mb-5">
              Payment method
            </h2>

            <label className="flex items-start gap-3 border border-navy-deep rounded-sm px-5 py-4 mb-3 cursor-pointer bg-navy-deep/5">
              <input type="radio" name="pay" defaultChecked className="mt-1 accent-navy-deep" />
              <span>
                <span className="block text-sm font-medium text-navy-deep">Cash on Delivery</span>
                <span className="block text-xs text-gray-500 mt-1">
                  Pay in cash when your order arrives at your doorstep.
                </span>
              </span>
            </label>

            <label className="flex items-start gap-3 border border-gray-200 rounded-sm px-5 py-4 cursor-not-allowed opacity-60">
              <input type="radio" name="pay" disabled className="mt-1" />
              <span>
                <span className="block text-sm font-medium text-navy-deep">
                  Card / Online payment
                  <span className="ml-2 text-[10px] uppercase tracking-wider text-gold">Coming soon</span>
                </span>
                <span className="block text-xs text-gray-500 mt-1">
                  Secure card &amp; wallet payments will be enabled shortly.
                </span>
              </span>
            </label>
          </section>
        </div>

        {/* Right — order summary */}
        <aside className="lg:sticky lg:top-28 border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="font-serif italic text-xl text-navy-deep mb-5">
            Your order <span className="text-gold not-italic text-sm">({count})</span>
          </h2>

          <div className="divide-y divide-gray-100 mb-5 max-h-[280px] overflow-y-auto">
            {items.map(({ product, qty }) => (
              <div key={product.id} className="flex items-center gap-3 py-3">
                <div className="relative w-14 h-14 shrink-0 rounded-md bg-gradient-to-br from-ivory-soft to-[#e7e0cf] flex items-center justify-center">
                  <JewelIcon shape={product.shape} size={36} />
                  <span className="absolute -top-2 -right-2 bg-navy-deep text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {qty}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-sm text-navy-deep truncate">{product.name}</div>
                  <div className="text-[11px] text-gray-400">{product.category}</div>
                </div>
                <div className="text-sm text-navy-deep">
                  {formatRs(product.priceValue * qty)}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm border-t border-gray-200 pt-4">
            <Row label="Subtotal" value={subtotalLabel} />
            <Row label="Shipping" value={shipping === 0 ? "Free" : formatRs(shipping)} />
            <div className="flex items-center justify-between pt-3 mt-1 border-t border-gray-200">
              <span className="uppercase tracking-wider text-navy-deep text-sm">Total</span>
              <span className="text-xl font-medium text-navy-deep">{formatRs(total)}</span>
            </div>
          </div>

          <button
            onClick={placeOrder}
            disabled={placing}
            className="w-full mt-6 bg-navy-deep text-white text-sm tracking-wider uppercase px-8 py-4 rounded-sm hover:bg-navy-mid transition disabled:opacity-60"
          >
            {placing ? "Placing order…" : "Place order"}
          </button>
          <p className="text-[11px] text-gray-400 text-center mt-3">
            By placing your order you agree to our terms &amp; privacy policy.
          </p>
        </aside>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div data-error={error ? "true" : "false"}>
      <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded-sm px-4 py-3 text-sm outline-none bg-white transition ${
          error ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-navy-deep"
        }`}
      />
      {error && <p className="text-[11px] text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-gray-600">
      <span>{label}</span>
      <span className="text-navy-deep">{value}</span>
    </div>
  );
}
