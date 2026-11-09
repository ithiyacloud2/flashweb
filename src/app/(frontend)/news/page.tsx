import React from 'react'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight, Tag, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'News & Field Drives | Prayaan Foundation',
  description:
    'Read the latest field updates, School Chale Hum rallies, academic coaching fests, and vocational batch inaugurations from Prayaan Foundation.',
}

const articles = [
  {
    title: '‘School Chale Hum’ Program at Government Middle School Dingsole, Majgama',
    slug: 'school-chale-hum-dingsole-majgama',
    category: 'Field Drive & Rally',
    date: 'March 15, 2026',
    location: 'GMS Dingsole, Majgama, Kishanganj',
    excerpt:
      'Prayaan field volunteers launched an intensive village rally across Majgama panchayat. Over 200 out-of-school children were identified, provided with free learning kits, and admitted into Government Middle School Dingsole with immediate administrative clearances.',
    details:
      'The rally saw participation from village elders, local ward members, and parents. Field coordinators organized on-the-spot documentation assistance to resolve missing birth certificates and Aadhaar linkages that historically prevented these children from being admitted.',
  },
  {
    title: 'Annual Inter-Coaching Center Fest & Academic Scholarship Awards',
    slug: 'inter-coaching-center-fest',
    category: 'Academic Competition',
    date: 'May 20, 2026',
    location: 'Prayaan Central Hall, Kishanganj',
    excerpt:
      'Over 300 bright students from 8 decentralized Prayaan rural tuition centers converged in Kishanganj for the annual Inter-Coaching Center Fest. Competitions in mathematical reasoning, science models, and extempore debates were conducted.',
    details:
      'Twenty-four students were awarded merit-cum-means scholarships covering their complete secondary schooling textbooks, tuition fees, and bicycles for transportation to distant high schools.',
  },
  {
    title: 'New Vocational Batch Inaugurated at Prayaan Community Centre',
    slug: 'vocational-batch-inauguration',
    category: 'Livelihood & Women Empowerment',
    date: 'July 10, 2026',
    location: 'Community Centre, Kishanganj',
    excerpt:
      'A fresh cohort of 50 rural women and disabled youth began their 6-month certified vocational course in garment stitching and artisan crafts, equipped with modern industrial sewing machines provided by philanthropic sponsors.',
    details:
      'The curriculum integrates technical tailoring with financial literacy, UPI digital banking, and market linkage with regional apparel distributors.',
  },
  {
    title: 'Independence Day Cleanliness & Literacy Rally',
    slug: 'independence-day-rally',
    category: 'Community Campaign',
    date: 'August 15, 2026',
    location: 'Kishanganj Town & Rural Hubs',
    excerpt:
      'Prayaan students, alumni, and volunteers commemorated Independence Day with a massive 5-kilometer march emphasizing education as the true vehicle of national independence.',
    details:
      'Students performed street plays on the evils of child marriage and the transformative power of sending young girls to high school and college.',
  },
]

export default function NewsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            FIELD UPDATES & MEDIA
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 text-white">
            Ground Realities & Campaign Reports
          </h1>
          <p className="text-slate-300 text-lg mt-4 leading-relaxed font-normal">
            Follow our active grassroots drives, coaching celebrations, and community initiatives across North India.
          </p>
        </div>
      </section>

      {/* Articles Feed */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art, idx) => (
              <article
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {art.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {art.date}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-blue-700 transition">
                    {art.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {art.excerpt}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                    {art.details}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {art.location}
                  </span>
                  <Link
                    href="/contact"
                    className="font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                  >
                    <span>Get Involved</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
