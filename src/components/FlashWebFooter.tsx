import React from 'react'
import Link from 'next/link'
import { Zap, Globe, Code2, Lock, ArrowUpRight } from 'lucide-react'

export const FlashWebFooter = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1 */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-slate-950 shadow-md">
                <Zap className="w-5 h-5 fill-slate-950 text-slate-950" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Flash<span className="text-amber-400">Web</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The high-performance, multi-tenant website and headless CMS engine built on Next.js 15,
              Payload CMS 3.x, and Tailwind CSS. Powering modern websites for institutions, businesses,
              and non-profits.
            </p>
            <div className="text-xs text-slate-500">
              Open Source under MIT License • Maintained by Ithiya Technologies.
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Live Client Tenants
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/sites/prayaan"
                  className="hover:text-amber-400 transition flex items-center gap-1.5 font-medium text-slate-300"
                >
                  <span>Prayaan Foundation (NGO)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>
              </li>
              <li className="text-xs text-slate-500">Apex Academy (Coming Soon)</li>
              <li className="text-xs text-slate-500">MediCare Health (Coming Soon)</li>
              <li className="text-xs text-slate-500">VentureScale B2B (Coming Soon)</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Platform & Admin
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/admin" className="text-amber-400 hover:underline font-semibold flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  Payload CMS Portal
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/ithiyacloud2/flashweb"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition">
                  Lego Block System
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition">
                  Multi-Tenant Routing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FlashWeb Platform. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <span>Next.js 15</span>
            <span>•</span>
            <span>Payload CMS 3.x</span>
            <span>•</span>
            <span>Vercel Edge</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
