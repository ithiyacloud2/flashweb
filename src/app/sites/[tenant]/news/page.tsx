import React from 'react'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight, Tag, FileText, CheckCircle2 } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tenant: string }>
}) {
  const resolved = await params
  return {
    title: `Field Dispatches & Circulars | ${resolved.tenant === 'prayaan' ? 'Prayaan Foundation' : resolved.tenant}`,
    description:
      'Official field dispatches, administrative circulars, School Chale Hum enrollment rallies, and community reports from Kishanganj, Bihar.',
  }
}

const articles = [
  {
    dispatchCode: 'DSP-2026-03',
    title: '‘School Chale Hum’ Intensive Enrollment Drive across Majgama Panchayat',
    category: 'Field Drive & Dropout Readmission',
    date: 'March 15, 2026',
    location: 'GMS Dingsole, Majgama, Kishanganj',
    leadOfficer: 'P. K. Verma, District Field Coordinator',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    excerpt:
      'Prayaan field volunteers launched an intensive village rally across Majgama panchayat. Over 200 out-of-school children were identified, provided with free learning kits, and admitted into Government Middle School Dingsole with immediate administrative clearances.',
    details:
      'The rally saw active participation from village Mukhiyas, ward members, and parents. Field coordinators organized on-the-spot documentation assistance to resolve missing birth certificates and Aadhaar linkages that historically prevented these children from being admitted to the state roll.',
    outcomes: '208 Out-of-School Children Readmitted • 100% Documentation Secured',
  },
  {
    dispatchCode: 'DSP-2026-05',
    title: 'Annual Inter-Centre Scholastic Colloquium & Merit-Cum-Means Awards',
    category: 'Academic Evaluation & Scholarships',
    date: 'May 20, 2026',
    location: 'Prayaan Central Study Hall, Kishanganj',
    leadOfficer: 'Academic Supervisory Council',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
    excerpt:
      'Over 300 bright students from 8 decentralized Prayaan rural tuition centers converged in Kishanganj for the annual Inter-Coaching Center Fest. Rigorous examinations in mathematical reasoning, vernacular literacy, and scientific inquiry were conducted.',
    details:
      'Twenty-four students were awarded merit-cum-means scholarships covering their complete secondary schooling textbooks, tuition fees, and bicycles for transportation to distant high schools across the district.',
    outcomes: '24 Bicycles & Secondary Stipends Distributed • 312 Candidates Tested',
  },
  {
    dispatchCode: 'DSP-2026-07',
    title: 'Inauguration of the 2026 Women’s Textile & Livelihood Cohort',
    category: 'Community Livelihood & Self-Reliance',
    date: 'July 10, 2026',
    location: 'Prayaan Community Centre, Kishanganj',
    leadOfficer: 'S. Begum, Vocational Program Director',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    excerpt:
      'A fresh cohort of 50 rural women and disabled youth began their 6-month certified vocational course in garment construction and artisan textile preservation, equipped with modern industrial sewing machines provided by philanthropic sponsors.',
    details:
      'The curriculum integrates technical tailoring with financial literacy, UPI digital banking, and market linkage with regional apparel distributors to eliminate household economic distress that forces children into early farm labor.',
    outcomes: '50 Trainees Enrolled • 100% Sponsored Toolkits Provided',
  },
  {
    dispatchCode: 'DSP-2026-08',
    title: 'Constitutional Literacy & Girl-Child Education Village Marches',
    category: 'Civil Awareness & Rights Campaign',
    date: 'August 15, 2026',
    location: 'Kishanganj Town & Rural Feeder Hubs',
    leadOfficer: 'Volunteer Youth Secretariat',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    excerpt:
      'Prayaan students, alumni, and village elders commemorated the 79th Independence Day with a disciplined 5-kilometer march emphasizing education as the true vehicle of constitutional emancipation and community dignity.',
    details:
      'Students performed street plays on preventing adolescent marriage and the transformative power of ensuring girls complete senior secondary schooling and college graduation before entering household responsibilities.',
    outcomes: '12 Village Hamlets Reached • 600+ Rural Households Pledged',
  },
]

export default async function TenantNewsPage({
  params,
}: {
  params: Promise<{ tenant: string }>
}) {
  const resolved = await params
  const basePath = `/sites/${resolved.tenant}`

  return (
    <div className="bg-[#FBF9F5] text-[#292524] selection:bg-[#F6D7C7] selection:text-[#6E2E0E] min-h-screen">
      {/* 1. Dignified Institutional Header */}
      <section className="relative bg-[#112A1F] text-[#FBF9F5] py-20 border-b border-[#2D5A43] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 filter contrast-125 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B14] via-[#112A1F]/95 to-[#112A1F]/80 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#1B4332] border border-[#2D5A43] text-stone-300 text-xs font-serif tracking-widest uppercase">
            <span>Official Field Records & Gazette</span>
            <span className="text-white/40">•</span>
            <span className="text-amber-200/90 font-sans not-italic font-medium">Kishanganj Operations</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Field Dispatches & Administrative Circulars
          </h1>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            Periodic dispatches detailing village enrollment drives, student rehabilitations, infrastructure
            evaluations, and community programs conducted across rural Bihar.
          </p>
        </div>
      </section>

      {/* 2. Dispatches Ledger */}
      <section className="py-20 bg-[#F4EFEA] border-b border-[#D8CFC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art, idx) => (
              <article
                key={idx}
                className="bg-[#FBF9F5] border border-[#D8CFC4] rounded-lg overflow-hidden shadow-sm hover:border-[#1B4332] transition flex flex-col justify-between"
              >
                <div>
                  {/* Photo Banner with Registry Code */}
                  <div className="aspect-[16/9] bg-[#112A1F] relative overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover filter contrast-105 saturate-85"
                    />
                    <div className="absolute top-3 left-3 bg-[#112A1F]/90 text-amber-200 text-[10px] font-mono px-2.5 py-0.5 rounded border border-white/10">
                      {art.dispatchCode}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#C45C26] text-white text-[10px] font-sans font-bold px-2.5 py-0.5 rounded">
                      {art.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-[#6E675F] font-sans">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#A6481A]" />
                        {art.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#A6481A]" />
                        {art.location}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#112A1F] leading-snug">
                      {art.title}
                    </h2>

                    <p className="text-sm text-[#44403C] leading-relaxed font-sans">
                      {art.excerpt}
                    </p>

                    <div className="p-4 rounded bg-[#F4EFEA] border border-[#E5DFD7] text-xs text-[#292524] leading-relaxed font-sans space-y-2">
                      <div>{art.details}</div>
                      <div className="pt-2 border-t border-[#D8CFC4] flex items-center gap-1.5 font-semibold text-[#1B4332]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C45C26] shrink-0" />
                        <span>Outcome: {art.outcomes}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="px-6 sm:px-8 py-4 bg-[#F4EFEA] border-t border-[#E5DFD7] flex items-center justify-between text-xs font-sans">
                  <span className="text-[#6E675F] italic font-serif">
                    Supervised by: {art.leadOfficer}
                  </span>
                  <Link
                    href={`${basePath}/contact?type=sponsor`}
                    className="font-bold text-[#C45C26] hover:text-[#A6481A] inline-flex items-center gap-1 transition"
                  >
                    <span>Support Similar Work</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Archival Record Banner */}
      <section className="py-14 bg-[#FBF9F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-10 h-10 rounded-full bg-[#1B4332] text-amber-200 flex items-center justify-center mx-auto">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#112A1F]">
            Foundation Archival & Audit Transparency
          </h3>
          <p className="text-sm text-[#44403C] font-sans leading-relaxed max-w-2xl mx-auto">
            Prayaan maintains verified case registries, diagnostic assessments, and student progress dossiers at our
            Kishanganj field office. Institutional partners and researchers may request official project summaries.
          </p>
          <div className="pt-2">
            <Link
              href={`${basePath}/contact`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#112A1F] hover:bg-[#1B4332] text-[#FBF9F5] text-xs font-semibold tracking-wide transition"
            >
              <span>Request Verified Project Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
