import React from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, Check } from 'lucide-react'

const institutionalPrograms = [
  {
    code: 'PRY-REC-01',
    title: 'Dropout Clinic',
    subtitle: 'Diagnostic Bridge Schooling & Formal Reinstatement',
    tag: 'Flagship Rehabilitation',
    mandate:
      'Identifying children who have dropped out of school due to seasonal agricultural migration, domestic labor, or chronic academic distress. The Clinic conducts remedial language and foundational numeracy instruction over 6 to 9 months, preparing each child for seamless, grade-appropriate reintegration into state elementary and middle schools.',
    targetDemographic: 'Out-of-school children and adolescents aged 7 to 15 in Kishanganj and North Bihar.',
    fieldOperations: 'Direct house-to-house census, diagnostic skill assessment, bridge syllabus, and formal readmission paperwork with local block education officers.',
    outcomesSummary: 'Over 1,850 children successfully evaluated, rehabilitated, and reinstated into formal public schools.',
  },
  {
    code: 'PRY-EDU-02',
    title: 'Vidya Prabha',
    subtitle: 'Decentralized Evening Learning Circles & Academic Tutoring',
    tag: 'Core Elementary Support',
    mandate:
      'Providing free daily evening academic tutoring to first-generation learners attending rural government schools. Because most rural parents are illiterate and unable to support homework, Vidya Prabha centres prevent learning gaps before they lead to permanent school abandonment.',
    targetDemographic: 'Primary and middle school students (Grades 1 through 8) in underserved village hamlets.',
    fieldOperations: 'Village learning circles staffed by local educated youth, distribution of textbooks, stationery, school uniforms, and monthly parent-teacher conferences.',
    outcomesSummary: 'Active daily learning support across rural clusters, assisting over 4,200 village children.',
  },
  {
    code: 'PRY-MOB-03',
    title: 'School Chale Hum',
    subtitle: 'Panchayat Enrollment Drives & Parental Awareness Campaigns',
    tag: 'Community Mobilization',
    mandate:
      'Confronting deep-seated parental hesitancy, social stigma, and documentation barriers before the start of each academic session. Prayaan teams conduct intensive village rallies, community meetings with panchayat elders, and door-to-door counseling to guarantee every child reaches the schoolhouse doors.',
    targetDemographic: 'First-generation rural families, agricultural laborers, and marginalized village settlements.',
    fieldOperations: 'Panchayat-level street petitions, documentary film screenings, and on-the-spot documentation assistance for birth certificates and Aadhaar cards.',
    outcomesSummary: 'Engaged over 15,000 rural families, achieving near-zero first-grade non-enrollment in targeted panchayats.',
  },
  {
    code: 'PRY-CMP-04',
    title: 'Centre for Competition',
    subtitle: 'Civil Service & Competitive Examination Mentorship for Rural Youth',
    tag: 'Higher Education & Careers',
    mandate:
      'Eliminating the financial barrier to competitive public examinations. Rural youths with high academic promise frequently lack access to expensive private coaching institutes in Patna or Delhi. The Centre provides free structured guidance, access to reference libraries, and expert mentoring for state and central civil service examinations.',
    targetDemographic: 'Talented, underprivileged rural youth (Ages 16 to 25) aspiring for higher education and government service.',
    fieldOperations: 'Dedicated quiet study facilities in Kishanganj, curated physical libraries, test series, guest lectures by serving civil servants, and exam travel stipends.',
    outcomesSummary: 'Trained over 350 youth with multiple candidates clearing state subordinate and technical exams.',
  },
  {
    code: 'PRY-SCH-05',
    title: 'Model School Project',
    subtitle: 'Exemplary Benchmark Institution (Grades 1 to 12)',
    tag: 'Institutional Benchmark',
    mandate:
      'Serving as an exemplary proof-of-concept campus demonstrating that world-class, holistic, and joyful education can flourish in the rural heartlands. Equipped with digital smart classrooms, science laboratories, a functioning library, and dedicated teacher training.',
    targetDemographic: 'Rural students from primary through senior secondary grades (Grades 1 to 12).',
    fieldOperations: 'Full standard state and central curriculum integration, experiential STEM workshops, arts and sports cultivation, and rigorous teacher-training seminars.',
    outcomesSummary: 'Established benchmark institution serving as a pedagogical demonstration hub for rural educators.',
  },
  {
    code: 'PRY-PUB-06',
    title: 'Government School Support & Advocacy',
    subtitle: 'Structural Audits, Sanitation Upgrades & Supplemental Teaching Aid',
    tag: 'Public System Strengthening',
    mandate:
      'Public schools are the sole lifeline for rural India. Prayaan actively supports the government apparatus by auditing dilapidated school infrastructure, submitting timely policy recommendations to district magistrates, and matching corporate CSR sponsors to build clean drinking water stations and separate girls’ toilets.',
    targetDemographic: 'Deficient government primary and middle schools in Kishanganj and neighboring districts.',
    fieldOperations: 'Civil structural surveys, sponsor matchmaking for infrastructure repairs, and temporary deployment of supplemental volunteer teachers to understaffed schools.',
    outcomesSummary: 'Audited and facilitated basic sanitation and infrastructure upgrades across 35+ state schools.',
  },
  {
    code: 'PRY-VOC-07',
    title: 'Community Centre & Livelihood Program',
    subtitle: 'Formal Vocational Training for Rural Women & Differently-Abled Youth',
    tag: 'Socio-Economic Self-Sufficiency',
    mandate:
      'Addressing the economic root causes of child labor. When mothers achieve financial autonomy, their children remain in school. The Community Centre provides formal 6-month certification training in textile tailoring, apparel design, and artisanal food preservation, linked to urban distribution cooperatives.',
    targetDemographic: 'Unemployed rural women, adolescent girls, and individuals with disabilities.',
    fieldOperations: 'Industrial sewing machine workshops, master-tailor instruction, micro-banking literacy, and market-linkage contracts for regional garment orders.',
    outcomesSummary: 'Graduated over 800 women and differently-abled artisans with sustained monthly household incomes.',
  },
]

export const ProgramsGrid = ({ basePath = '' }: { basePath?: string }) => {
  const prefix = basePath ? basePath : ''

  return (
    <section id="programs" className="py-20 bg-[#F4EFEA] border-y border-[#D8CFC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-[#A6481A]">
            <span>Core Institutional Portfolio</span>
            <span>•</span>
            <span>Syllabus & Operations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#112A1F] tracking-tight">
            Seven Pillars of Field Intervention
          </h2>
          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            Rather than isolated charity, Prayaan Foundation operates an integrated continuum of interventions —
            ranging from identifying out-of-school dropouts to fortifying government classrooms and preparing youth
            for public service examinations.
          </p>
        </div>

        {/* Institutional Program Ledger */}
        <div className="space-y-6">
          {institutionalPrograms.map((prog, index) => (
            <div
              key={index}
              id={prog.code.toLowerCase()}
              className="bg-[#FBF9F5] border border-[#D8CFC4] rounded-lg p-6 sm:p-8 hover:border-[#1B4332] transition duration-200 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Code and Header */}
                <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-[#E5DFD7] pb-4 lg:pb-0 lg:pr-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#112A1F] text-amber-100">
                      {prog.code}
                    </span>
                    <span className="text-[11px] font-sans font-semibold text-[#A6481A] uppercase tracking-wider">
                      {prog.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#112A1F] leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-[#6E675F] font-serif italic">
                    {prog.subtitle}
                  </p>

                  <div className="pt-3">
                    <Link
                      href={`${prefix}/contact?type=admission`}
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#C45C26] hover:text-[#873913] hover:underline"
                    >
                      <span>Inquire regarding this initiative</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Mandate & Methodology */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider font-bold text-[#6E675F] font-sans mb-1">
                      Institutional Mandate & Approach:
                    </h4>
                    <p className="text-sm text-[#292524] leading-relaxed">
                      {prog.mandate}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#E5DFD7] text-xs">
                    <div>
                      <span className="font-bold text-[#112A1F] block mb-0.5">
                        Target Demographics:
                      </span>
                      <span className="text-[#44403C] leading-normal">
                        {prog.targetDemographic}
                      </span>
                    </div>

                    <div>
                      <span className="font-bold text-[#112A1F] block mb-0.5">
                        Field Groundwork & Record:
                      </span>
                      <span className="text-[#1B4332] font-medium leading-normal">
                        {prog.outcomesSummary}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Collaboration Notice */}
        <div className="mt-12 rounded-lg bg-[#112A1F] text-[#FBF9F5] p-6 sm:p-8 border border-[#2D5A43] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="font-serif text-lg font-bold text-amber-100">
              CSR Sponsorship & Public School Adoption
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              Corporate entities, charitable trusts, and government bodies can sponsor specific village learning clusters,
              adopt a government middle school for infrastructure overhaul, or underwrite bridge classrooms.
            </p>
          </div>
          <Link
            href={`${prefix}/contact?type=sponsor`}
            className="shrink-0 px-5 py-3 rounded bg-[#C45C26] hover:bg-[#A6481A] text-white text-xs font-semibold tracking-wide transition"
          >
            Request Institutional Prospectus
          </Link>
        </div>
      </div>
    </section>
  )
}
