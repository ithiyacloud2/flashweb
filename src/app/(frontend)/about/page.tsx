import React from 'react'
import Link from 'next/link'
import {
  GraduationCap,
  Target,
  Compass,
  Award,
  Users,
  CheckCircle2,
  Building,
  Heart,
  ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'About Us | Prayaan Foundation',
  description:
    'Learn about Prayaan Foundation — founded in November 2017, registered under the Societies Registration Act, serving underprivileged children across Kishanganj, Bihar and North India.',
}

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            About Prayaan Foundation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 text-white">
            Rooted in Grassroots Compassion, Driven by Educational Excellence
          </h1>
          <p className="text-slate-300 text-lg mt-4 leading-relaxed font-normal">
            A national non-governmental organization registered under the Societies Registration Act,
            founded in November 2017 with an unwavering commitment to universal child literacy and rural empowerment.
          </p>
        </div>
      </section>

      {/* Main Narrative & History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Our Genesis
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our History & Four-Year Evolution
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Founded in <strong>November 2017</strong>, PRAYAAN Foundation was established by visionary educators
                and social activists who recognized that formal education in rural North India was failing the most
                vulnerable children. Many children enrolled in government schools were dropping out by Grade 5 due
                to broken infrastructure, lack of learning materials, and familial poverty.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                In as little as four years, Prayaan evolved from a small local tutoring circle in Kishanganj, Bihar
                into an extensive network running seven integrated projects. Today, Prayaan partners directly with
                local education authorities, state welfare departments, and corporate philanthropies to ensure
                the total participation of backward communities in nation-building.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-500 text-sm text-slate-700 italic">
                “We place a strong focus on supporting the government and its agencies in reaching out with diverse
                empowerment and development programs to the underprivileged strata — those classes to whom education
                has always been beyond reach.”
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <Target className="w-8 h-8 text-blue-700" />
                <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To eliminate the dropout crisis, elevate public schooling benchmarks, and provide free remedial
                  tutoring so every rural child completes high school.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <Compass className="w-8 h-8 text-amber-600" />
                <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A society where socio-economic background never dictates a child’s educational trajectory, and
                  where marginalized communities are full partners in India's progress.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <Award className="w-8 h-8 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900">Institutional Excellence</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rigorous audits of school infrastructure, sponsor mobilization for clean sanitation, and HR
                  teaching aids deployed to government middle schools.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <Heart className="w-8 h-8 text-purple-600" />
                <h3 className="text-lg font-bold text-slate-900">Community Self-Reliance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Vocational programs empowering rural women, unemployed youth, and persons with disabilities
                  with market-viable artisan and manufacturing skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Ethos & Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">The Principles That Guide Us</h2>
            <p className="text-slate-400 text-sm">
              Our code of operation across every tuition center, rally, and government partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-black text-xl">
                01
              </div>
              <h3 className="text-xl font-bold">Unconditional Inclusivity</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We accept every child regardless of caste, creed, gender, or prior academic record. Our Dropout
                Clinics welcome adolescents who have been out of school for years without judgment.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-black text-xl">
                02
              </div>
              <h3 className="text-xl font-bold">Public System Strengthening</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We do not seek to replace government schools; we seek to fortify them. We provide timely
                recommendations to central, state, and local educational authorities while funding vital infrastructure.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-black text-xl">
                03
              </div>
              <h3 className="text-xl font-bold">Financial & Operational Integrity</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Registered under the Societies Registration Act, all donor and sponsor funds are channeled
                directly to student kits, teacher stipends, and physical school improvements with transparent auditing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-black">Want to become part of the Prayaan movement?</h2>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            Join our network of volunteer teachers, village coordinators, and philanthropic sponsors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?type=volunteer"
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm transition"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/programs"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition"
            >
              Explore Our Initiatives
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
