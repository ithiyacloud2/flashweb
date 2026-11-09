import React from 'react'
import Link from 'next/link'
import {
  Zap,
  Globe,
  Layers,
  Lock,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Server,
  Database,
  Palette,
  CheckCircle2,
  GraduationCap,
  Building2,
  HeartPulse,
  Briefcase,
} from 'lucide-react'

export const metadata = {
  title: 'FlashWeb | Next-Gen Multi-Tenant Website & CMS Engine',
  description:
    'The modern multi-tenant website platform and headless CMS engine built with Next.js 15, Payload CMS 3.x, and Tailwind CSS. Deploy websites for institutions, businesses, and non-profits on a 100% free serverless stack.',
}

export default function FlashWebHomePage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* 1. FlashWeb Hero */}
      <section className="relative overflow-hidden pt-20 pb-28 lg:pt-28 lg:pb-36 border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Multi-Tenant Website & Headless CMS Engine</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-white">
              One Unified Engine.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500">
                Infinite Client Websites.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              <strong>FlashWeb</strong> is the next-gen web platform engineered with <strong>Next.js 15</strong>,{' '}
              <strong>Payload CMS 3.x</strong>, and <strong>Tailwind CSS</strong>. Deploy high-converting,
              accessible websites for educational institutions, businesses, and clinics from a single,
              zero-cost serverless deployment.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/sites/prayaan"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Launch Client #1 (Prayaan Foundation)</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <Link
                href="/admin"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Super Admin CMS Portal</span>
              </Link>
            </div>

            {/* Proof Points */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Free Tier ($0/mo on Vercel)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Payload CMS 3.x Native App Router
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Isolated Client Tenant Security
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Live Client Tenant Showcase */}
      <section id="tenants" className="py-24 bg-slate-900/60 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Multi-Tenant Architecture in Action
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Live Clients & Industry Tenants
            </h2>
            <p className="text-slate-400 text-sm">
              Each organization operates as an isolated tenant with its own branding, content collections, and staff permissions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Tenant 1: Prayaan Foundation */}
            <div className="lg:col-span-2 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between">
              <div className="absolute top-6 right-6">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Tenant #1 • Active Production Site
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-900/60 border border-blue-700/60 flex items-center justify-center text-amber-300 shadow-lg">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Prayaan Foundation</h3>
                    <p className="text-xs text-slate-400">
                      National Educational NGO • Reg. Societies Act (Nov 2017)
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  Client #1 is fully deployed on FlashWeb. Features comprehensive educational
                  features: <strong>Dropout Clinic</strong>, <strong>Vidya Prabha</strong>, <strong>School Chale Hum</strong>,
                  <strong>Centre for Competition</strong>, verified impact counters (15,000+ rallied, 1,850+ dropouts reinstated),
                  news drives, and online student admissions.
                </p>

                {/* Sub-metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-lg font-black text-amber-400">7</div>
                    <div className="text-[11px] text-slate-400">Initiatives</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-lg font-black text-emerald-400">1,850+</div>
                    <div className="text-[11px] text-slate-400">Reinstated</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-lg font-black text-blue-400">Kishanganj</div>
                    <div className="text-[11px] text-slate-400">Headquarters</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Custom Domain: <code className="text-amber-300">prayaan.org</code>
                </div>
                <Link
                  href="/sites/prayaan"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-2"
                >
                  <span>Launch Prayaan Foundation Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Template Tenant 2 & 3 */}
            <div className="space-y-6 flex flex-col justify-between">
              {/* Future Tenant: Academy */}
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400">
                    Template Tenant
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Apex International Academy</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    K-12 School & College template with semester syllabi, teacher directories, and fee schedules.
                  </p>
                </div>
                <div className="text-xs font-semibold text-purple-400">
                  Ready to spin up via FlashWeb CMS →
                </div>
              </div>

              {/* Future Tenant: Healthcare */}
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400">
                    Template Tenant
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">CarePulse Clinic & Hospital</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Specialized medical portal with doctor schedules, treatment packages, and patient appointment booking.
                  </p>
                </div>
                <div className="text-xs font-semibold text-rose-400">
                  Ready to spin up via FlashWeb CMS →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Platform Features: The Lego Block System */}
      <section id="features" className="py-24 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
              The Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Built on Modular Building Blocks
            </h2>
            <p className="text-slate-400 text-sm">
              Instead of brittle one-off templates, assemble client websites in minutes using FlashWeb's standardized block library.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Lego Block Page Builder</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Hero blocks, stats tickers, program grids, narrative content, and CTA banners. Reorder and customize
                via Payload CMS visual editor without writing code.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Multi-Domain Routing</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Middleware dynamically resolves custom domains (<code className="text-amber-300">prayaan.org</code>)
                or tenant subpaths to the appropriate client content, colors, and layout.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Tenant-Scoped Staff Access</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                When Prayaan staff log in at <code className="text-amber-300">/admin</code>, they only see Prayaan's
                content and inquiries. You retain master super-admin control across all sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. $0 Free Tier Architecture */}
      <section id="free-tier" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-amber-950/80 border border-slate-800 p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6 shadow-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              Zero Infrastructure Overhead ($0 / Month)
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Run Your Entire SaaS on 100% Free Tiers
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              FlashWeb leverages Next.js Incremental Static Regeneration (ISR), Vercel's 100 GB global CDN,
              and Neon/Supabase serverless PostgreSQL free clusters. You can host Prayaan Foundation and multiple
              client sites with zero monthly hosting bills.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/sites/prayaan"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition"
              >
                View Prayaan Foundation Site →
              </Link>
              <Link
                href="/admin"
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition"
              >
                Log Into FlashWeb CMS (/admin)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
