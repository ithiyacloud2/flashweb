import React from 'react'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { ProgramsGrid } from '@/components/ProgramsGrid'
import { InquiryForm } from '@/components/InquiryForm'
import {
  BookOpen,
  MapPin,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Building,
  CheckCircle,
  FileText,
  Users,
  Compass,
} from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tenant: string }>
}) {
  const resolved = await params
  return {
    title: 'Prayaan Foundation | Rural Education & Dropout Rehabilitation, Kishanganj, Bihar',
    description:
      'Registered non-profit society (est. Nov 2017) working on school dropout rehabilitation, free remedial bridge schooling, government school infrastructure audits, and youth competitive examination coaching across rural North India.',
  }
}

export default async function TenantHomePage({
  params,
}: {
  params: Promise<{ tenant: string }>
}) {
  const resolved = await params
  const tenantSlug = resolved.tenant
  const basePath = `/sites/${tenantSlug}`

  return (
    <div className="bg-[#FBF9F5] text-[#292524] selection:bg-[#F6D7C7] selection:text-[#6E2E0E]">
      {/* 3. Hero Section (Full-width authentic documentary presentation with overlaid mission statement) */}
      <Hero basePath={basePath} />

      {/* 4. Short Foundation Story Strip (Founded 2017, registered society, focus on dropouts & state schools) */}
      <section className="py-16 bg-[#F4EFEA] border-b border-[#D8CFC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story Lead */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-[#A6481A]">
                <span>Genesis & Institutional Scope</span>
                <span>•</span>
                <span>November 2017 to Present</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#112A1F] leading-tight">
                An Educational Society Born on the Rural Frontlines of Kishanganj
              </h2>
              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed font-sans">
                Registered under the Societies Registration Act XXI of 1860, Prayaan Foundation was founded in
                November 2017 to confront an acute structural crisis: in the flood-prone, economically strained
                borderlands of rural North India, a vast proportion of children abandon schooling between Grade 3
                and Grade 7.
              </p>
              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed font-sans">
                Rather than creating parallel private institutions, Prayaan operates in constructive synergy with
                the state educational apparatus — identifying out-of-school dropouts, providing free diagnostic bridge
                remedies, rehabilitating classrooms, and ensuring first-generation learners complete their schooling with dignity.
              </p>
            </div>

            {/* Institutional Stat Ledger (Subtle & Grounded, Not Oversized AI Counters) */}
            <div className="lg:col-span-4 bg-[#FBF9F5] border border-[#D8CFC4] rounded p-6 space-y-4 font-serif">
              <div className="border-b border-[#E5DFD7] pb-3">
                <span className="text-[11px] uppercase tracking-wider text-[#6E675F] block font-sans font-semibold">
                  Field Baseline
                </span>
                <span className="text-xl font-bold text-[#112A1F]">Kishanganj District, Bihar</span>
                <span className="block text-xs text-[#A6481A] italic">Seemanchal Borderland Outreach</span>
              </div>

              <div className="space-y-2.5 text-xs text-[#292524] font-sans">
                <div className="flex justify-between items-center py-1 border-b border-[#F4EFEA]">
                  <span className="text-[#6E675F]">Legal Constitution:</span>
                  <span className="font-semibold text-[#112A1F]">Societies Act XXI of 1860</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#F4EFEA]">
                  <span className="text-[#6E675F]">Established:</span>
                  <span className="font-semibold text-[#112A1F]">November 2017</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#F4EFEA]">
                  <span className="text-[#6E675F]">Core Operational Units:</span>
                  <span className="font-semibold text-[#112A1F]">7 Integrated Programs</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#6E675F]">Tuition Fee Policy:</span>
                  <span className="font-semibold text-[#1B4332]">100% Free Public Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Programs Prospectus (Substantial, syllabus-like institutional ledger) */}
      <ProgramsGrid basePath={basePath} />

      {/* 6. Field Impact & Narrative Photo Essays (Substantial documentary reports, not just big numbers) */}
      <section className="py-20 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-[#A6481A]">
              <span>Documentary Case Dispatches</span>
              <span>•</span>
              <span>Observations from the Ground</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#112A1F] tracking-tight">
              Behind Every Record: Restoring Rural Childhoods
            </h2>
            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed font-sans">
              Data alone obscures the daily reality of rural education. Here are field notes documenting how
              Prayaan’s field teams, village elders, and local teachers navigate the difficult path back to the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Story 1: Dropout Reintegration in Majgama */}
            <article className="bg-[#F4EFEA] border border-[#D8CFC4] rounded-lg overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="aspect-[16/10] bg-[#1B4332] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop"
                    alt="Bridge schooling cohort in rural Bihar"
                    className="w-full h-full object-cover filter contrast-105 saturate-85"
                  />
                  <div className="absolute top-3 left-3 bg-[#112A1F]/90 text-amber-200 text-[10px] font-mono px-2 py-0.5 rounded">
                    CASE RECORD: MAJGAMA
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-sans font-semibold text-[#A6481A] uppercase tracking-wider">
                    Dropout Clinic Intervention
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#112A1F] leading-snug">
                    From Jute Fields Back to the Slate: Reinstating 38 Adolescents in Majgama
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-sans">
                    During the seasonal monsoon harvest, adolescent boys in Majgama are routinely pulled out of
                    middle school to assist family labor. After missing 90 consecutive days, standard state schools
                    strike their names off the roll.
                  </p>
                  <p className="text-xs text-[#6E675F] font-serif italic pt-1 border-t border-[#E5DFD7]">
                    “When the Prayaan diagnostic clinic arrived, we did not blame parents. We provided evening bridge
                    instruction so boys could catch up on Hindi comprehension without forfeiting domestic subsistence.”
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E5DFD7] text-xs text-[#292524] flex items-center justify-between font-sans">
                <span className="text-[#6E675F]">Location: Majgama Panchayat</span>
                <span className="font-semibold text-[#1B4332]">38 Readmitted</span>
              </div>
            </article>

            {/* Story 2: Infrastructure audit at GMS Dingsole */}
            <article className="bg-[#F4EFEA] border border-[#D8CFC4] rounded-lg overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="aspect-[16/10] bg-[#1B4332] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
                    alt="Village primary classroom repairs in Bihar"
                    className="w-full h-full object-cover filter contrast-105 saturate-85"
                  />
                  <div className="absolute top-3 left-3 bg-[#112A1F]/90 text-amber-200 text-[10px] font-mono px-2 py-0.5 rounded">
                    FIELD AUDIT: DINGSOLE
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-sans font-semibold text-[#A6481A] uppercase tracking-wider">
                    Public School Support
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#112A1F] leading-snug">
                    Auditing the Well and the Latrine: Rebuilding Government Middle School Dingsole
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-sans">
                    A school without functioning sanitation is a school where adolescent girls stop attending.
                    Prayaan completed a structural audit of GMS Dingsole, demonstrating that 62 female pupils
                    had dropped out entirely due to a collapsed boundary wall and lack of running water.
                  </p>
                  <p className="text-xs text-[#6E675F] font-serif italic pt-1 border-t border-[#E5DFD7]">
                    Within 4 months, Prayaan coordinated with district engineers and an Indian corporate philanthropy
                    to construct segregated sanitation facilities, restoring 100% female attendance.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E5DFD7] text-xs text-[#292524] flex items-center justify-between font-sans">
                <span className="text-[#6E675F]">GMS Dingsole, Kishanganj</span>
                <span className="font-semibold text-[#1B4332]">Sanitation Restored</span>
              </div>
            </article>

            {/* Story 3: Centre for Competition Aspirants */}
            <article className="bg-[#F4EFEA] border border-[#D8CFC4] rounded-lg overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="aspect-[16/10] bg-[#1B4332] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop"
                    alt="Rural youth studying library books in Kishanganj"
                    className="w-full h-full object-cover filter contrast-105 saturate-85"
                  />
                  <div className="absolute top-3 left-3 bg-[#112A1F]/90 text-amber-200 text-[10px] font-mono px-2 py-0.5 rounded">
                    SCHOLASTIC REPORT: KISHANGANJ
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-sans font-semibold text-[#A6481A] uppercase tracking-wider">
                    Higher Education & Careers
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#112A1F] leading-snug">
                    Breaking the Coaching Monopoly: How Rural Aspirants Crack State Services
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-sans">
                    Commercial coaching centers in urban hubs charge upwards of ₹80,000 annually — an impossibility
                    for sons and daughters of landless agriculturalists. Prayaan’s Centre for Competition provides
                    quiet electricity-backed study rooms, daily mock test papers, and mentor guidance completely free.
                  </p>
                  <p className="text-xs text-[#6E675F] font-serif italic pt-1 border-t border-[#E5DFD7]">
                    In the recent recruitment cycle, 14 Prayaan-trained village aspirants cleared preliminary state
                    subordinate selection boards.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E5DFD7] text-xs text-[#292524] flex items-center justify-between font-sans">
                <span className="text-[#6E675F]">Centre for Competition</span>
                <span className="font-semibold text-[#1B4332]">14 State Selections</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 7. Institutional Partnership & "Why Collaborate with Us" (For Sponsors & Govt bodies) */}
      <section className="py-20 bg-[#112A1F] text-[#FBF9F5] border-y border-[#2D5A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#D9733E]">
                Institutional Governance & Integrity
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Why Philanthropic Trusts & Public Bodies Collaborate with Prayaan
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
                We believe that rural educational intervention requires scholarly rigor, legal transparency, and
                unflinching accountability. We welcome CSR partners, institutional foundations, and state educational
                officers to review our ground operations.
              </p>

              <div className="pt-2">
                <Link
                  href={`${basePath}/contact?type=sponsor`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#C45C26] hover:bg-[#A6481A] text-white text-xs font-semibold tracking-wide transition"
                >
                  <span>Initiate Institutional Dialogue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
              <div className="p-6 rounded bg-[#1B4332]/60 border border-[#2D5A43] space-y-2">
                <div className="flex items-center gap-2 text-amber-200 font-serif font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#D9733E]" />
                  <span>Statutory Legal Compliance</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Registered under Societies Registration Act XXI of 1860 with verified 12A & 80G tax certifications.
                  Accounts undergo external audit by certified chartered accountants annually.
                </p>
              </div>

              <div className="p-6 rounded bg-[#1B4332]/60 border border-[#2D5A43] space-y-2">
                <div className="flex items-center gap-2 text-amber-200 font-serif font-bold text-sm">
                  <Building className="w-4 h-4 text-[#D9733E]" />
                  <span>Synergy with the Public System</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Non-adversarial collaboration with Block Education Officers (BEOs) and village Panchayats to
                  strengthen existing government school assets without administrative duplication.
                </p>
              </div>

              <div className="p-6 rounded bg-[#1B4332]/60 border border-[#2D5A43] space-y-2">
                <div className="flex items-center gap-2 text-amber-200 font-serif font-bold text-sm">
                  <FileText className="w-4 h-4 text-[#D9733E]" />
                  <span>Direct Field Deployment</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Zero sub-contracting or intermediary brokerages. All bridge schooling, materials distribution,
                  and remedial circles are manned directly by Prayaan field officers and trained local fellows.
                </p>
              </div>

              <div className="p-6 rounded bg-[#1B4332]/60 border border-[#2D5A43] space-y-2">
                <div className="flex items-center gap-2 text-amber-200 font-serif font-bold text-sm">
                  <Users className="w-4 h-4 text-[#D9733E]" />
                  <span>Community Ownership</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Village learning committees are staffed with local mothers and panchayat ward representatives,
                  guaranteeing sustained community commitment long after school enrollment drives conclude.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. News & Recent Field Activities with Dates and Specific Locations */}
      <section className="py-20 bg-[#F4EFEA] border-b border-[#D8CFC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#A6481A]">
                Field Registry
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#112A1F] tracking-tight mt-1">
                Recent Dispatches from the Field
              </h2>
            </div>
            <Link
              href={`${basePath}/news`}
              className="text-xs font-sans font-bold text-[#C45C26] hover:text-[#873913] hover:underline inline-flex items-center gap-1"
            >
              <span>Review Complete Field Gazette</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            <div className="bg-[#FBF9F5] border border-[#D8CFC4] rounded p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#6E675F] font-mono">
                  <span>DISPATCH NO. 24-03</span>
                  <span>15 MARCH 2026</span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#112A1F] leading-snug">
                  ‘School Chale Hum’ Enrollment Rally at Government Middle School Dingsole
                </h4>
                <p className="text-xs text-[#44403C] leading-relaxed">
                  Field volunteers completed an intensive door-to-door drive across Majgama panchayat, distributing
                  200 educational kits and resolving documentation bottlenecks for children without birth certificates.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5DFD7] text-[11px] text-[#6E675F] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C45C26]" /> Dingsole, Kishanganj District
              </div>
            </div>

            <div className="bg-[#FBF9F5] border border-[#D8CFC4] rounded p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#6E675F] font-mono">
                  <span>DISPATCH NO. 24-05</span>
                  <span>20 MAY 2026</span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#112A1F] leading-snug">
                  Annual Inter-Coaching Center Academic Assembly & Merit Awards
                </h4>
                <p className="text-xs text-[#44403C] leading-relaxed">
                  300 rural students from 8 decentralized evening tutoring circles assembled in Kishanganj. Twenty-four
                  students were awarded high school transition scholarships including bicycles for distant travel.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5DFD7] text-[11px] text-[#6E675F] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C45C26]" /> Prayaan Central Hall, Kishanganj
              </div>
            </div>

            <div className="bg-[#FBF9F5] border border-[#D8CFC4] rounded p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#6E675F] font-mono">
                  <span>DISPATCH NO. 24-07</span>
                  <span>10 JULY 2026</span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#112A1F] leading-snug">
                  Commencement of 6-Month Vocational Cohort for Rural Women Artisans
                </h4>
                <p className="text-xs text-[#44403C] leading-relaxed">
                  50 women commenced certified training in garment tailoring, pattern cutting, and micro-banking
                  at the Prayaan Community Centre, with equipment provided by an Indian CSR grant.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5DFD7] text-[11px] text-[#6E675F] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C45C26]" /> Community Centre, Kishanganj
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Purposeful Call-to-Action for Enrollment, Volunteering, or School Sponsorship */}
      <section id="intake" className="py-20 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#A6481A]">
                Action & Referral
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#112A1F] tracking-tight leading-tight">
                Refer an Out-of-School Child, Volunteer, or Sponsor a Classroom
              </h2>
              <p className="text-sm text-[#44403C] leading-relaxed font-sans">
                Every child out of school in our district is a shared failure of our collective conscience. If you know
                a family whose child has stopped attending class, or if your organization wishes to sponsor a rural
                government school upgrade, submit the formal docket.
              </p>

              <div className="p-6 rounded bg-[#F4EFEA] border border-[#D8CFC4] space-y-3 font-sans text-xs">
                <h4 className="font-serif font-bold text-sm text-[#112A1F]">
                  Secretariat Communication Channels:
                </h4>
                <div className="space-y-1.5 text-[#44403C]">
                  <div><strong>Headquarters:</strong> Kishanganj Town, Bihar 855107, India</div>
                  <div><strong>Helpline:</strong> (+91) 620 135 2256 (Mon–Sat, 8am–6pm IST)</div>
                  <div><strong>Official Email:</strong> contact@prayaan.org / info@prayaan.org</div>
                  <div><strong>Legal Entity:</strong> Societies Registration Act XXI of 1860</div>
                </div>
              </div>

              {/* Secretariat Portal Access */}
              <div className="p-4 rounded bg-[#112A1F] text-stone-200 flex items-center justify-between text-xs">
                <div>
                  <div className="font-serif font-bold text-amber-200">Prayaan Staff & District Secretariat</div>
                  <div className="text-[11px] text-stone-400 font-sans">Access records, dockets & publications</div>
                </div>
                <Link
                  href="/admin"
                  className="px-3 py-1.5 rounded bg-[#1B4332] hover:bg-[#2D5A43] text-amber-100 font-serif text-xs transition"
                >
                  Portal Login →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm defaultType="admission" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
