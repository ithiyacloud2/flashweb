import React from 'react'
import Link from 'next/link'
import { Zap, Lock, Code2 } from 'lucide-react'

export const FlashWebFooter = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1 */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md">
                <Zap className="w-4 h-4 fill-slate-950 text-slate-950" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Flash<span className="text-amber-400">Web</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Modern multi-tenant web platform and headless content management engine engineered with Next.js 15, Payload CMS 3.x, and Tailwind CSS.
            </p>
            <div className="text-xs text-slate-500">
              High-performance, edge-first architecture.
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition">
                  Architecture & Stack
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ithiyacloud2/flashweb"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  GitHub Source
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Administration
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/admin"
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5 transition"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Admin CMS Portal
                </Link>
              </li>
              <li className="text-xs text-slate-500">
                Tenant-scoped management
              </li>
              <li className="text-xs text-slate-500">
                Payload 3.x Native Lexical
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FlashWeb Engine. All Rights Reserved.</p>
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
