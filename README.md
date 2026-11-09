# Prayaan Foundation & Multi-Tenant Educational Platform

A modern, high-performance web platform and Content Management System built for **Prayaan Foundation** — a national non-governmental educational organization founded in November 2017 and registered under the Societies Registration Act.

Built with **Next.js 15 (App Router)**, **Payload CMS 3.x**, and **Tailwind CSS**, optimized for **100% free-tier deployment on Vercel** with serverless database support (SQLite locally, PostgreSQL via Neon/Supabase in production).

---

## Key Highlights & Capabilities

### 1. Modern Educational Institute Portal
* **High-Impact Hero & Live Metric Ticker**: Real-time milestones (15,000+ children rallied, 1,850+ dropouts reinstated, 35+ government schools upgraded).
* **7 Core Flagship Initiatives**: Detailed directories and interactive views for *Vidya Prabha*, *Dropout Clinic*, *School Chale Hum*, *Centre for Competition*, *Model School*, *Govt School Support*, and *Community Centre*.
* **Interactive Admissions & Volunteering**: Real-time form capture submitting directly to the Payload CMS database.
* **Ground Realities & Field Reports**: Dedicated news and campaign updates showcasing school rallies, scholarship fests, and vocational batch inaugurations.

### 2. No-Code CMS for Prayaan Staff (`/admin`)
* Non-technical foundation staff can log in, edit headings, add programs, publish field updates, and view incoming student admissions without touching code.
* Role-based permissions (`super-admin`, `editor`, `viewer`).
* Pre-seeded with Prayaan Foundation’s full history, programs, and contact metadata.

### 3. Multi-Tenant SaaS Ready (Create Websites for Any Industry)
* Configured with **modular page-building blocks** (Hero, Stats, Content, Cards, CTAs) and a `tenants` collection.
* Ready to power multiple educational institutions or other industry websites (Healthcare, Corporate, Real Estate, E-Commerce) from a single deployment and database.

---

## Tech Stack

* **Framework**: Next.js 15 (App Router, Server Components)
* **CMS**: Payload CMS 3.x (Embedded inside Next.js, Lexical RichText editor)
* **Styling**: Tailwind CSS + Lucide React Icons
* **Database**:
  * **Local Development**: SQLite (zero-config, runs in `./local.db`)
  * **Production (Vercel)**: Serverless PostgreSQL (Neon, Supabase, or Vercel Postgres)
* **Hosting**: Vercel (Edge CDN, Serverless Functions, 100% Free Hobby Tier)

---

## Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/ithiyacloud2/prayaan.git
cd prayaan
pnpm install
```

### 2. Run Database Seeding (Pre-populates Prayaan's data)
```bash
npx tsx src/seed.ts
```

### 3. Start Development Server
```bash
pnpm dev
```
Visit:
* **Frontend Website**: [http://localhost:3000](http://localhost:3000)
* **Staff CMS Portal**: [http://localhost:3000/admin](http://localhost:3000/admin)

**Default Admin Credentials**:
* **Email**: `admin@prayaan.org`
* **Password**: `PrayaanAdmin2026!`

---

## Deploying to Vercel ($0 Free Tier)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete modern educational institute platform"
   git push -u origin main
   ```
2. **Import into Vercel**:
   * Go to [vercel.com](https://vercel.com) and import the `ithiyacloud2/prayaan` repository.
3. **Configure Environment Variables on Vercel**:
   * `PAYLOAD_SECRET`: (Any secure 32-character string)
   * `DATABASE_URI`: (Your free Neon or Supabase PostgreSQL connection string, e.g. `postgresql://...`)
   * `NEXT_PUBLIC_SERVER_URL`: `https://your-vercel-domain.vercel.app` (or `https://prayaan.org`)
4. **Deploy**:
   * Vercel builds and deploys the site with global CDN edge caching.

---

## License & Registration
PRAYAAN Foundation is a registered NGO under the Societies Registration Act (Govt. of India).
This software is open-source under the MIT License.
