import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Prayaan Foundation | Modern Educational & Community Platform',
  description:
    'National educational NGO founded in November 2017, registered under the Societies Registration Act. Empowering underprivileged youth, eliminating dropouts, and upgrading schools across North India.',
  keywords: [
    'Prayaan Foundation',
    'Education NGO India',
    'Dropout Clinic',
    'Vidya Prabha',
    'Kishanganj Bihar NGO',
    'School Chale Hum',
    'Government School Development',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between antialiased selection:bg-amber-200 selection:text-slate-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
