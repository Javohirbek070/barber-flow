# BarberFlow — International Multi-Tenant Barbershop SaaS

BarberFlow is an international multi-tenant SaaS appointment booking and chair management platform built for modern barbershops, salons, and independent barbers.

Featuring a high-octane **Maximalist** design system with rich tactile controls, zero no-show shield architecture, multi-barber chair allocations, and Supabase integration readiness.

---

## ⚡ Key Features

- **Public Marketing & Booking Engine**:
  - High-impact maximalist landing page with animated feature ticker.
  - Interactive appointment booking ticket widget with live service & chair picker.
  - 3-tier transparent SaaS pricing: Starter ($29/mo), Pro ($59/mo), Business ($119/mo).
- **Salon Command Dashboard**:
  - Live chair queue with real-time status transitions (`Confirmed` → `In Chair` → `Completed`).
  - Chair occupancy rates, daily gross estimates, and active barber roster.
  - Multi-barber timeline calendar schedule.
- **Service & Menu Management**:
  - Full pricing menu with categories, durations, and active/archive controls.
  - Interactive *Add New Service* modal dialog.
- **Master Barbers Roster**:
  - Barber staff profiles, specialty tags, today's appointment load, and on-duty/off-duty shift toggles.
  - Interactive *Add Barber* onboarding modal dialog.
- **Shop Configuration & Security**:
  - Public booking slug customizer (`barberflow.io/{slug}`).
  - Timezone and multi-currency formatting (USD, EUR, GBP, CAD, AUD).
  - Cryptographic `salon_id` multi-tenancy tenant isolation model.

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + Custom Maximalist Neo-Brutalist Design Tokens
- **Icons**: Lucide React
- **Backend & Database**: Supabase SSR Architecture (Row Level Security ready)
- **Linting**: ESLint

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/Javohirbek070/barber-flow.git
cd barber-flow
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🔒 Multi-Tenancy & Data Isolation

All tenant data is strictly partitioned by `salon_id`. Authorization never trusts client-supplied tenant identifiers and resolves permissions server-side via Supabase Row Level Security (RLS). See [`docs/security-and-multitenancy.md`](docs/security-and-multitenancy.md) for full RLS policies.

---

## 📄 License
MIT © BarberFlow Inc.
