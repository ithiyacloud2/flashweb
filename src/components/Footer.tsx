import React from 'react'
import Link from 'next/link'
import {
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Shield,
  FileCheck,
  Building,
  ArrowRight,
} from 'lucide-react'

export const Footer = ({ basePath = '' }: { basePath?: string }) => {
  const prefix = basePath ? basePath : ''

  return (
    <footer className="bg-[#112A1F] text-[#E1EDE6] pt-16 pb-12 border-t-2 border-[#1B4332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1B4332]">
          {/* Col 1: Foundation Legal Entity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href={prefix || '/'} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#1B4332] border border-[#2D5A43] flex items-center justify-center text-amber-100 shadow-sm">
                <BookOpen className="w-5 h-5 text-[#D9733E]" />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                PRAYAAN FOUNDATION
              </span>
            </Link>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-md font-sans">
              Founded in November 2017 and registered under the Societies Registration Act XXI of 1860.
              Dedicated to rural literacy, rehabilitating school dropouts, improving state school infrastructure,
              and advancing socio-economic self-reliance across Kishanganj, Bihar, and rural North India.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-stone-300 font-serif italic">
              <div className="flex items-center gap-2 text-amber-200/90">
                <Shield className="w-3.5 h-3.5 text-[#D9733E] shrink-0" />
                <span>Non-Profit Legal Society (Govt. of Bihar Registration)</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400 font-sans not-italic text-[11px]">
                <FileCheck className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>Audited Annual Statements • Sections 12A & 80G Compliant</span>
              </div>
            </div>
          </div>

          {/* Col 2: Institutional Programs Index */}
          <div>
            <h4 className="font-serif text-white font-bold text-xs uppercase tracking-widest mb-4 text-amber-200/90">
              Program Syllabus
            </h4>
            <ul className="space-y-2 text-xs text-stone-300 font-sans">
              <li>
                <Link href={`${prefix}/programs#dropout-clinic`} className="hover:text-amber-200 transition">
                  PRY-01 • Dropout Clinic
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/programs#vidya-prabha`} className="hover:text-amber-200 transition">
                  PRY-02 • Vidya Prabha
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/programs#school-chale-hum`} className="hover:text-amber-200 transition">
                  PRY-03 • School Chale Hum
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/programs#centre-for-competition`} className="hover:text-amber-200 transition">
                  PRY-04 • Centre for Competition
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/programs#model-school`} className="hover:text-amber-200 transition">
                  PRY-05 • Model School (K-12)
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/programs#institutional-excellence`} className="hover:text-amber-200 transition">
                  PRY-06 • Govt School Support
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/programs#community-centre`} className="hover:text-amber-200 transition">
                  PRY-07 • Community Livelihood
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Governance & Field Dispatches */}
          <div>
            <h4 className="font-serif text-white font-bold text-xs uppercase tracking-widest mb-4 text-amber-200/90">
              Institutional Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300 font-sans">
              <li>
                <Link href={prefix || '/'} className="hover:text-amber-200 transition">
                  Foundation Home
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/about`} className="hover:text-amber-200 transition">
                  Foundation Charter & History
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/programs`} className="hover:text-amber-200 transition">
                  Complete Program Prospectus
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/news`} className="hover:text-amber-200 transition">
                  Field Dispatches & Reports
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/contact?type=sponsor`} className="hover:text-amber-200 transition">
                  CSR Sponsorship & Adoption
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/contact?type=volunteer`} className="hover:text-amber-200 transition">
                  Teaching Fellowships
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/admin" className="text-amber-300 hover:underline font-mono text-[11px]">
                  Secretariat Staff Portal (/admin)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Secretariat & Contact */}
          <div>
            <h4 className="font-serif text-white font-bold text-xs uppercase tracking-widest mb-4 text-amber-200/90">
              Headquarters
            </h4>
            <ul className="space-y-3 text-xs text-stone-300 font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9733E] shrink-0 mt-0.5" />
                <span>
                  Central Secretariat & Field Office<br />
                  Kishanganj Town, Bihar 855107, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D9733E] shrink-0" />
                <span>(+91) 620 135 2256</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D9733E] shrink-0" />
                <span>contact@prayaan.org</span>
              </li>
              <li className="pt-1 text-[11px] text-stone-400 font-serif italic border-t border-[#1B4332]">
                Secretariat Hours: Mon – Sat, 8:00 AM – 6:00 PM IST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclosures */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 font-sans">
          <p>© {new Date().getFullYear()} Prayaan Foundation. Duly registered under Societies Registration Act XXI of 1860.</p>
          <div className="flex items-center gap-3">
            <span>Seemanchal Outreach Secretariat</span>
            <span>•</span>
            <span>Kishanganj, Bihar</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
