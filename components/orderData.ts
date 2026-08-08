import type { CartItem } from "./CartContext";
import { supabase } from "@/lib/supabaseClient";

export const FREE_SHIPPING_OVER = 3000;
export const SHIPPING_FEE = 200;

export type CustomerInfo = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes: string;
};

export const ORDER_STATUSES = ["pending", "processing", "shipped", "delivered", "cancelled"] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

export type Order = {
  id: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customer: CustomerInfo;
  paymentMethod: string;
  createdAt: string;
  status?: OrderStatus;
};

const LAST_ORDER_KEY = "ana-last-order";

/** Human-friendly order id, e.g. ANA-20260707-4821 */
export function makeOrderId(): string {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(
    d.getDate()
  ).padStart(2, "0")}`;
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `ANA-${ymd}-${rand}`;
}

export function saveLastOrder(order: Order) {
  try {
    window.localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order));
  } catch {
    /* ignore */
  }
}

export function getLastOrder(): Order | null {
  try {
    const raw = window.localStorage.getItem(LAST_ORDER_KEY);
    return raw ? (JSON.parse(raw) as Order) : null;
  } catch {
    return null;
  }
}

/**
 * Save the order to Supabase so it reaches the seller and (if logged in)
 * appears in the customer's order history. Returns an error string or null.
 * Guest orders are allowed (userId null).
 */
export async function saveOrderToDb(order: Order, userId: string | null): Promise<string | null> {
  if (!supabase) return null; // not configured yet — localStorage already has it
  const { error } = await supabase.from("orders").insert({
    id: order.id,
    user_id: userId,
    customer: order.customer,
    items: order.items,
    subtotal: order.subtotal,
    shipping: order.shipping,
    total: order.total,
    payment_method: order.paymentMethod,
    status: "pending",
    created_at: order.createdAt
  });
  return error?.message ?? null;
}

/** Fetch a logged-in customer's past orders, newest first. */
export async function fetchUserOrders(userId: string): Promise<Order[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  if (error || !data) return [];
  return data.map((row) => ({
    id: row.id,
    items: row.items,
    subtotal: Number(row.subtotal),
    shipping: Number(row.shipping),
    total: Number(row.total),
    customer: row.customer,
    paymentMethod: row.payment_method,
    createdAt: row.created_at,
    status: (row.status as OrderStatus) ?? "pending"
  }));
}

/** True if the currently logged-in user is allowed into /admin. */
export async function checkIsAdmin(userId: string): Promise<boolean> {
  if (!supabase) return false;
  const { data, error } = await supabase
    .from("admins")
    .select("user_id")
    .eq("user_id", userId)
    .maybeSingle();
  if (error || !data) return false;
  return true;
}

/** Admin-only: fetch every order in the shop, newest first. */
export async function fetchAllOrders(): Promise<Order[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });
  if (error || !data) return [];
  return data.map((row) => ({
    id: row.id,
    items: row.items,
    subtotal: Number(row.subtotal),
    shipping: Number(row.shipping),
    total: Number(row.total),
    customer: row.customer,
    paymentMethod: row.payment_method,
    createdAt: row.created_at,
    status: (row.status as OrderStatus) ?? "pending"
  }));
}

/** Admin-only: change an order's status. Returns an error string or null. */
export async function updateOrderStatus(
  orderId: string,
  status: OrderStatus
): Promise<string | null> {
  if (!supabase) return "Not configured.";
  const { error } = await supabase.from("orders").update({ status }).eq("id", orderId);
  return error?.message ?? null;
}
