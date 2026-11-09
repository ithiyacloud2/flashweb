'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Lock,
  Heart,
  ChevronDown,
} from 'lucide-react'

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [programsDropdown, setProgramsDropdown] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Bar with Contact Info & NGO Badge */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              National Educational NGO • Reg. Societies Act
            </span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Kishanganj, Bihar
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              (+91) 620 135 2256
            </span>
            <span className="hidden lg:flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              info@prayaan.org
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 transition"
              title="Prayaan Staff & Editor Portal"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              Staff CMS Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Institute Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-900 via-indigo-900 to-amber-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition">
              <GraduationCap className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-900">
                  PRAYAAN
                </span>
                <span className="text-xs uppercase tracking-widest font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                  Foundation
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Education & Community Empowerment
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-700 text-sm">
            <Link
              href="/"
              className="hover:text-blue-700 transition font-semibold"
            >
              Home
            </Link>

            <Link href="/about" className="hover:text-blue-700 transition">
              About Us
            </Link>

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsDropdown(true)}
              onMouseLeave={() => setProgramsDropdown(false)}
            >
              <Link
                href="/programs"
                className="flex items-center gap-1 hover:text-blue-700 transition py-2"
              >
                <span>Programs & Initiatives</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {programsDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-3 px-2 z-50">
                  <Link
                    href="/programs#vidya-prabha"
                    className="block p-2 rounded-lg hover:bg-slate-50 transition"
                  >
                    <div className="font-semibold text-slate-900 text-xs">
                      Vidya Prabha
                    </div>
                    <div className="text-xs text-slate-500">
                      Tutoring, scholarships & school kits
                    </div>
                  </Link>
                  <Link
                    href="/programs#dropout-clinic"
                    className="block p-2 rounded-lg hover:bg-slate-50 transition"
                  >
                    <div className="font-semibold text-slate-900 text-xs">
                      Dropout Clinic
                    </div>
                    <div className="text-xs text-slate-500">
                      Bridge education & school return
                    </div>
                  </Link>
                  <Link
                    href="/programs#school-chale-hum"
                    className="block p-2 rounded-lg hover:bg-slate-50 transition"
                  >
                    <div className="font-semibold text-slate-900 text-xs">
                      School Chale Hum
                    </div>
                    <div className="text-xs text-slate-500">
                      Grassroots student enrollment rallies
                    </div>
                  </Link>
                  <Link
                    href="/programs#centre-for-competition"
                    className="block p-2 rounded-lg hover:bg-slate-50 transition"
                  >
                    <div className="font-semibold text-slate-900 text-xs">
                      Centre for Competition
                    </div>
                    <div className="text-xs text-slate-500">
                      Coaching youth for competitive exams
                    </div>
                  </Link>
                  <div className="border-t border-slate-100 mt-2 pt-2">
                    <Link
                      href="/programs"
                      className="block p-2 text-center text-xs font-bold text-blue-600 hover:text-blue-800"
                    >
                      View All 7 Initiatives →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/news" className="hover:text-blue-700 transition">
              News & Drives
            </Link>

            <Link href="/contact" className="hover:text-blue-700 transition">
              Contact & Inquiries
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact?type=admission"
              className="text-xs font-bold px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
            >
              Enroll a Child
            </Link>
            <Link
              href="/contact?type=volunteer"
              className="text-xs font-bold px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-700 to-indigo-800 text-white hover:from-blue-800 hover:to-indigo-900 shadow-md transition flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              Join / Volunteer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100"
          >
            About Us
          </Link>
          <Link
            href="/programs"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100"
          >
            Programs & Initiatives
          </Link>
          <Link
            href="/news"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100"
          >
            News & Field Drives
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100"
          >
            Contact & Inquiries
          </Link>
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-base font-bold text-amber-700"
          >
            <Lock className="w-4 h-4" />
            Staff CMS Portal (/admin)
          </Link>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/contact?type=admission"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-sm font-bold py-2.5 rounded-lg border border-slate-300 text-slate-800"
            >
              Enroll a Child
            </Link>
            <Link
              href="/contact?type=volunteer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-sm font-bold py-2.5 rounded-lg bg-blue-700 text-white"
            >
              Volunteer / Support Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
