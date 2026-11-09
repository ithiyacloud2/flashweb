'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Zap,
  Layers,
  Globe,
  Lock,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react'

export const FlashWebNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition">
              <Zap className="w-6 h-6 fill-slate-950 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white">
                  Flash<span className="text-amber-400">Web</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-900/60 text-blue-300 border border-blue-700/50">
                  Multi-Tenant CMS
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                Next-Gen Website Platform
              </p>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#features" className="hover:text-white transition">
              Platform Features
            </a>
            <a href="#architecture" className="hover:text-white transition">
              Architecture
            </a>
            <a href="#tenants" className="hover:text-amber-400 transition flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Clients & Tenants
            </a>
            <a href="#free-tier" className="hover:text-white transition">
              $0 Free Tier
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/sites/prayaan"
              className="text-xs font-bold px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 hover:text-amber-200 transition flex items-center gap-1.5"
            >
              <span>View Client #1 (Prayaan)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/admin"
              className="text-xs font-black px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 shadow-md transition flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              Staff CMS Portal
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-200"
          >
            Platform Features
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-200"
          >
            Architecture
          </a>
          <a
            href="#tenants"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-amber-400"
          >
            Live Clients & Tenants
          </a>
          <a
            href="#free-tier"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-200"
          >
            $0 Free Tier
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/sites/prayaan"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs font-bold py-2.5 rounded-xl bg-slate-800 text-amber-300 border border-slate-700"
            >
              View Client #1 (Prayaan Site) →
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs font-black py-2.5 rounded-xl bg-amber-500 text-slate-950"
            >
              Staff CMS Portal (/admin)
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
