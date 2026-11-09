import React from 'react'
import Link from 'next/link'
import {
  GraduationCap,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
} from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Background Glows & Accent Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/50 text-amber-300 text-xs font-semibold uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>North India's Leading Educational NGO • Founded Nov 2017</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Empowering Communities Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                Quality Education
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Prayaan Foundation bridges the educational divide by eliminating school dropouts,
              reintegrating out-of-school youth, upgrading government school infrastructure,
              and preparing rural talent for lifelong success.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/programs"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Explore Educational Programs
              </Link>

              <Link
                href="/contact?type=admission"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition flex items-center justify-center gap-2"
              >
                <span>Enroll a Child Today</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            {/* Micro Trust Proofs */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Govt Societies Reg. Act
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Free Bridge Schooling
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Kishanganj & North India Reach
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Impact Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-white font-bold text-lg">Grassroots Impact Ticker</h3>
                  <p className="text-xs text-slate-400">Live verified milestones across Bihar</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-sm">
                  ★
                </div>
              </div>

              {/* 4 Impact Metric Tiles */}
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-amber-400 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-2xl font-black">15,000+</span>
                  </div>
                  <div className="text-xs font-semibold text-white">Children Reached</div>
                  <div className="text-[11px] text-slate-400">Enrollment drives & rallies</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-2xl font-black">1,850+</span>
                  </div>
                  <div className="text-xs font-semibold text-white">Dropouts Reinstated</div>
                  <div className="text-[11px] text-slate-400">Via Dropout Clinic program</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <Building2 className="w-4 h-4" />
                    <span className="text-2xl font-black">35+</span>
                  </div>
                  <div className="text-xs font-semibold text-white">Govt Schools Upgraded</div>
                  <div className="text-[11px] text-slate-400">Infrastructure & HR support</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-purple-400 mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-2xl font-black">800+</span>
                  </div>
                  <div className="text-xs font-semibold text-white">Women Empowered</div>
                  <div className="text-[11px] text-slate-400">Community vocational center</div>
                </div>
              </div>

              {/* Quote / Highlight */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/60 text-xs text-slate-300 italic">
                “Educating children is not charity; it is nation-building. Every child reinstated
                in school is a future secured.”
                <span className="block not-italic font-bold text-amber-300 mt-1">
                  — Prayaan Foundation Charter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
