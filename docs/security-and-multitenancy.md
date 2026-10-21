# BarberFlow: Security, Multi-Tenancy & Data Isolation Model

This document outlines the architectural security model, multi-tenancy design, and Supabase integration strategy for **BarberFlow**.

---

## 1. Multi-Tenant Architecture Overview

BarberFlow is designed as an international multi-tenant SaaS. Multiple independent barbershops (salons) share the same application instance and database schema, with absolute isolation of customer records, booking schedules, revenue figures, and team data.

### Core Tenancy Key: `salon_id`
Every tenant-scoped table in the relational model includes a mandatory foreign key:
```sql
salon_id uuid references public.salons(id) on delete cascade not null
```

Tables under tenant isolation:
- `barbers`
- `services`
- `appointments`
- `customers`
- `salon_settings`
- `audit_logs`

---

## 2. Security Invariants (Do Not Violate)

1. **Client Trust Prohibition**:
   The frontend UI must **never** be trusted to provide `salon_id` for authorization. A malicious client could alter form payloads or API query parameters to attempt data tampering.

2. **Session-Bound Tenant Resolution**:
   In production, `salon_id` is resolved strictly through:
   - Supabase Auth JWT claims: `auth.jwt() -> 'app_metadata' ->> 'salon_id'`, or
   - Server-side lookup against a verified membership table (`salon_members` where `user_id = auth.uid()`).

3. **Zero Secret Key Exposure**:
   - Only `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` may be referenced in browser components.
   - The Supabase `service_role` key must **never** be prefixed with `NEXT_PUBLIC_`, never included in client bundles, and only utilized within protected Server Actions or webhook receivers.

4. **No Permissive RLS Policies**:
   - `using (true)` or `with check (true)` policies are strictly prohibited.
   - Every table must have Row Level Security enabled (`alter table ... enable row level security;`).

---

## 3. Reference Row Level Security (RLS) Policies

When connecting the production Supabase database, execute the following strict policy structure:

```sql
-- Enable RLS on all tenant tables
ALTER TABLE public.salons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.barbers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Helper function to extract salon_id from verified JWT
CREATE OR REPLACE FUNCTION auth.current_salon_id()
RETURNS uuid
LANGUAGE sql STABLE
AS $$
  SELECT NULLIF(current_setting('request.jwt.claims', true)::jsonb -> 'app_metadata' ->> 'salon_id', '')::uuid;
$$;

-- Appointments Policy: Barbers and owners can only access their salon's appointments
CREATE POLICY "Tenant appointments isolation"
ON public.appointments
FOR ALL
USING (
  salon_id = auth.current_salon_id()
)
WITH CHECK (
  salon_id = auth.current_salon_id()
);

-- Services Policy: Public can read active services for a salon slug, only salon members can manage
CREATE POLICY "Public can view active salon services"
ON public.services
FOR SELECT
USING (is_active = true);

CREATE POLICY "Salon owners and staff can manage their services"
ON public.services
FOR ALL
USING (
  salon_id = auth.current_salon_id()
)
WITH CHECK (
  salon_id = auth.current_salon_id()
);
```

---

## 4. Current Milestone Status: Prototype Mode

- **Milestone 1 Scope**: This phase delivers the foundational Next.js architecture, UI component kit, responsive dashboard prototype, and Supabase client scaffolding.
- **Authentication**: Uses a structured mock session context for demonstration. It does **not** simulate fake token forgery against real endpoints.
- **Database**: When valid Supabase credentials are placed into `.env.local`, the application transitions to connecting live tables matching `lib/supabase/types.ts`.
