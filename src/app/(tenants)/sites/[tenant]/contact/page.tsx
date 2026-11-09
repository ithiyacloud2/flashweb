import React from 'react'
import { InquiryForm } from '@/components/InquiryForm'
import { MapPin, Phone, Mail, Clock, ShieldCheck, Building, Landmark } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tenant: string }>
}) {
  const resolved = await params
  return {
    title: `Institutional Secretariat & Intake | ${resolved.tenant === 'prayaan' ? 'Prayaan Foundation' : resolved.tenant}`,
    description:
      'Contact Prayaan Foundation in Kishanganj, Bihar. Register out-of-school children, apply for teaching fellowships, or sponsor rural school infrastructure.',
  }
}

export default async function TenantContactPage({
  searchParams,
}: {
  params: Promise<{ tenant: string }>
  searchParams: Promise<{ type?: string }>
}) {
  const resolvedParams = await searchParams
  const defaultType = resolvedParams?.type || 'admission'

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
            <span>Official Institutional Secretariat</span>
            <span className="text-white/40">•</span>
            <span className="text-amber-200/90 font-sans not-italic font-medium">Public & Sponsor Relations</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Institutional Secretariat & Field Intake
          </h1>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            Direct your inquiries regarding student intake, teaching fellowships, CSR alignments, or district
            partnerships to our administrative desk in Kishanganj.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-20 bg-[#F4EFEA] border-b border-[#D8CFC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Contact & Registry Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Office Card */}
              <div className="rounded-lg bg-[#FBF9F5] border border-[#D8CFC4] p-8 shadow-sm space-y-6">
                <div className="border-b border-[#E5DFD7] pb-4">
                  <div className="text-[11px] font-sans font-semibold text-[#A6481A] uppercase tracking-wider">
                    Administrative Secretariat
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#112A1F]">
                    Kishanganj Central Secretariat
                  </h3>
                </div>

                <div className="space-y-5 text-xs sm:text-sm text-[#44403C] font-sans">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded bg-[#1B4332] text-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#D9733E]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#112A1F] text-xs uppercase tracking-wider">
                        Registered Headquarters & Postal Address
                      </div>
                      <p className="mt-1 text-[#292524] leading-relaxed">
                        Prayaan Foundation Central Office<br />
                        Kishanganj, District Kishanganj<br />
                        Bihar – 855107, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded bg-[#1B4332] text-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-[#D9733E]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#112A1F] text-xs uppercase tracking-wider">
                        Field Helpline & Operations Desk
                      </div>
                      <p className="mt-1 text-[#112A1F] font-semibold">
                        (+91) 620 135 2256
                      </p>
                      <p className="text-[11px] text-[#6E675F] italic mt-0.5">
                        Direct line for teachers, village heads, and student families
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded bg-[#1B4332] text-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-[#D9733E]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#112A1F] text-xs uppercase tracking-wider">
                        Official Secretariat Inquiries
                      </div>
                      <p className="mt-1 text-[#112A1F] font-semibold">
                        contact@prayaan.org
                      </p>
                      <p className="text-[11px] text-[#6E675F] italic mt-0.5">
                        For institutional partnerships, CSR grants, and audits: info@prayaan.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded bg-[#1B4332] text-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-[#D9733E]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#112A1F] text-xs uppercase tracking-wider">
                        Secretariat Hours & Public Reception
                      </div>
                      <p className="mt-1 text-[#292524] leading-relaxed">
                        Monday – Saturday: 08:00 AM – 06:00 PM IST<br />
                        Sunday: Closed for routine visitors (reserved for village field rallies)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Entity & Compliance Ledger */}
              <div className="p-6 rounded-lg bg-[#112A1F] text-[#FBF9F5] border border-[#2D5A43] space-y-3 font-sans">
                <div className="flex items-center gap-2 text-amber-200 font-serif font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#D9733E]" />
                  <span>Statutory Legal Identification</span>
                </div>
                <div className="space-y-2 text-xs text-stone-300 leading-relaxed">
                  <div className="flex justify-between items-center py-1 border-b border-[#2D5A43]">
                    <span className="text-stone-400">Constitution:</span>
                    <span className="font-semibold text-white">Societies Registration Act XXI of 1860</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#2D5A43]">
                    <span className="text-stone-400">Date of Registration:</span>
                    <span className="font-semibold text-white">November 2017</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#2D5A43]">
                    <span className="text-stone-400">Tax Status:</span>
                    <span className="font-semibold text-amber-200">12A & 80G Certified Non-Profit</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-stone-400">Jurisdiction:</span>
                    <span className="font-semibold text-white">Govt. of Bihar & Union of India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Intake Form */}
            <div className="lg:col-span-7">
              <InquiryForm defaultType={defaultType} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
