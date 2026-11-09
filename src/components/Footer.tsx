import React from 'react'
import Link from 'next/link'
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Heart,
  Globe,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1: Foundation Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-amber-500 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                PRAYAAN <span className="text-amber-400 font-semibold">Foundation</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Founded in November 2017 and registered under the Societies Registration Act.
              Dedicated to the educational, social, and economic empowerment of marginalized
              communities, reinstating school dropouts, and elevating government schools across North India.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-900/50 px-3 py-2 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registered Society • 100% Non-Profit Organization</span>
            </div>
          </div>

          {/* Col 2: Core Programs */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Key Initiatives
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/programs#vidya-prabha" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Vidya Prabha
                </Link>
              </li>
              <li>
                <Link href="/programs#dropout-clinic" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Dropout Clinic
                </Link>
              </li>
              <li>
                <Link href="/programs#school-chale-hum" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> School Chale Hum
                </Link>
              </li>
              <li>
                <Link href="/programs#centre-for-competition" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Centre for Competition
                </Link>
              </li>
              <li>
                <Link href="/programs#model-school" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Model School (K-12)
                </Link>
              </li>
              <li>
                <Link href="/programs#institutional-excellence" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Govt School Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition">About Our Mission</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-amber-400 transition">Academic Programs</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-amber-400 transition">News & Field Drives</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition">Enroll a Child</Link>
              </li>
              <li>
                <Link href="/contact?type=volunteer" className="hover:text-amber-400 transition">Volunteer / Partner</Link>
              </li>
              <li>
                <Link href="/admin" className="text-amber-400 font-semibold hover:underline">Staff Portal (/admin)</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Headquarters
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Kishanganj, Bihar, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>(+91) 620 135 2256</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@prayaan.org</span>
              </li>
              <li className="pt-2 text-xs text-slate-500">
                Operating Hours:<br />Mon – Sat: 8:00 AM – 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & SaaS Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Prayaan Foundation. All Rights Reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              Powered by Payload CMS & Next.js
            </span>
            <span className="text-slate-700">•</span>
            <span>Deployed on Vercel Serverless</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
