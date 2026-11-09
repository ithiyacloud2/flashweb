import React from 'react'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { ProgramsGrid } from '@/components/ProgramsGrid'
import { InquiryForm } from '@/components/InquiryForm'
import {
  GraduationCap,
  BookOpen,
  Building2,
  Users2,
  CheckCircle,
  Calendar,
  MapPin,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Lock,
} from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Institutional Mission & Story Callout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Our Origin & Creed
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                From Grassroots Beginnings to North India's Educational Beacon
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                A national NGO founded in <strong>November 2017</strong> and registered under the Societies Registration Act,
                PRAYAAN Foundation was born from a stark reality: thousands of bright young minds in rural North India
                fall through the cracks before completing middle school.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                In just a few short years, Prayaan expanded into an integrated educational and community ecosystem.
                We bridge the gap between governmental agencies and marginalized settlements — ensuring the
                benefits of universal education reach those to whom learning was previously out of reach.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-blue-800">100% Free</div>
                  <div className="text-xs text-slate-600 font-medium">Evening tuition & drop-out bridge schools</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-amber-700">Societies Act</div>
                  <div className="text-xs text-slate-600 font-medium">Legally registered national organization</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-bold text-sm text-blue-700 hover:text-blue-900"
                >
                  <span>Read Our Full Foundation History</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl bg-gradient-to-tr from-blue-900 via-indigo-900 to-slate-900 p-8 sm:p-10 text-white shadow-xl space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    The 4 Cornerstones of Prayaan
                  </span>
                  <h3 className="text-2xl font-black">How We Drive Systemic Change</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Reinstating Dropouts</h4>
                      <p className="text-xs text-slate-300">
                        Dropout Clinics identify out-of-school adolescents and coach them back into formal grade levels.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Govt School Infrastructure</h4>
                      <p className="text-xs text-slate-300">
                        Auditing public schools and mobilizing corporate sponsors for sanitation, drinking water & libraries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Centre for Competition</h4>
                      <p className="text-xs text-slate-300">
                        Preparing ambitious rural youth for state and central competitive examinations and college entrances.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                      <Users2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Livelihood Self-Sufficiency</h4>
                      <p className="text-xs text-slate-300">
                        Vocational training centers providing tailoring and trade skills for women and persons with disabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Programs & Initiatives Grid */}
      <ProgramsGrid />

      {/* 4. Recent News, Field Drives & Celebrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Ground Reality & Field Reports
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
                Recent Drives, Fests & Milestones
              </h2>
            </div>
            <Link
              href="/news"
              className="text-sm font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
            >
              <span>View All News & Reports</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-amber-100 text-amber-800">
                  Enrollment Campaign
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3 hover:text-blue-700 transition">
                  <Link href="/news">
                    ‘School Chale Hum’ Program at Government Middle School Dingsole, Majgama
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-3">
                  Prayaan field volunteers rallied rural families at Dingsole village, distributing school kits
                  and enrolling children directly into GMS Dingsole.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Majgama, Kishanganj
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Field Drive
                </span>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-800">
                  Annual Fest & Awards
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3 hover:text-blue-700 transition">
                  <Link href="/news">
                    Inter-Coaching Center Fest & Academic Scholarship Awards
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-3">
                  Over 300 students from 8 Prayaan village tuition centers gathered for a day of academic
                  quizzes, speeches, and science exhibitions.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Prayaan Central Hall
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Academic Fest
                </span>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-purple-100 text-purple-800">
                  Vocational Empowerment
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3 hover:text-blue-700 transition">
                  <Link href="/news">
                    New Vocational Batch Inaugurated at Prayaan Community Centre
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-3">
                  50 women commenced their 6-month certification course in garment tailoring,
                  food craft packaging, and micro-business management.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Community Centre
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Women Upliftment
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Interactive Admissions / Inquiry & Volunteer Form */}
      <section id="inquiry" className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Take Action
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Be a Catalyst for a Child's Future
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether you know a child who has dropped out and needs urgent schooling, want to volunteer
                as a teaching mentor, or are a corporate looking to adopt a rural school — we are ready to collaborate.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">Direct Foundation Contacts:</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <div><strong>Phone:</strong> (+91) 620 135 2256</div>
                  <div><strong>Email:</strong> info@prayaan.org</div>
                  <div><strong>Address:</strong> Kishanganj, Bihar, India</div>
                  <div><strong>Hours:</strong> Mon – Sat, 8:00 AM – 6:00 PM</div>
                </div>
              </div>

              {/* Staff Portal Link */}
              <div className="p-4 rounded-xl bg-slate-900 text-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-400">Prayaan Staff & Editors</div>
                  <div className="text-xs text-slate-400">Manage programs, news & submissions</div>
                </div>
                <Link
                  href="/admin"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white flex items-center gap-1.5 transition"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  Staff Login
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
