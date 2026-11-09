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
  Shield,
  FileText,
} from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tenant: string }>
}) {
  const resolved = await params
  return {
    title: 'Programs Prospectus (7 Initiatives) | Prayaan Foundation, Kishanganj, Bihar',
    description:
      'Detailed institutional syllabi for Vidya Prabha, Dropout Clinic, School Chale Hum, Model School, Centre for Competition, and Government School Support programs.',
  }
}

const detailedPrograms = [
  {
    id: 'dropout-clinic',
    code: 'PRY-REC-01',
    title: 'Dropout Clinic',
    subtitle: 'Diagnostic Bridge Schooling & Formal Public Reinstatement',
    tag: 'Flagship Reintegration',
    icon: Compass,
    description:
      'The Dropout Clinic is Prayaan’s core clinical intervention targeting out-of-school children across Kishanganj and rural North India. Children who have abandoned school due to seasonal agricultural harvest, family economic distress, or severe learning deficits undergo 6 to 9 months of diagnostic bridge instruction to master basic language comprehension and foundational arithmetic before formal grade-level re-enrollment in state schools.',
    bullets: [
      'House-to-house census identifying out-of-school adolescents aged 7 to 15',
      'Diagnostic academic evaluation to assess learning loss without stigma',
      'Accelerated bridge coursework in Hindi literacy, reading fluency, and foundational numeracy',
      'Direct facilitation of readmission documentation with local Block Education Officers',
    ],
    metric: '1,850+ Out-of-school dropouts successfully reinstated into formal classrooms',
  },
  {
    id: 'vidya-prabha',
    code: 'PRY-EDU-02',
    title: 'Vidya Prabha',
    subtitle: 'Decentralized Village Evening Tutoring Circles & Learning Supplies',
    tag: 'Core Elementary Support',
    icon: BookOpen,
    description:
      'Vidya Prabha provides daily free evening remedial tutoring to first-generation schoolgoers enrolled in rural government primary and middle schools. Because most rural parents are illiterate and unable to support homework, these village circles prevent minor learning gaps from ballooning into permanent school abandonment.',
    bullets: [
      'Decentralized evening learning circles conducted in village community halls and courtyards',
      'Free distribution of NCERT/SCERT textbooks, stationery, school satchels, and uniforms',
      'Continuous monitoring of classroom attendance and quarterly parent-teacher consultations',
      'Merit-cum-means scholarship assistance for students transitioning to secondary grades',
    ],
    metric: '4,200+ Elementary and middle-school students actively tutored daily',
  },
  {
    id: 'school-chale-hum',
    code: 'PRY-MOB-03',
    title: 'School Chale Hum',
    subtitle: 'Panchayat Enrollment Drives, Street Assemblies & Parental Counseling',
    tag: 'Community Mobilization',
    icon: Users,
    description:
      'A seasonal community mobilization campaign held prior to the commencement of each academic year. Field volunteers organize village rallies, street theater, and door-to-door meetings with panchayat elders to persuade marginalized parents that universal schooling is a non-negotiable constitutional right.',
    bullets: [
      'Panchayat-level street petitions and public counseling assemblies with village mukhiyas',
      'On-the-spot documentation camps helping parents secure birth certificates and Aadhaar cards',
      'Identification and documentation of child laborers in local brick kilns and tea stalls',
      'Zero-tolerance community covenants against early childhood school withdrawal',
    ],
    metric: '15,000+ Rural families counseled; near-zero non-enrollment achieved in target clusters',
  },
  {
    id: 'centre-for-competition',
    code: 'PRY-CMP-04',
    title: 'Centre for Competition',
    subtitle: 'Public Service & Competitive Exam Coaching for Rural Aspirants',
    tag: 'Higher Education & Careers',
    icon: Trophy,
    description:
      'Talented youth in rural districts often fail competitive public examinations solely due to lack of expensive commercial coaching and reference material. Prayaan’s Centre for Competition levels the playing field by providing structured exam preparation, curated reference libraries, and mentorship for state subordinate and civil service recruitments.',
    bullets: [
      'Dedicated, electricity-backed study reading rooms and reference libraries in Kishanganj Town',
      'Regular test series, mock interview panels, and general awareness seminars',
      'Specialized mentorship delivered by serving civil servants, college professors, and alumni',
      'Travel and exam fee stipends for candidates from landless agricultural families',
    ],
    metric: '350+ Rural aspirants coached; 14 candidates cleared state subordinate selection boards',
  },
  {
    id: 'model-school',
    code: 'PRY-SCH-05',
    title: 'Model School Project',
    subtitle: 'Exemplary Benchmark Institution (Grades 1 to 12)',
    tag: 'Institutional Proof-of-Concept',
    icon: School,
    description:
      'Serving as an exemplary pedagogical benchmark demonstrating that world-class, holistic, and joyful schooling can be delivered in rural North India. Equipped with smart digital classrooms, physical science laboratories, a curated library, and continuous teacher professional development programs.',
    bullets: [
      'Full state and central curriculum standards enriched with experiential STEM modules',
      'Dedicated smart digital classrooms with audiovisual learning tools',
      'Rigorous continuous professional development and pedagogy workshops for rural educators',
      'Holistic extracurricular emphasis on sports, debates, local folklore, and environmental stewardship',
    ],
    metric: 'Comprehensive K-12 standard benchmark school serving as a demonstration campus',
  },
  {
    id: 'institutional-excellence',
    code: 'PRY-PUB-06',
    title: 'Government School Support & Structural Advocacy',
    subtitle: 'Infrastructure Audits, Sanitation Repairs & Volunteer Teaching Aid',
    tag: 'Public System Strengthening',
    icon: Building,
    description:
      'Public schools are the bedrock of educational equity in India. Rather than creating privatized alternatives, Prayaan actively audits dilapidated government school buildings, submits documentation to district authorities, and mobilizes corporate CSR sponsors to build clean drinking water stations, boundary walls, and separate girls’ toilets.',
    bullets: [
      'Comprehensive structural surveys of rural government primary and middle school buildings',
      'Facilitating corporate CSR partnerships to construct segregated sanitation facilities and borewells',
      'Mobilizing volunteer teaching fellows to bridge temporary staff vacancies in rural schools',
      'Equipping state school classrooms with blackboard resurfacing, desks, and library cupboards',
    ],
    metric: '35+ Government primary and middle schools audited and equipped with basic sanitation',
  },
  {
    id: 'community-centre',
    code: 'PRY-VOC-07',
    title: 'Community Centre & Vocational Livelihood Program',
    subtitle: 'Certified Artisan & Garment Tailoring for Rural Mothers',
    tag: 'Economic Self-Reliance',
    icon: Scissors,
    description:
      'Eradicating child labor requires addressing family economic vulnerability. When mothers achieve stable supplementary incomes, children stay in school. The Prayaan Community Centre provides certified 6-month vocational courses in garment tailoring, artisanal embroidery, and micro-enterprise management.',
    bullets: [
      'Hands-on training using commercial industrial sewing machines and pattern drafting tables',
      'Curriculum integrating technical stitching with UPI digital banking and self-help bookkeeping',
      'Direct market-linkage contracts with regional garment distributors and handloom cooperatives',
      'Dedicated batches for adolescent girls, rural mothers, and differently-abled individuals',
    ],
    metric: '800+ Rural women and differently-abled artisans certified with sustained monthly incomes',
  },
]

export default async function TenantProgramsPage({
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
            <span>Institutional Portfolio & Syllabi</span>
            <span className="text-white/40">•</span>
            <span className="text-amber-200/90 font-sans not-italic font-medium">7 Field Initiatives</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FBF9F5] leading-tight">
            Seven Pillars of Field Intervention
          </h1>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            An integrated continuum of interventions designed to eradicate rural school dropouts, fortify public schools, and provide underprivileged youth with competitive futures.
          </p>
        </div>
      </section>

      {/* 2. Program Syllabi Cards */}
      <section className="py-20 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {detailedPrograms.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.id}
                id={p.id}
                className="scroll-mt-28 bg-[#FBF9F5] border border-[#D8CFC4] rounded-lg p-6 sm:p-10 shadow-sm hover:border-[#1B4332] transition duration-200 space-y-6"
              >
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5DFD7]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded bg-[#112A1F] border border-[#2D5A43] flex items-center justify-center text-amber-100 shadow-sm shrink-0">
                      <Icon className="w-6 h-6 text-[#D9733E]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#112A1F] text-amber-200">
                          {p.code}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#A6481A]">
                          {p.tag}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#112A1F] mt-1">
                        {p.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-xs font-sans font-semibold px-3 py-1.5 rounded bg-[#E1EDE6] text-[#1B4332] border border-[#C2DBCF]">
                      ★ {p.metric}
                    </span>
                  </div>
                </div>

                {/* Subtitle & Mandate */}
                <div className="space-y-3">
                  <p className="font-serif text-sm italic text-[#6E675F]">
                    {p.subtitle}
                  </p>
                  <p className="text-sm text-[#44403C] leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Operational Details */}
                <div className="space-y-3 pt-2 border-t border-[#E5DFD7]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#6E675F] font-sans">
                    Core Operational Protocols:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {p.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs text-[#292524] bg-[#F4EFEA] p-3 rounded border border-[#D8CFC4]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5DFD7]">
                  <div className="text-xs text-[#6E675F] font-serif italic">
                    100% Free Public Access • Fully Funded via Philanthropic Sponsorship
                  </div>
                  <Link
                    href={`${basePath}/contact?type=admission`}
                    className="text-xs font-medium px-4 py-2 rounded bg-[#C45C26] hover:bg-[#A6481A] text-white shadow-sm transition flex items-center gap-1.5"
                  >
                    <span>Inquire or Register for this Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. Institutional Partnership Banner */}
      <section className="py-16 bg-[#112A1F] text-[#FBF9F5] border-t border-[#2D5A43]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Sponsor an Initiative or Adopt a Government Classroom
          </h2>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Corporate foundations, alumni trusts, and philanthropic sponsors can directly fund a village tutoring circle or underwrite sanitation repairs at a government primary school.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`${basePath}/contact?type=sponsor`}
              className="px-6 py-3 rounded bg-[#C45C26] hover:bg-[#A6481A] text-white text-xs font-semibold tracking-wide transition"
            >
              Request Partnership Dossier
            </Link>
            <Link
              href={`${basePath}/contact?type=volunteer`}
              className="px-6 py-3 rounded border border-[#2D5A43] hover:bg-[#1B4332] text-amber-100 font-serif text-xs transition"
            >
              Apply as Volunteer Educator
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
