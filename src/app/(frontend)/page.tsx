import React from 'react'
import Link from 'next/link'
import {
  Zap,
  Layers,
  Lock,
  ArrowRight,
  ShieldCheck,
  Server,
  Database,
  Cpu,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Globe,
  Code2,
} from 'lucide-react'

export const metadata = {
  title: 'FlashWeb | High-Performance Web & Content Management Engine',
  description:
    'Modern web infrastructure and multi-tenant content management engine engineered with Next.js 15, Payload CMS 3.x, and Tailwind CSS. Built for speed, security, and effortless scalability.',
}

export default function FlashWebHomePage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-amber-400 selection:text-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 border-b border-slate-900">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-900/40 to-transparent pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-amber-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Next.js 15 & Payload CMS 3.x Core Engine</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.12]">
            High-Performance Web &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500">
              Content Infrastructure
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            FlashWeb provides unified content management, robust multi-tenant isolation, and modular page composition—deployed natively on modern serverless edge architecture.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/admin"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide transition shadow-lg shadow-amber-500/15 flex items-center justify-center gap-2 group"
            >
              <Lock className="w-4 h-4 text-slate-950 group-hover:scale-105 transition" />
              <span>Launch Admin Portal</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition" />
            </Link>

            <a
              href="#architecture"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800/90 border border-slate-800 text-slate-200 font-semibold text-sm transition flex items-center justify-center gap-2"
            >
              <span>Explore Architecture</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Proof Badges */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-slate-400 font-medium border-t border-slate-900/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Payload CMS 3.93 Native App Router
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              PostgreSQL & SQLite Dual Adapter
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Multi-Tenant Data Isolation
            </span>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="features" className="py-20 md:py-28 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Engineered for Speed, Precision, and Control
            </h2>
            <p className="text-slate-400 text-sm">
              Standardized components and modular architecture let you manage web assets with enterprise rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition space-y-4">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Headless Content Engine</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Native Payload CMS 3.x integration inside Next.js 15 App Router. Full Lexical rich text, structured media storage, and automatic GraphQL and REST endpoints.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition space-y-4">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Multi-Tenant Isolation</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Run distinct client websites and brand properties with strict tenant-scoped data isolation, custom domains, and discrete staff role-based access controls.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition space-y-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Serverless Edge Architecture</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Zero infrastructure overhead. Designed for effortless deployment to Vercel paired with free-tier serverless PostgreSQL clusters (Neon / Supabase).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Tech Specs */}
      <section id="architecture" className="py-20 md:py-28 bg-slate-900/40 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Cpu className="w-4 h-4" />
                <span>Technical Specifications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Modern Full-Stack Foundation
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                FlashWeb eliminates legacy CMS bloat. It leverages React 19 Server Components, compile-time type safety via TypeScript, and instantaneous database synchronization.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <Globe className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Dynamic Domain & Subpath Routing</h4>
                    <p className="text-xs text-slate-400">
                      Next.js middleware seamlessly maps custom domains or subpaths to dedicated tenant layouts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <Database className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Dual Database Driver Support</h4>
                    <p className="text-xs text-slate-400">
                      Zero-config local SQLite driver for rapid local development, auto-switching to serverless PostgreSQL in cloud production.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <Lock className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Granular Role-Based Permissions</h4>
                    <p className="text-xs text-slate-400">
                      Super-administrators maintain global management, while tenant administrators access only scoped collections.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code / Architecture Panel */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 font-mono text-xs shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-slate-500 ml-2">platform.config.ts</span>
                </div>
                <span className="text-[10px] text-amber-400 uppercase tracking-widest font-semibold">Active</span>
              </div>

              <div className="space-y-2 text-slate-300">
                <p className="text-slate-500">{`// FlashWeb Multi-Tenant Engine Spec`}</p>
                <p>
                  <span className="text-amber-400">const</span> <span className="text-white">stack</span> = {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">framework:</span> <span className="text-emerald-400">&apos;Next.js 15 (App Router)&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">cms:</span> <span className="text-emerald-400">&apos;Payload CMS 3.93&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">runtime:</span> <span className="text-emerald-400">&apos;React 19 Server Components&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">database:</span> process.env.DATABASE_URI ? <span className="text-emerald-400">&apos;PostgreSQL (Neon)&apos;</span> : <span className="text-emerald-400">&apos;SQLite&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">multiTenancy:</span> <span className="text-blue-400">true</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">serverlessEdge:</span> <span className="text-blue-400">true</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">monthlyHostingCost:</span> <span className="text-amber-400">&apos;$0 / mo (Free Tier)&apos;</span>,
                </p>
                <p>{'}'}</p>
              </div>

              <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-slate-500 text-[11px]">
                <span>Status: Production Ready</span>
                <span className="text-emerald-400 font-semibold">100% Operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Portal Banner */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Content Management Portal
              </h3>
              <p className="text-slate-400 text-sm">
                Access your centralized Payload CMS administration panel to manage collections, tenants, pages, and inbound inquiries.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                <span>Enter Admin Panel</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
