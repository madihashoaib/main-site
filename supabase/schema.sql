-- ============================================================
--  adorn N adobe — database schema
--  Paste this whole file into: Supabase → SQL Editor → New query → Run
-- ============================================================

-- Orders table
create table if not exists public.orders (
  id             text primary key,               -- e.g. ANA-20260707-4821
  user_id        uuid references auth.users(id), -- null for guest checkout
  customer       jsonb not null,                 -- name, phone, address, etc.
  items          jsonb not null,                 -- line items snapshot
  subtotal       numeric not null,
  shipping       numeric not null,
  total          numeric not null,
  payment_method text   not null,
  status         text   not null default 'pending',
  created_at     timestamptz not null default now()
);

-- Turn on Row Level Security
alter table public.orders enable row level security;

-- Anyone (including guests) may place an order
create policy "anyone can create an order"
  on public.orders for insert
  with check (true);

-- A logged-in customer can read only their own orders
create policy "users read their own orders"
  on public.orders for select
  using (auth.uid() = user_id);

-- Helpful index for the account page
create index if not exists orders_user_id_idx on public.orders (user_id);
