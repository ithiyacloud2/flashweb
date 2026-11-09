import React from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Compass,
  Users,
  Trophy,
  School,
  Building,
  Scissors,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export const metadata = {
  title: 'Educational Programs & Initiatives | Prayaan Foundation',
  description:
    'Explore Vidya Prabha, Dropout Clinic, School Chale Hum, Model School, Centre for Competition, and Government School Support programs by Prayaan Foundation.',
}

const detailedPrograms = [
  {
    id: 'vidya-prabha',
    title: 'Vidya Prabha',
    tagline: 'Universal Educational Support & Scholarships',
    category: 'Core Education Support',
    icon: BookOpen,
    accent: 'border-blue-500 text-blue-600',
    description:
      'Vidya Prabha is Prayaan’s foundational initiative providing holistic educational support to children from families where parents are illiterate or earn daily wages. Under this project, Prayaan operates decentralized evening tutoring centers across rural clusters, distributes textbooks, stationary, and uniforms, and provides merit scholarships for students entering secondary school.',
    bullets: [
      'Decentralized evening learning circles in village centers',
      'Free distribution of curriculum books, notebooks, and geometry sets',
      'Continuous teacher-parent interaction to monitor academic progress',
      'Merit-cum-means scholarship grants for high school transitions',
    ],
    metric: '4,200+ Students actively tutored',
  },
  {
    id: 'dropout-clinic',
    title: 'Dropout Clinic',
    tagline: 'Bridge Schooling & Dropout Reintegration',
    category: 'Flagship Intervention',
    icon: Compass,
    accent: 'border-emerald-500 text-emerald-600',
    description:
      'The Dropout Clinic is a specialized diagnostic and pedagogical center designed to tackle North India’s acute school dropout challenge. Field teams identify children who were pulled out of school due to agricultural labor, familial crisis, or learning distress. Through accelerated bridge curricula, remedial literacy modules, and empathetic counseling, children are brought back up to grade level and formally re-enrolled into state middle and high schools.',
    bullets: [
      'House-to-house identification of out-of-school children',
      'Accelerated bridge coursework in language and foundational math',
      'Parental counseling to eliminate child labor tendencies',
      'Direct coordination with local Headmasters for seamless formal readmission',
    ],
    metric: '1,850+ Dropouts reinstated into mainstream schools',
  },
  {
    id: 'school-chale-hum',
    title: 'School Chale Hum',
    tagline: 'Grassroots Community Enrollment Drives',
    category: 'Grassroots Mobilization',
    icon: Users,
    accent: 'border-amber-500 text-amber-600',
    description:
      'A high-visibility mass awareness and community mobilization drive conducted before each academic session. Prayaan volunteers, alumni, and local youth march through rural settlements with banners, street plays, and door-to-door petitions, ensuring that not a single 6-year-old child in the panchayat remains unenrolled.',
    bullets: [
      'Panchayat-level door-to-door school enrollment censuses',
      'Community rallies and street theater raising awareness on girls’ education',
      'Immediate on-the-spot enrollment support with birth certificates and documentation',
      'Follow-up audits to verify attendance during the first 90 days',
    ],
    metric: '15,000+ Rural families engaged and rallied',
  },
  {
    id: 'centre-for-competition',
    title: 'Centre for Competition',
    tagline: 'Coaching Talented Youth for Civil & Public Careers',
    category: 'Higher Education & Careers',
    icon: Trophy,
    accent: 'border-purple-500 text-purple-600',
    description:
      'Talent in rural India is abundant, but access to expensive coaching institutes is non-existent. The Centre for Competition provides free structured mentorship, reference libraries, online test series, and guest lectures from civil servants and scholars. Rural students are trained for competitive examinations, college admissions, and government service careers.',
    bullets: [
      'Dedicated digital study rooms and physical reference libraries in Kishanganj',
      'Daily mock tests, current affairs briefings, and analytical training',
      'Mentorship sessions led by working professionals and retired officers',
      'Financial sponsorships covering exam registration and travel fees',
    ],
    metric: '350+ Youth coached for competitive exams',
  },
  {
    id: 'model-school',
    title: 'Model School Project',
    tagline: 'Modern Benchmark K-12 Institution',
    category: 'Institutional Excellence',
    icon: School,
    accent: 'border-indigo-500 text-indigo-600',
    description:
      'The Prayaan Model School represents an exemplary benchmark institution equipped with all modern pedagogical facilities required in this day and age. Catering to grades 1 through 12, it provides experiential STEM learning, computer literacy, sports training, and moral character education — proving that world-class education can flourish in rural heartlands.',
    bullets: [
      'Comprehensive curriculum spanning primary, middle, and senior secondary grades',
      'Smart audio-visual classrooms and computer laboratories',
      'Holistic physical education, debate, and arts extracurriculars',
      'Highly trained, passionate faculty with continuous teacher development',
    ],
    metric: 'Full K-12 benchmark education model',
  },
  {
    id: 'institutional-excellence',
    title: 'Government School Support & Advocacy',
    tagline: 'Strengthening Public School Infrastructure',
    category: 'Public Infrastructure',
    icon: Building,
    accent: 'border-rose-500 text-rose-600',
    description:
      'Government schools form the backbone of Indian education, yet many suffer from dilapidated classrooms, dysfunctional toilets, and missing staff. Prayaan conducts rigorous infrastructure audits of government schools, submits actionable recommendations to district and state authorities, and mobilizes corporate CSR sponsors to build clean drinking water units, separate girls’ toilets, and library shelves.',
    bullets: [
      'Thorough utility and structural audits of state middle schools',
      'Corporate CSR matchmaking to fund essential school upgrades',
      'Deployment of temporary HR and teaching support to under-staffed schools',
      'Constructive policy advocacy submitted directly to district magistrates and education officers',
    ],
    metric: '35+ Government schools adopted and upgraded',
  },
  {
    id: 'community-centre',
    title: 'Community Centre & Livelihood',
    tagline: 'Economic Self-Sufficiency & Vocational Training',
    category: 'Vocational & Livelihood',
    icon: Scissors,
    accent: 'border-teal-500 text-teal-600',
    description:
      'True educational empowerment is sustained when families have economic stability. The Prayaan Community Centre is a self-sufficiency initiative providing formal vocational training for unemployed women, youth, and persons with disabilities. Trainees master tailoring, textile stitching, pickle and preserve making, and micro-enterprise management, with direct linkages to lucrative local and urban markets.',
    bullets: [
      'Formal 6-month certification courses in garment tailoring and apparel design',
      'Food processing and handicraft training with quality standard checks',
      'Financial literacy, micro-credit linkages, and cooperative formation',
      'Market linkage assistance ensuring fair prices and sustained orders',
    ],
    metric: '800+ Women & disabled artisans economically empowered',
  },
]

export default function ProgramsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            PRAYAAN INITIATIVES
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 text-white">
            7 Flagship Programs Transforming Education
          </h1>
          <p className="text-slate-300 text-lg mt-4 leading-relaxed font-normal">
            A comprehensive, multi-layered approach to rural child literacy, school dropout prevention,
            and sustainable community empowerment.
          </p>
        </div>
      </section>

      {/* Program Detailed Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {detailedPrograms.map((p, index) => {
            const Icon = p.icon
            return (
              <div
                key={p.id}
                id={p.id}
                className="scroll-mt-28 rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-md transition space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {p.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                        {p.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      ★ {p.metric}
                    </span>
                  </div>
                </div>

                <div className="text-slate-600 leading-relaxed text-base">
                  {p.description}
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                    Key Features & Operations:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {p.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                  <div className="text-xs text-slate-500 italic">
                    {p.tagline}
                  </div>
                  <Link
                    href={`/contact?type=admission`}
                    className="text-xs font-bold px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white transition flex items-center gap-1.5"
                  >
                    <span>Enroll or Inquire About This Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
