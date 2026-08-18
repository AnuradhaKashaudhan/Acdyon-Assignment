# EarningsHub Waitlist & Email Capture Setup Guide

This guide walks you through setting up **Supabase** database storage and **Resend** transactional email dispatch for EarningsHub.

---

## 1. Supabase Setup (Database)

1. Sign up / Log in to [Supabase](https://supabase.com/).
2. Create a new project named **EarningsHub**.
3. Go to **SQL Editor** in the Supabase Dashboard and run the following script:

```sql
-- Create waitlist table
create table public.waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamp with time zone default now(),
  source text default 'landing_page'
);

-- Enable Row Level Security (RLS)
alter table public.waitlist enable row level security;

-- Policy to allow anonymous/authenticated users to insert emails
create policy "Allow inserts for waitlist"
  on public.waitlist
  for insert
  with check (true);
```

4. Go to **Project Settings -> API** and copy:
   - **Project URL** -> `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** -> `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret** -> `SUPABASE_SERVICE_ROLE_KEY`

---

## 2. Resend Setup (Transactional Emails)

1. Sign up / Log in to [Resend](https://resend.com/).
2. Go to **API Keys** -> Click **Create API Key**.
3. Copy your API key (starts with `re_`).
4. Set `RESEND_API_KEY` in your `.env.local`.

---

## 3. Environment Variables Configuration

Copy `.env.local.example` to `.env.local` in your root folder:

```bash
cp .env.local.example .env.local
```

Paste your actual credentials into `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xyz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
RESEND_API_KEY=re_123456789_xyz
```

---

## 4. Local Testing

1. Run `npm run dev`.
2. Scroll to the CTA section on the home page.
3. Enter an email address and click **Get Early Access**.
4. Check your Supabase Table Editor (`waitlist` table) and your inbox/Resend Dashboard!
