"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "./AuthContext";
import { formatRs } from "./CartContext";
import { fetchUserOrders, type Order } from "./orderData";

export default function AccountPage() {
  const { user, loading, configured, signIn, signUp, signOut } = useAuth();

  // ---- Not configured yet (keys not added) ----
  if (!configured) {
    return (
      <Shell>
        <div className="max-w-md mx-auto text-center border border-dashed border-gold/60 bg-gold/5 rounded-lg px-6 py-10">
          <h1 className="font-serif italic text-2xl text-navy-deep mb-3">Almost there</h1>
          <p className="text-sm text-gray-500">
            Accounts turn on once the Supabase keys are added to{" "}
            <code className="text-navy-deep">.env.local</code>. Follow the setup
            steps and this page will come alive.
          </p>
        </div>
      </Shell>
    );
  }

  if (loading) {
    return <Shell><p className="text-center text-gray-400 py-20">Loading…</p></Shell>;
  }

  return <Shell>{user ? <Dashboard onSignOut={signOut} name={(user.user_metadata?.full_name as string) || user.email || "there"} email={user.email || ""} userId={user.id} /> : <AuthForms signIn={signIn} signUp={signUp} />}</Shell>;
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <nav className="text-xs text-gray-400 tracking-wide mb-8">
        <Link href="/" className="hover:text-navy-deep transition">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-deep">Account</span>
      </nav>
      {children}
    </main>
  );
}

// ---------- Login / Signup ----------
function AuthForms({
  signIn,
  signUp
}: {
  signIn: (e: string, p: string) => Promise<{ error: string | null }>;
  signUp: (e: string, p: string, n: string) => Promise<{ error: string | null }>;
}) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setBusy(true);
    const res =
      mode === "login"
        ? await signIn(email, password)
        : await signUp(email, password, fullName);
    setBusy(false);
    if (res.error) {
      setError(res.error);
    } else if (mode === "signup") {
      setNotice("Account created! If asked, check your email to confirm, then log in.");
      setMode("login");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(28px,4vw,40px)] text-center mb-2">
        {mode === "login" ? "Welcome back" : "Create your account"}
      </h1>
      <p className="text-center text-sm text-gray-500 mb-8">
        {mode === "login" ? "Sign in to see your orders." : "Save your details and track every order."}
      </p>

      <form onSubmit={submit} className="space-y-4">
        {mode === "signup" && (
          <Input label="Full name" value={fullName} onChange={setFullName} required />
        )}
        <Input label="Email" type="email" value={email} onChange={setEmail} required />
        <Input label="Password" type="password" value={password} onChange={setPassword} required />

        {error && <p className="text-sm text-red-500">{error}</p>}
        {notice && <p className="text-sm text-green-600">{notice}</p>}

        <button
          type="submit"
          disabled={busy}
          className="w-full bg-navy-deep text-white text-sm tracking-wider uppercase px-8 py-4 rounded-sm hover:bg-navy-mid transition disabled:opacity-60"
        >
          {busy ? "Please wait…" : mode === "login" ? "Sign in" : "Create account"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        {mode === "login" ? "New here? " : "Already have an account? "}
        <button
          onClick={() => {
            setMode(mode === "login" ? "signup" : "login");
            setError(null);
            setNotice(null);
          }}
          className="text-navy-deep underline underline-offset-4 hover:text-gold transition"
        >
          {mode === "login" ? "Create an account" : "Sign in"}
        </button>
      </p>
    </div>
  );
}

// ---------- Logged-in dashboard ----------
function Dashboard({
  name,
  email,
  userId,
  onSignOut
}: {
  name: string;
  email: string;
  userId: string;
  onSignOut: () => Promise<void>;
}) {
  const [orders, setOrders] = useState<Order[] | null>(null);

  useEffect(() => {
    fetchUserOrders(userId).then(setOrders);
  }, [userId]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-gray-200 pb-6">
        <div>
          <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(26px,4vw,38px)]">
            Hello, {name.split(" ")[0]}
          </h1>
          <p className="text-sm text-gray-500 mt-1">{email}</p>
        </div>
        <button
          onClick={onSignOut}
          className="text-xs uppercase tracking-wider border border-navy-deep text-navy-deep px-5 py-3 rounded-sm hover:bg-navy-deep hover:text-white transition"
        >
          Sign out
        </button>
      </div>

      <h2 className="text-xs uppercase tracking-widest text-gold mb-5">Your orders</h2>

      {orders === null ? (
        <p className="text-gray-400 py-10">Loading your orders…</p>
      ) : orders.length === 0 ? (
        <div className="text-center py-16 border border-gray-200 rounded-lg">
          <p className="text-gray-500 mb-6">You haven&apos;t placed any orders yet.</p>
          <Link
            href="/shop"
            className="inline-block text-sm tracking-wider uppercase bg-navy-deep text-white px-8 py-4 rounded-sm hover:bg-navy-mid transition"
          >
            Start shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((o) => (
            <div key={o.id} className="border border-gray-200 rounded-lg p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="font-medium text-navy-deep">#{o.id}</span>
                <span className="text-xs text-gray-400">
                  {new Date(o.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="text-sm text-gray-500 mb-3">
                {o.items.reduce((n, i) => n + i.qty, 0)} item(s) ·{" "}
                {o.items.map((i) => i.product.name).join(", ")}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-gold">{o.paymentMethod}</span>
                <span className="font-medium text-navy-deep">{formatRs(o.total)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm outline-none focus:border-navy-deep bg-white transition"
      />
    </div>
  );
}
