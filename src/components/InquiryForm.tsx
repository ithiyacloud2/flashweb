'use client'

import React, { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

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
        throw new Error('Failed to submit form. Please try again.')
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
      setError(err?.message || 'Something went wrong. Please reach out to info@prayaan.org directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          Submit an Application or Inquiry
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Whether you want to enroll a student, volunteer as an educator, or partner with us —
          fill out the form below and our Kishanganj desk will respond within 24 hours.
        </p>
      </div>

      {success ? (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-emerald-800 space-y-2">
          <div className="flex items-center gap-2 font-bold text-base">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            Thank you! Your inquiry has been received.
          </div>
          <p className="text-sm text-emerald-700">
            A representative from Prayaan Foundation will review your details and contact you via phone or email shortly.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-3 text-xs font-bold text-emerald-900 underline hover:no-underline"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="rounded-xl bg-rose-50 border border-rose-200 p-4 text-rose-800 flex items-center gap-2 text-sm">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Inquiry Type Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              I Want To: *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { value: 'admission', label: 'Enroll a Student / Child' },
                { value: 'volunteer', label: 'Volunteer / Teach' },
                { value: 'sponsor', label: 'Support / Sponsor a School' },
                { value: 'general', label: 'General NGO Inquiry' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, type: opt.value })}
                  className={`text-xs font-bold py-2.5 px-3 rounded-lg border text-left transition ${
                    formData.type === opt.value
                      ? 'bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-600/20'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
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
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="rahul@example.com"
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Message / Details *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Provide student grade / age, or details on how you would like to collaborate..."
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-black text-sm tracking-wide shadow-md transition flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting Details...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-amber-300" />
                Send Inquiry to Prayaan Desk
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
