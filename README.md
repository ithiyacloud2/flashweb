# FlashWeb: Multi-Tenant Web & CMS Engine

**FlashWeb** is an ultra-fast, multi-tenant web platform and headless CMS engine engineered with **Next.js 15 (App Router)**, **Payload CMS 3.x**, and **Tailwind CSS**. It enables developers, agencies, and organizations to deploy and manage high-performance websites and digital properties from a single unified serverless codebase.

---

## Architecture Overview

```mermaid
flowchart TD
    PublicUser["Public Web Traffic"] --> EdgeCDN["Vercel Edge CDN"]
    EdgeCDN --> Middleware["Next.js Middleware Routing"]
    
    Middleware -->|Root Domain /| FlashLanding["Minimal FlashWeb Platform Page (/)"]
    Middleware -->|Custom Domain or /sites/prayaan| TenantSite["Prayaan Foundation Educational Portal (/sites/prayaan)"]
    Middleware -->|Custom Domain /sites/:tenant| FutureTenants["Isolated Client Tenants (/sites/:tenant)"]
    
    AdminUser["Admin & Editorial Staff"] --> AdminPanel["Payload CMS Admin Portal (/admin)"]
    AdminPanel --> Database["PostgreSQL (Neon Free Tier) / SQLite (Local)"]
    TenantSite --> Database
    FutureTenants --> Database
```

* **Root Platform (`/`)**: A sleek, minimal, professional landing page for FlashWeb with zero client disclosures.
* **Isolated Tenant Sites (`/sites/[tenant]`)**: Each tenant (e.g., `/sites/prayaan` or custom domain `prayaan.org`) operates with its own custom theme, layout, and content collections.
* **Admin Portal (`/admin`)**: Centralized Payload CMS 3.x dashboard with role-based access control (RBAC).

---

## Tech Stack

* **Framework**: Next.js 15 (App Router, React 19 Server Components)
* **Headless CMS**: Payload CMS 3.93 (Native Next.js Lexical rich-text editor)
* **Styling**: Tailwind CSS & Lucide Icons
* **Database**:
  * **Production (Vercel)**: Serverless PostgreSQL ([Neon.tech](https://neon.tech) free tier, Supabase, or Vercel Postgres)
  * **Local Development**: SQLite (zero-config, `file:./local.db`)
* **Infrastructure**: 100% Free Tier ($0/month) on Vercel + Neon

---

## How to Test and Deploy on Vercel ($0 Free Tier)

Vercel functions run in serverless edge environments with ephemeral filesystems. Therefore, running `/admin` and saving content on Vercel requires a serverless PostgreSQL database (such as Neon, which is free forever).

### Step 1: Create a Free PostgreSQL Database on Neon (2 minutes)
1. Go to **[neon.tech](https://neon.tech)** and sign up for free (using GitHub or Google).
2. Click **Create Project** (Name: `flashweb-db`, Region: choose closest to you).
3. Copy your connection string from the Neon dashboard. It looks like:
   ```text
   postgresql://username:password@ep-sample-12345.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```

### Step 2: Import & Deploy on Vercel
1. Go to **[vercel.com/new](https://vercel.com/new)**.
2. Select your repository: **`ithiyacloud2/flashweb`**.
3. Under **Environment Variables**, add the following 3 variables:
   * **`DATABASE_URI`**: `postgresql://username:password@ep-sample-12345.us-east-2.aws.neon.tech/neondb?sslmode=require`
   * **`PAYLOAD_SECRET`**: `a583921bfd419b4e138a0b32e6a98762` *(or any random 32+ character string)*
   * **`NEXT_PUBLIC_SERVER_URL`**: `https://<your-project-name>.vercel.app`
4. Click **Deploy**. Vercel will build and launch your site globally in ~60 seconds.

### Step 3: Test the Admin Panel on Vercel
1. Visit `https://<your-project-name>.vercel.app/admin`.
2. On your first visit, Payload will automatically initialize the database schema in PostgreSQL.
3. You can either:
   - Create your first super-admin user directly in the clean Payload UI, **OR**
   - Visit `https://<your-project-name>.vercel.app/api/seed?key=a583921bfd419b4e138a0b32e6a98762` to seed Prayaan Foundation data and the default administrator account (`admin@prayaan.org` / `PrayaanAdmin2026!`).
4. Log into `/admin` to manage:
   * **Tenants**: Create or edit client tenants.
   * **Users**: Manage staff credentials and role permissions.
   * **Programs**: Course offerings, syllabus details, and impact metrics.
   * **Posts**: Announcements, press releases, and field drive photo essays.
   * **Inquiries**: Live incoming admission applications and contact requests.

---

## Local Development Quickstart

```bash
# 1. Clone repository
git clone https://github.com/ithiyacloud2/flashweb.git
cd flashweb

# 2. Install dependencies
pnpm install

# 3. Seed local SQLite database
npx tsx src/seed.ts

# 4. Start local development server
pnpm dev
```

* **FlashWeb Root**: [http://localhost:3000](http://localhost:3000)
* **Prayaan Tenant Site**: [http://localhost:3000/sites/prayaan](http://localhost:3000/sites/prayaan)
* **Payload CMS Admin**: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## License
MIT License • Developed with FlashWeb Engine.
