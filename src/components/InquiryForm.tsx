'use client'

import React, { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2, FileText } from 'lucide-react'

export const InquiryForm = ({ defaultType = 'admission' }: { defaultType?: string }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: defaultType,
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Unable to record intake submission. Please email contact@prayaan.org directly.')
      }

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        type: defaultType,
        message: '',
      })
    } catch (err: any) {
      setError(err?.message || 'A network error occurred. Please reach out to contact@prayaan.org.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#FBF9F5] rounded-lg border border-[#D8CFC4] p-8 sm:p-10 shadow-sm">
      <div className="border-b border-[#E5DFD7] pb-6 mb-6">
        <div className="flex items-center gap-2 text-xs font-serif italic text-[#A6481A] mb-1">
          <FileText className="w-3.5 h-3.5" />
          <span>Official Foundation Registry & Intake</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#112A1F] tracking-tight">
          Field Inquiry & Admission Registration
        </h3>
        <p className="text-xs sm:text-sm text-[#6E675F] mt-1.5 leading-relaxed font-sans">
          To refer an out-of-school child, request a government school infrastructure survey, or apply as a
          volunteer teacher, complete this docket. The Kishanganj secretariat reviews submissions weekly.
        </p>
      </div>

      {success ? (
        <div className="rounded border border-[#2D5A43] bg-[#E1EDE6]/50 p-6 text-[#112A1F] space-y-2">
          <div className="flex items-center gap-2 font-serif font-bold text-base">
            <CheckCircle2 className="w-5 h-5 text-[#1B4332]" />
            Intake Docket Logged Successfully
          </div>
          <p className="text-xs sm:text-sm text-[#2D5A43] font-sans leading-relaxed">
            Your inquiry has been assigned to the appropriate field coordinator in Kishanganj. A representative
            will contact you regarding documentation or on-site assessment.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-3 text-xs font-serif font-bold text-[#C45C26] underline hover:no-underline"
          >
            Submit an additional entry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="rounded border border-[#C45C26] bg-[#FDF6F2] p-4 text-[#873913] flex items-center gap-2 text-xs">
              <AlertCircle className="w-4 h-4 text-[#C45C26] shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Nature of Request */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-2 font-sans">
              Nature of Registration / Request *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { value: 'admission', label: 'Enroll Out-of-School / Dropout Child' },
                { value: 'volunteer', label: 'Apply as Teaching Fellow / Volunteer' },
                { value: 'sponsor', label: 'Adopt / Sponsor Govt School Classroom' },
                { value: 'general', label: 'Institutional / Governance Inquiry' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, type: opt.value })}
                  className={`text-xs text-left p-2.5 rounded border transition font-sans ${
                    formData.type === opt.value
                      ? 'bg-[#112A1F] text-[#FBF9F5] border-[#112A1F] font-semibold'
                      : 'border-[#D8CFC4] bg-[#F4EFEA] text-[#292524] hover:bg-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#44403C] mb-1 font-sans">
                Full Name of Applicant / Guardian *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Mohammad Azhar Alam"
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-[#D8CFC4] bg-white focus:outline-none focus:border-[#112A1F] text-[#1C1917]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#44403C] mb-1 font-sans">
                Contact Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-[#D8CFC4] bg-white focus:outline-none focus:border-[#112A1F] text-[#1C1917]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-[#44403C] mb-1 font-sans">
              Email Address (Optional if registering by phone)
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="contact@example.org"
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-[#D8CFC4] bg-white focus:outline-none focus:border-[#112A1F] text-[#1C1917]"
            />
          </div>

          {/* Message / Details */}
          <div>
            <label className="block text-xs font-bold text-[#44403C] mb-1 font-sans">
              Context, Location / Village & Detailed Request *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Provide student age, prior schooling status, village/panchayat, or nature of partnership proposed..."
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-[#D8CFC4] bg-white focus:outline-none focus:border-[#112A1F] text-[#1C1917]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded bg-[#C45C26] hover:bg-[#A6481A] text-white font-medium text-xs sm:text-sm tracking-wide shadow-sm transition flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting to Foundation Secretariat...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Intake Docket</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
