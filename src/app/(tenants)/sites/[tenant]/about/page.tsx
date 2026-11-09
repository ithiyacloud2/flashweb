import React from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Target,
  Compass,
  Award,
  Shield,
  FileCheck,
  Building,
  Heart,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tenant: string }>
}) {
  const resolved = await params
  return {
    title: 'About the Foundation | Prayaan Foundation, Kishanganj, Bihar',
    description:
      'Learn about Prayaan Foundation — founded in November 2017, registered under the Societies Registration Act XXI of 1860, serving underprivileged rural communities across North India.',
  }
}

export default async function TenantAboutPage({
  params,
}: {
  params: Promise<{ tenant: string }>
}) {
  const resolved = await params
  const basePath = `/sites/${resolved.tenant}`

  return (
    <div className="bg-[#FBF9F5] text-[#292524] min-h-screen font-sans">
      {/* 1. Dignified Institutional Header */}
      <section className="bg-[#112A1F] text-[#FBF9F5] py-20 border-b border-[#2D5A43] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2D5A43_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#1B4332] border border-[#2D5A43] text-stone-300 text-xs font-serif italic">
            <span>Institutional Charter & History</span>
            <span className="text-white/40">•</span>
            <span className="text-amber-200/90 font-sans not-italic font-medium">Est. November 2017</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FBF9F5] leading-tight">
            Rooted in Grassroots Compassion, Governed by Institutional Rigor
          </h1>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            A registered educational society under the Societies Registration Act XXI of 1860, founded to ensure that rural poverty, under-resourced schools, and seasonal migration never permanently extinguish a child’s right to learn.
          </p>
        </div>
      </section>

      {/* 2. Institutional Genesis & Field History */}
      <section className="py-20 bg-[#FBF9F5] border-b border-[#D8CFC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-[#A6481A]">
                <span>Genesis & Evolution</span>
                <span>•</span>
                <span>Kishanganj, Bihar</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#112A1F] leading-tight">
                From a Village Evening Circle to an Integrated Continuum of 7 Field Programs
              </h2>

              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                In November 2017, Prayaan Foundation was conceived in the floodplains of Kishanganj, Bihar — one of India’s most educationally backward borderland districts. A group of committed educators and local field workers observed that formal public schools were losing vast cohorts of children between Grades 3 and 7.
              </p>

              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                Children from daily-wage agricultural households were pulled into jute harvesting and brick kiln labor during seasonal migrations. When these children missed three months of classes, they returned only to face comprehension deficits, humiliation, and formal deregistration.
              </p>

              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                Rather than establishing parallel fee-charging schools, Prayaan chose a disciplined path: partnering constructively with the public schooling apparatus. We set up <strong>Dropout Clinics</strong> to provide accelerated bridge education, initiated <strong>Vidya Prabha</strong> evening learning circles, and conducted <strong>School Chale Hum</strong> enrollment drives across backward panchayats.
              </p>

              {/* Charter Quote */}
              <div className="p-6 rounded bg-[#F4EFEA] border-l-4 border-[#C45C26] text-sm text-[#292524] font-serif italic space-y-2">
                <p>
                  “We place a strong focus on supporting the government and its educational agencies in reaching out with diverse empowerment and developmental programs to the underprivileged strata — those classes to whom quality schooling has historically remained beyond reach.”
                </p>
                <span className="block not-italic font-sans text-xs font-semibold text-[#873913]">
                  — Foundation Founding Resolution (November 2017)
                </span>
              </div>
            </div>

            {/* Institutional Ledger / Factsheet */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F4EFEA] border border-[#D8CFC4] rounded-lg p-6 sm:p-8 space-y-5">
                <div className="border-b border-[#D8CFC4] pb-3">
                  <span className="text-[11px] uppercase tracking-wider text-[#6E675F] block font-semibold">
                    Legal & Operational Registry
                  </span>
                  <span className="font-serif text-xl font-bold text-[#112A1F]">Prayaan Foundation</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-[#E5DFD7]">
                    <span className="text-[#6E675F]">Legal Classification:</span>
                    <span className="font-semibold text-[#112A1F]">Registered Non-Profit Society</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#E5DFD7]">
                    <span className="text-[#6E675F]">Statutory Framework:</span>
                    <span className="font-semibold text-[#112A1F]">Societies Registration Act XXI of 1860</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#E5DFD7]">
                    <span className="text-[#6E675F]">Date of Establishment:</span>
                    <span className="font-semibold text-[#112A1F]">November 2017</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#E5DFD7]">
                    <span className="text-[#6E675F]">Tax Compliance:</span>
                    <span className="font-semibold text-[#1B4332]">Sections 12A & 80G Certified</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#E5DFD7]">
                    <span className="text-[#6E675F]">Headquarters:</span>
                    <span className="font-semibold text-[#112A1F]">Kishanganj, Bihar, India</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#6E675F]">Operational Mandate:</span>
                    <span className="font-semibold text-[#1B4332]">100% Free Public Access</span>
                  </div>
                </div>
              </div>

              {/* Four Pillars Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded bg-[#FBF9F5] border border-[#D8CFC4] space-y-1.5">
                  <Target className="w-5 h-5 text-[#C45C26]" />
                  <h4 className="font-serif font-bold text-sm text-[#112A1F]">Our Mission</h4>
                  <p className="text-[11px] text-[#6E675F] leading-relaxed">
                    Eradicating structural rural dropouts and fortifying state school systems.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#FBF9F5] border border-[#D8CFC4] space-y-1.5">
                  <Compass className="w-5 h-5 text-[#1B4332]" />
                  <h4 className="font-serif font-bold text-sm text-[#112A1F]">Our Vision</h4>
                  <p className="text-[11px] text-[#6E675F] leading-relaxed">
                    Universal child literacy where socio-economic status never limits a child's dignity.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#FBF9F5] border border-[#D8CFC4] space-y-1.5">
                  <Award className="w-5 h-5 text-[#873913]" />
                  <h4 className="font-serif font-bold text-sm text-[#112A1F]">Pedagogy</h4>
                  <p className="text-[11px] text-[#6E675F] leading-relaxed">
                    Empathetic diagnostic bridge schooling rather than rote memorization.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#FBF9F5] border border-[#D8CFC4] space-y-1.5">
                  <Heart className="w-5 h-5 text-[#C45C26]" />
                  <h4 className="font-serif font-bold text-sm text-[#112A1F]">Self-Reliance</h4>
                  <p className="text-[11px] text-[#6E675F] leading-relaxed">
                    Empowering rural mothers through certified vocational artisan training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Operational Values */}
      <section className="py-20 bg-[#112A1F] text-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#D9733E]">
              Guiding Convictions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The Principles That Govern Our Field Operations
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Every tuition circle, diagnostic bridge batch, and government school audit is conducted under strict ethical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded bg-[#1B4332]/70 border border-[#2D5A43] space-y-3">
              <div className="w-10 h-10 rounded bg-[#112A1F] text-amber-200 font-mono font-bold text-sm flex items-center justify-center">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Unconditional Reintegration</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                We accept every out-of-school child regardless of caste, community, gender, or duration of absence. Our diagnostic bridge clinics evaluate without stigma or prejudice.
              </p>
            </div>

            <div className="p-7 rounded bg-[#1B4332]/70 border border-[#2D5A43] space-y-3">
              <div className="w-10 h-10 rounded bg-[#112A1F] text-amber-200 font-mono font-bold text-sm flex items-center justify-center">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Public System Synergy</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                We do not establish privatized alternatives to the public education framework. We systematically strengthen state primary and middle schools through structural audits and teacher aids.
              </p>
            </div>

            <div className="p-7 rounded bg-[#1B4332]/70 border border-[#2D5A43] space-y-3">
              <div className="w-10 h-10 rounded bg-[#112A1F] text-amber-200 font-mono font-bold text-sm flex items-center justify-center">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Transparent Accountability</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                As a registered society, all philanthropic sponsorships, CSR allocations, and donor funds are audited annually with statements submitted to regulatory authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Institutional Action Banner */}
      <section className="py-16 bg-[#F4EFEA] border-t border-[#D8CFC4]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#112A1F]">
            Partner with the Foundation in Kishanganj
          </h2>
          <p className="text-sm text-[#44403C] max-w-xl mx-auto leading-relaxed">
            Whether you wish to sponsor a bridge schooling batch, adopt a rural government school classroom, or apply as a volunteer teaching fellow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`${basePath}/contact?type=sponsor`}
              className="px-6 py-3 rounded bg-[#C45C26] hover:bg-[#A6481A] text-white font-medium text-xs sm:text-sm tracking-wide shadow-sm transition"
            >
              Support an Educational Initiative
            </Link>
            <Link
              href={`${basePath}/programs`}
              className="px-6 py-3 rounded border border-[#D8CFC4] hover:bg-white text-[#292524] font-serif text-xs sm:text-sm transition"
            >
              Examine the 7 Program Prospectuses
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
