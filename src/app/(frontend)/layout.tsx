import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { FlashWebNavbar } from '@/components/FlashWebNavbar'
import { FlashWebFooter } from '@/components/FlashWebFooter'

export const metadata: Metadata = {
  title: 'FlashWeb | Next-Gen Multi-Tenant Website & CMS Engine',
  description:
    'Deploy and manage high-converting, accessible websites for educational institutions, businesses, and clinics on a 100% free serverless stack.',
}

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between antialiased bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950">
        <FlashWebNavbar />
        <main className="flex-grow">{children}</main>
        <FlashWebFooter />
      </body>
    </html>
  )
}
