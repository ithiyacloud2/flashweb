import React from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, Compass } from 'lucide-react'

export const Hero = ({ basePath = '' }: { basePath?: string }) => {
  const prefix = basePath ? basePath : ''

  return (
    <section className="relative bg-[#112A1F] text-[#FBF9F5] border-b border-[#2D5A43] overflow-hidden">
      {/* Background documentary image overlay with deep forest vignette */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-20 filter contrast-125 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B14] via-[#112A1F]/95 to-[#112A1F]/70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Serious Institutional Mission Statement */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1B4332] border border-[#2D5A43] text-stone-300 text-xs font-serif italic tracking-wide">
              <span>Established November 2017</span>
              <span className="text-white/40">•</span>
              <span className="text-amber-200/90 font-sans not-italic font-medium">
                Kishanganj District, Bihar
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FBF9F5] leading-[1.2]">
              Rebuilding Educational Foundations for the Most Vulnerable Rural Children.
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans max-w-2xl">
              In the borderland villages of rural North India, thousands of promising young students drop out before
              completing elementary school due to poverty, under-resourced public classrooms, and seasonal migration.
              Prayaan Foundation runs free bridge clinics to reinstate out-of-school dropouts, audits and repairs
              government school infrastructure, and prepares first-generation learners for competitive futures.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href={`${prefix}/contact?type=sponsor`}
                className="px-6 py-3.5 rounded bg-[#C45C26] hover:bg-[#A6481A] text-white font-medium text-sm tracking-wide shadow-sm transition text-center flex items-center justify-center gap-2"
              >
                <span>Support a Child’s Education</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`${prefix}/contact?type=admission`}
                className="px-6 py-3.5 rounded border border-[#C2DBCF]/30 hover:bg-white/5 text-stone-200 font-serif text-sm tracking-wide transition text-center"
              >
                Enroll an Out-of-School Child
              </Link>
            </div>

            {/* Field Attribution */}
            <div className="pt-4 border-t border-[#1B4332] text-xs text-stone-400 font-serif italic">
              “Education is not an act of benevolence; it is the constitutional foundation of human dignity.”
              <span className="block not-italic font-sans text-[11px] text-[#D4A373] mt-0.5">
                — Prayaan Foundation Institutional Charter (Reg. XXI of 1860)
              </span>
            </div>
          </div>

          {/* Right Column: Grounded Documentary Photo Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg bg-[#1B4332]/60 border border-[#2D5A43] p-3 shadow-2xl backdrop-blur-sm">
              <div className="overflow-hidden rounded border border-white/10 aspect-[4/3] relative bg-[#0A1B14]">
                {/* Authentic documentary image of rural classroom */}
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                  alt="Rural students in Kishanganj classroom supported by Prayaan Foundation"
                  className="w-full h-full object-cover filter contrast-105 saturate-90"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-xs text-stone-200 font-sans">
                  <div className="font-semibold text-white text-[13px]">
                    Morning Remedial Batch • Village Learning Centre
                  </div>
                  <div className="text-[11px] text-stone-300 font-serif italic mt-0.5">
                    Majgama Panchayat, Kishanganj District, Bihar (October 2026)
                  </div>
                </div>
              </div>

              {/* Documentary Caption Box */}
              <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-[11px] text-stone-300 border-t border-[#2D5A43]">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#D9733E]" />
                  <span>Field Operations: Bihar & North India</span>
                </span>
                <span className="font-serif italic text-amber-200/80">
                  100% Free Public Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
