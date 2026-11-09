import React from 'react'
import { InquiryForm } from '@/components/InquiryForm'
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tenant: string }>
}) {
  const resolved = await params
  return {
    title: `Contact & Admissions | ${resolved.tenant === 'prayaan' ? 'Prayaan Foundation' : resolved.tenant}`,
    description:
      'Contact Prayaan Foundation in Kishanganj, Bihar. Enroll a student, apply as a volunteer teacher, or sponsor a government school project.',
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
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            CONNECT WITH PRAYAAN
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 text-white">
            We Are Here to Listen & Partner
          </h1>
          <p className="text-slate-300 text-lg mt-4 leading-relaxed font-normal">
            Reach out to our central desk in Kishanganj, Bihar. Whether you want to enroll a child,
            volunteer your teaching expertise, or sponsor a rural school drive.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  Headquarters & Information
                </h3>

                <div className="space-y-5 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                        Office Location
                      </div>
                      <p className="mt-0.5 text-slate-700">
                        Prayaan Foundation Central Office<br />
                        Kishanganj, Bihar, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                        Helpline & WhatsApp
                      </div>
                      <p className="mt-0.5 text-slate-700 font-semibold">
                        (+91) 620 135 2256
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                        Official Email
                      </div>
                      <p className="mt-0.5 text-slate-700 font-semibold">
                        info@prayaan.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                        Operating Hours
                      </div>
                      <p className="mt-0.5 text-slate-700">
                        Monday – Saturday: 8:00 AM – 6:00 PM<br />
                        Sunday: Closed (Field drives only)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="p-6 rounded-2xl bg-slate-900 text-slate-300 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  National Non-Governmental Organization
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  PRAYAAN Foundation is duly registered under the Societies Registration Act (Nov 2017).
                  All donations and corporate sponsorships are tax-exempt and rigorously audited.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <InquiryForm defaultType={defaultType} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
