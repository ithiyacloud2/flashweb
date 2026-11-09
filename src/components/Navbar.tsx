'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Lock,
  ChevronDown,
  BookOpen,
} from 'lucide-react'

export const Navbar = ({ basePath = '' }: { basePath?: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [programsDropdown, setProgramsDropdown] = useState(false)

  const prefix = basePath ? basePath : ''

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5] border-b border-[#E5DFD7] shadow-sm">
      {/* 1. Dignified Institutional Top Bar */}
      <div className="bg-[#112A1F] text-[#E1EDE6] text-[11px] tracking-wide py-2 px-4 border-b border-[#1B4332]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-serif italic text-amber-200/90 font-medium">
              Registered Society under Societies Registration Act XXI of 1860
            </span>
            <span className="hidden md:inline-block text-white/30">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3 h-3 text-[#D9733E]" />
              Kishanganj, Bihar
            </span>
            <span className="hidden sm:inline-block text-white/30">•</span>
            <span className="hidden sm:flex items-center gap-1.5 text-stone-300">
              <Phone className="w-3 h-3 text-[#D9733E]" />
              (+91) 620 135 2256
            </span>
            <span className="hidden lg:inline-block text-white/30">•</span>
            <span className="hidden lg:flex items-center gap-1.5 text-stone-300">
              <Mail className="w-3 h-3 text-[#D9733E]" />
              contact@prayaan.org
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-amber-200/90 hover:text-white px-2.5 py-0.5 rounded border border-[#2D5A43] bg-[#1B4332]/80 hover:bg-[#1B4332] transition font-medium"
              title="Foundation Staff & Secretariat Login"
            >
              <Lock className="w-3 h-3 text-[#D9733E]" />
              Staff Portal
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Institutional Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Foundation Crest & Typography */}
          <Link href={prefix || '/'} className="flex items-center gap-3.5 group">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-lg bg-[#112A1F] border border-[#2D5A43] flex items-center justify-center text-amber-100 shadow-sm shrink-0">
              <div className="text-center">
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-[#D9733E] mx-auto" />
                <span className="block text-[8px] font-serif uppercase tracking-widest text-amber-200/80 -mt-0.5">
                  1860
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-2xl font-bold tracking-tight text-[#112A1F]">
                  PRAYAAN FOUNDATION
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#6E675F] tracking-wide font-medium">
                Institute for Rural Literacy, Dropout Rehabilitation & Public School Support
              </p>
              <p className="text-[10px] text-[#A6481A] font-serif italic hidden sm:block">
                Kishanganj, Bihar • Established November 2017
              </p>
            </div>
          </Link>

          {/* Editorial Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7 text-[13px] font-medium text-[#292524]">
            <Link
              href={prefix || '/'}
              className="text-[#112A1F] hover:text-[#C45C26] transition font-serif font-bold tracking-wide"
            >
              Home
            </Link>

            <Link
              href={`${prefix}/about`}
              className="hover:text-[#C45C26] transition tracking-wide"
            >
              About the Foundation
            </Link>

            {/* Program Prospectus Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsDropdown(true)}
              onMouseLeave={() => setProgramsDropdown(false)}
            >
              <Link
                href={`${prefix}/programs`}
                className="flex items-center gap-1 hover:text-[#C45C26] transition py-2 tracking-wide"
              >
                <span>Programs Prospectus</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
              </Link>

              {programsDropdown && (
                <div className="absolute top-full left-0 w-80 bg-[#FBF9F5] rounded-lg shadow-xl border border-[#D8CFC4] py-3 px-2 z-50">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-[#6E675F] tracking-widest border-b border-[#E5DFD7] mb-1">
                    Seven Core Initiatives
                  </div>
                  <Link
                    href={`${prefix}/programs#dropout-clinic`}
                    className="block p-2 rounded hover:bg-[#F4EFEA] transition"
                  >
                    <div className="font-serif font-bold text-[#112A1F] text-xs">
                      PRY-01 • Dropout Clinic
                    </div>
                    <div className="text-[11px] text-[#6E675F]">
                      Diagnostic bridge education & formal reinstatement
                    </div>
                  </Link>
                  <Link
                    href={`${prefix}/programs#vidya-prabha`}
                    className="block p-2 rounded hover:bg-[#F4EFEA] transition"
                  >
                    <div className="font-serif font-bold text-[#112A1F] text-xs">
                      PRY-02 • Vidya Prabha
                    </div>
                    <div className="text-[11px] text-[#6E675F]">
                      Rural evening tutoring circles & school supplies
                    </div>
                  </Link>
                  <Link
                    href={`${prefix}/programs#school-chale-hum`}
                    className="block p-2 rounded hover:bg-[#F4EFEA] transition"
                  >
                    <div className="font-serif font-bold text-[#112A1F] text-xs">
                      PRY-03 • School Chale Hum
                    </div>
                    <div className="text-[11px] text-[#6E675F]">
                      Panchayat enrollment rallies & parental counseling
                    </div>
                  </Link>
                  <Link
                    href={`${prefix}/programs#centre-for-competition`}
                    className="block p-2 rounded hover:bg-[#F4EFEA] transition"
                  >
                    <div className="font-serif font-bold text-[#112A1F] text-xs">
                      PRY-04 • Centre for Competition
                    </div>
                    <div className="text-[11px] text-[#6E675F]">
                      Coaching underprivileged youth for public examinations
                    </div>
                  </Link>
                  <Link
                    href={`${prefix}/programs#institutional-excellence`}
                    className="block p-2 rounded hover:bg-[#F4EFEA] transition"
                  >
                    <div className="font-serif font-bold text-[#112A1F] text-xs">
                      PRY-05 • Govt School Infrastructure Support
                    </div>
                    <div className="text-[11px] text-[#6E675F]">
                      Classroom audits & corporate sponsor mobilization
                    </div>
                  </Link>
                  <div className="border-t border-[#E5DFD7] mt-2 pt-2 px-2">
                    <Link
                      href={`${prefix}/programs`}
                      className="block text-center text-xs font-serif italic text-[#C45C26] hover:underline"
                    >
                      View Complete Institutional Syllabus →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href={`${prefix}/news`}
              className="hover:text-[#C45C26] transition tracking-wide"
            >
              Field Dispatches
            </Link>

            <Link
              href={`${prefix}/contact`}
              className="hover:text-[#C45C26] transition tracking-wide"
            >
              Governance & Contact
            </Link>
          </nav>

          {/* Stately Terracotta Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href={`${prefix}/contact?type=admission`}
              className="text-xs font-serif font-medium px-4 py-2.5 rounded border border-[#D8CFC4] text-[#292524] hover:bg-[#F4EFEA] transition"
            >
              Inquire for Admission
            </Link>
            <Link
              href={`${prefix}/contact?type=sponsor`}
              className="text-xs font-medium px-4 py-2.5 rounded bg-[#C45C26] hover:bg-[#A6481A] text-white shadow-sm transition"
            >
              Support a Child’s Education
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded text-[#112A1F] hover:bg-[#F4EFEA]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F4EFEA] border-b border-[#D8CFC4] px-5 pt-3 pb-6 space-y-3">
          <Link
            href={prefix || '/'}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-serif font-bold text-[#112A1F] border-b border-[#E5DFD7]"
          >
            Home
          </Link>
          <Link
            href={`${prefix}/about`}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#292524] border-b border-[#E5DFD7]"
          >
            About the Foundation
          </Link>
          <Link
            href={`${prefix}/programs`}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#292524] border-b border-[#E5DFD7]"
          >
            Programs Prospectus (7 Initiatives)
          </Link>
          <Link
            href={`${prefix}/news`}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#292524] border-b border-[#E5DFD7]"
          >
            Field Dispatches & Reports
          </Link>
          <Link
            href={`${prefix}/contact`}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#292524] border-b border-[#E5DFD7]"
          >
            Governance & Contact
          </Link>
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-xs font-serif font-semibold text-[#A6481A]"
          >
            <Lock className="w-3.5 h-3.5" />
            Foundation Secretariat Portal (/admin)
          </Link>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href={`${prefix}/contact?type=admission`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs font-serif font-medium py-2.5 rounded border border-[#D8CFC4] text-[#112A1F] bg-[#FBF9F5]"
            >
              Inquire for Admission
            </Link>
            <Link
              href={`${prefix}/contact?type=sponsor`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs font-medium py-2.5 rounded bg-[#C45C26] text-white"
            >
              Support a Child’s Education
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
