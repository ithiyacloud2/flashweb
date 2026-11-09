import React from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Users,
  Compass,
  Trophy,
  School,
  Building,
  Scissors,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

const programsData = [
  {
    title: 'Vidya Prabha',
    slug: 'vidya-prabha',
    badge: 'Core Schooling Support',
    categoryColor: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: BookOpen,
    iconBg: 'bg-blue-600 text-white',
    summary:
      'Providing free evening tuition, school supplies, uniforms, and academic mentorship to ensure underprivileged students excel in school.',
    target: 'Grades 1 to 10 Students',
    metric: '4,200+ Students Supported',
  },
  {
    title: 'Dropout Clinic',
    slug: 'dropout-clinic',
    badge: 'Flagship Intervention',
    categoryColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    icon: Compass,
    iconBg: 'bg-emerald-600 text-white',
    summary:
      'Identifying children who have dropped out due to poverty or family hardship, offering accelerated bridge education, and seamlessly reenrolling them into formal schools.',
    target: 'Out-of-school Youth & Dropouts',
    metric: '1,850+ Children Reintegrated',
  },
  {
    title: 'School Chale Hum',
    slug: 'school-chale-hum',
    badge: 'Grassroots Mobilization',
    categoryColor: 'bg-amber-100 text-amber-800 border-amber-200',
    icon: Users,
    iconBg: 'bg-amber-600 text-white',
    summary:
      'Field teams conduct door-to-door counseling in rural villages and tribal settlements to dissolve parental hesitancy and enroll first-generation learners.',
    target: 'Rural Families & Communities',
    metric: '15,000+ Families Rallied',
  },
  {
    title: 'Centre for Competition',
    slug: 'centre-for-competition',
    badge: 'Higher Education & Careers',
    categoryColor: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: Trophy,
    iconBg: 'bg-purple-600 text-white',
    summary:
      'Free coaching, curated study libraries, and expert mentorship guiding talented rural youth through competitive entrance tests and government job exams.',
    target: 'Youth & Aspirants (Ages 16-25)',
    metric: '350+ Exam Aspirants Trained',
  },
  {
    title: 'Model School Project',
    slug: 'model-school',
    badge: 'Institutional Benchmark',
    categoryColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    icon: School,
    iconBg: 'bg-indigo-600 text-white',
    summary:
      'A benchmark K-12 learning institution equipped with digital smart classrooms, STEM kits, libraries, and holistic extracurricular education.',
    target: 'Grades 1 to 12',
    metric: 'Full K-12 Standard Campus',
  },
  {
    title: 'Govt School Support & Advocacy',
    slug: 'institutional-excellence',
    badge: 'Public Infrastructure',
    categoryColor: 'bg-rose-100 text-rose-800 border-rose-200',
    icon: Building,
    iconBg: 'bg-rose-600 text-white',
    summary:
      'Auditing decrepit government schools, securing corporate sponsors to build toilets and clean drinking water facilities, and providing supplemental teachers.',
    target: 'Public Schools & Authorities',
    metric: '35+ Government Schools Upgraded',
  },
  {
    title: 'Community Centre & Livelihood',
    slug: 'community-centre',
    badge: 'Women & Disability Uplift',
    categoryColor: 'bg-teal-100 text-teal-800 border-teal-200',
    icon: Scissors,
    iconBg: 'bg-teal-600 text-white',
    summary:
      'Vocational training workshops in garment tailoring, food craft, and packaging for unemployed women and differently-abled individuals to build market-linked livelihoods.',
    target: 'Women & People with Disabilities',
    metric: '800+ Women Economically Empowered',
  },
]

export const ProgramsGrid = () => {
  return (
    <section id="programs" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            Our Core Initiatives
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive Education & Grassroots Transformation
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From reinstating school dropouts to modernizing public school classrooms and coaching
            youth for competitive exams — explore how Prayaan makes real change happen.
          </p>
        </div>

        {/* Grid of Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${item.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.categoryColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                {/* Bottom Meta & Metric */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Target:</span>
                    <span className="text-slate-800 font-semibold">{item.target}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-slate-500 font-medium">Impact:</span>
                    <span className="text-emerald-700 font-bold">{item.metric}</span>
                  </div>

                  <Link
                    href={`/programs#${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 group/link pt-1"
                  >
                    <span>Read Program Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-black">Want to support or adopt a school project?</h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Connect with Prayaan's institutional desk. You can sponsor classroom upgrades,
              fund a teacher, or provide uniforms and books for an entire village batch.
            </p>
          </div>
          <Link
            href="/contact?type=sponsor"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm tracking-wide shadow-md transition"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  )
}
