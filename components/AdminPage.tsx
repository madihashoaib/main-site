"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useAuth } from "./AuthContext";
import { formatRs } from "./CartContext";
import {
  ORDER_STATUSES,
  checkIsAdmin,
  fetchAllOrders,
  updateOrderStatus,
  type Order,
  type OrderStatus
} from "./orderData";

const STATUS_STYLES: Record<OrderStatus, string> = {
  pending: "bg-amber-100 text-amber-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700"
};

export default function AdminPage() {
  const { user, loading, configured, signIn, signOut } = useAuth();
  const [adminChecked, setAdminChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!user) {
      setAdminChecked(false);
      setIsAdmin(false);
      return;
    }
    let cancelled = false;
    checkIsAdmin(user.id).then((ok) => {
      if (!cancelled) {
        setIsAdmin(ok);
        setAdminChecked(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [user]);

  if (!configured) {
    return (
      <Shell>
        <div className="max-w-md mx-auto text-center border border-dashed border-gold/60 bg-gold/5 rounded-lg px-6 py-10">
          <h1 className="font-serif italic text-2xl text-navy-deep mb-3">Almost there</h1>
          <p className="text-sm text-gray-500">
            The admin panel turns on once the Supabase keys are added to{" "}
            <code className="text-navy-deep">.env.local</code>.
          </p>
        </div>
      </Shell>
    );
  }

  if (loading) {
    return (
      <Shell>
        <p className="text-center text-gray-400 py-20">Loading…</p>
      </Shell>
    );
  }

  if (!user) {
    return (
      <Shell>
        <LoginForm signIn={signIn} />
      </Shell>
    );
  }

  if (!adminChecked) {
    return (
      <Shell>
        <p className="text-center text-gray-400 py-20">Checking access…</p>
      </Shell>
    );
  }

  if (!isAdmin) {
    return (
      <Shell>
        <div className="max-w-md mx-auto text-center border border-gray-200 rounded-lg px-6 py-10">
          <h1 className="font-serif italic text-2xl text-navy-deep mb-3">Not authorized</h1>
          <p className="text-sm text-gray-500 mb-6">
            {user.email} doesn&apos;t have admin access on this account.
          </p>
          <button
            onClick={signOut}
            className="text-xs uppercase tracking-wider border border-navy-deep text-navy-deep px-5 py-3 rounded-sm hover:bg-navy-deep hover:text-white transition"
          >
            Sign out
          </button>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <Dashboard onSignOut={signOut} email={user.email || ""} />
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        <Link href="/" className="font-serif italic text-xl text-navy-deep tracking-wide">
          adorn <span className="text-gold">N</span> adobe
          <span className="ml-2 text-xs uppercase tracking-widest text-gray-400 font-sans not-italic align-middle">
            Admin
          </span>
        </Link>
        <div className="mt-8">{children}</div>
      </div>
    </main>
  );
}

// ---------- Login ----------
function LoginForm({
  signIn
}: {
  signIn: (e: string, p: string) => Promise<{ error: string | null }>;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const res = await signIn(email, password);
    setBusy(false);
    if (res.error) setError(res.error);
  };

  return (
    <div className="max-w-sm mx-auto pt-10">
      <h1 className="font-serif italic font-medium text-navy-deep text-3xl text-center mb-2">
        Admin sign in
      </h1>
      <p className="text-center text-sm text-gray-500 mb-8">
        Use the account you set up as an admin in Supabase.
      </p>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm outline-none focus:border-navy-deep bg-white transition"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm outline-none focus:border-navy-deep bg-white transition"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="w-full bg-navy-deep text-white text-sm tracking-wider uppercase px-8 py-4 rounded-sm hover:bg-navy-mid transition disabled:opacity-60"
        >
          {busy ? "Please wait…" : "Sign in"}
        </button>
      </form>
      <p className="text-center text-xs text-gray-400 mt-6">
        Don&apos;t have an account yet? Sign up normally at{" "}
        <Link href="/account" className="underline underline-offset-4">
          /account
        </Link>
        , then add yourself as an admin in Supabase (see supabase/schema.sql).
      </p>
    </div>
  );
}

// ---------- Dashboard ----------
function Dashboard({ email, onSignOut }: { email: string; onSignOut: () => Promise<void> }) {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [filter, setFilter] = useState<OrderStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);

  const load = () => {
    setOrders(null);
    fetchAllOrders().then(setOrders);
  };

  useEffect(load, []);

  const stats = useMemo(() => {
    const list = orders ?? [];
    const revenue = list
      .filter((o) => o.status !== "cancelled")
      .reduce((sum, o) => sum + o.total, 0);
    return {
      total: list.length,
      pending: list.filter((o) => o.status === "pending").length,
      inProgress: list.filter((o) => o.status === "processing" || o.status === "shipped").length,
      revenue
    };
  }, [orders]);

  const filtered = useMemo(() => {
    let list = orders ?? [];
    if (filter !== "all") list = list.filter((o) => o.status === filter);
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (o) =>
          o.id.toLowerCase().includes(q) ||
          o.customer.fullName.toLowerCase().includes(q) ||
          o.customer.phone.toLowerCase().includes(q)
      );
    }
    return list;
  }, [orders, filter, search]);

  const changeStatus = async (orderId: string, status: OrderStatus) => {
    setUpdating(orderId);
    const err = await updateOrderStatus(orderId, status);
    if (!err) {
      setOrders((prev) => prev?.map((o) => (o.id === orderId ? { ...o, status } : o)) ?? prev);
    }
    setUpdating(null);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-gray-200 pb-6">
        <div>
          <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(24px,3.5vw,32px)]">
            Orders
          </h1>
          <p className="text-sm text-gray-500 mt-1">{email}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={load}
            className="text-xs uppercase tracking-wider border border-gray-300 text-navy-deep px-5 py-3 rounded-sm hover:border-navy-deep transition"
          >
            Refresh
          </button>
          <button
            onClick={onSignOut}
            className="text-xs uppercase tracking-wider border border-navy-deep text-navy-deep px-5 py-3 rounded-sm hover:bg-navy-deep hover:text-white transition"
          >
            Sign out
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total orders" value={stats.total} />
        <StatCard label="Pending" value={stats.pending} />
        <StatCard label="In progress" value={stats.inProgress} />
        <StatCard label="Revenue" value={formatRs(stats.revenue)} />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </FilterPill>
        {ORDER_STATUSES.map((s) => (
          <FilterPill key={s} active={filter === s} onClick={() => setFilter(s)}>
            {s[0].toUpperCase() + s.slice(1)}
          </FilterPill>
        ))}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search order id, name, phone…"
          className="ml-auto border border-gray-300 rounded-sm px-4 py-2 text-sm outline-none focus:border-navy-deep bg-white transition w-full sm:w-64"
        />
      </div>

      {/* Orders */}
      {orders === null ? (
        <p className="text-gray-400 py-10">Loading orders…</p>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 border border-gray-200 rounded-lg">
          <p className="text-gray-500">No orders match here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((o) => {
            const isOpen = expanded === o.id;
            const status = o.status ?? "pending";
            return (
              <div key={o.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpanded(isOpen ? null : o.id)}
                  className="w-full flex flex-wrap items-center justify-between gap-3 p-5 text-left hover:bg-ivory-soft/60 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-navy-deep">#{o.id}</span>
                    <span
                      className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full font-semibold ${STATUS_STYLES[status]}`}
                    >
                      {status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{o.customer.fullName}</span>
                    <span className="hidden sm:inline">
                      {new Date(o.createdAt).toLocaleDateString()}
                    </span>
                    <span className="font-medium text-navy-deep">{formatRs(o.total)}</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-gray-200 p-5 bg-ivory-soft/30 grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-gold mb-3">Customer</h3>
                      <p className="text-sm text-navy-deep">{o.customer.fullName}</p>
                      <p className="text-sm text-gray-500">{o.customer.email}</p>
                      <p className="text-sm text-gray-500">{o.customer.phone}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        {o.customer.address}, {o.customer.city}
                        {o.customer.postalCode ? ` — ${o.customer.postalCode}` : ""}
                      </p>
                      {o.customer.notes && (
                        <p className="text-sm text-gray-400 mt-2 italic">Note: {o.customer.notes}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-3">
                        Payment: {o.paymentMethod} · Placed{" "}
                        {new Date(o.createdAt).toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-gold mb-3">Items</h3>
                      <div className="space-y-2 mb-4">
                        {o.items.map((it) => (
                          <div key={it.product.id} className="flex justify-between text-sm">
                            <span className="text-navy-deep">
                              {it.product.name} × {it.qty}
                            </span>
                            <span className="text-gray-500">
                              {formatRs(it.product.priceValue * it.qty)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 border-t border-gray-200 pt-2">
                        <span>Subtotal</span>
                        <span>{formatRs(o.subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Shipping</span>
                        <span>{o.shipping === 0 ? "Free" : formatRs(o.shipping)}</span>
                      </div>
                      <div className="flex justify-between font-medium text-navy-deep mt-1">
                        <span>Total</span>
                        <span>{formatRs(o.total)}</span>
                      </div>

                      <div className="mt-5">
                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                          Update status
                        </label>
                        <select
                          value={status}
                          disabled={updating === o.id}
                          onChange={(e) => changeStatus(o.id, e.target.value as OrderStatus)}
                          className="border border-gray-300 rounded-sm px-4 py-2 text-sm outline-none focus:border-navy-deep bg-white transition disabled:opacity-60"
                        >
                          {ORDER_STATUSES.map((s) => (
                            <option key={s} value={s}>
                              {s[0].toUpperCase() + s.slice(1)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">{label}</p>
      <p className="text-xl font-serif italic text-navy-deep">{value}</p>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition ${
        active
          ? "bg-navy-deep text-white border-navy-deep"
          : "border-gray-300 text-gray-500 hover:border-navy-deep hover:text-navy-deep"
      }`}
    >
      {children}
    </button>
  );
}
