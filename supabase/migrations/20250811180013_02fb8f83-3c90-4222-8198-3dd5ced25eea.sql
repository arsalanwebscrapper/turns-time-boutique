-- Enable UUID generation
create extension if not exists "pgcrypto";

-- Products table
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  price numeric(10,2) not null check (price >= 0),
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- RLS
alter table public.products enable row level security;

-- Recreate policies idempotently
drop policy if exists "Anyone can view products" on public.products;
drop policy if exists "Only admin can insert products" on public.products;
drop policy if exists "Only admin can update products" on public.products;
drop policy if exists "Only admin can delete products" on public.products;

create policy "Anyone can view products"
  on public.products for select
  using (true);

create policy "Only admin can insert products"
  on public.products for insert
  with check ((auth.jwt() ->> 'email') = 'admin@premiumc.com');

create policy "Only admin can update products"
  on public.products for update
  using ((auth.jwt() ->> 'email') = 'admin@premiumc.com')
  with check ((auth.jwt() ->> 'email') = 'admin@premiumc.com');

create policy "Only admin can delete products"
  on public.products for delete
  using ((auth.jwt() ->> 'email') = 'admin@premiumc.com');

-- Timestamp trigger
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists update_products_updated_at on public.products;
create trigger update_products_updated_at
before update on public.products
for each row execute function public.update_updated_at_column();

-- Seed initial products
insert into public.products (name, slug, description, price, image_url)
values
  ('Midnight Pulse','midnight-pulse','A sleek chronograph with midnight blue dial and luminous markers.', 275, ''),
  ('Solstice Infinity','solstice-infinity','Elegant timepiece blending classic lines with modern precision.', 375, ''),
  ('Aurora Chrono','aurora-chrono','Premium chronograph engineered for performance and style.', 2000, '')
on conflict (slug) do nothing;

-- Storage bucket for product images
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

-- Storage policies (recreate idempotently)
drop policy if exists "Public can view product images" on storage.objects;
drop policy if exists "Only admin can upload product images" on storage.objects;
drop policy if exists "Only admin can update product images" on storage.objects;
drop policy if exists "Only admin can delete product images" on storage.objects;

create policy "Public can view product images"
  on storage.objects for select
  using (bucket_id = 'product-images');

create policy "Only admin can upload product images"
  on storage.objects for insert
  with check (bucket_id = 'product-images' and (auth.jwt() ->> 'email') = 'admin@premiumc.com');

create policy "Only admin can update product images"
  on storage.objects for update
  using (bucket_id = 'product-images' and (auth.jwt() ->> 'email') = 'admin@premiumc.com')
  with check (bucket_id = 'product-images' and (auth.jwt() ->> 'email') = 'admin@premiumc.com');

create policy "Only admin can delete product images"
  on storage.objects for delete
  using (bucket_id = 'product-images' and (auth.jwt() ->> 'email') = 'admin@premiumc.com');