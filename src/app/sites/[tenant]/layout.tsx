import React from 'react'
import type { Metadata } from 'next'
import '@/app/(frontend)/globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Prayaan Foundation | Rural Education & Dropout Rehabilitation, Kishanganj, Bihar',
  description:
    'Registered non-profit society (est. Nov 2017) working on school dropout rehabilitation, free remedial bridge schooling, government school infrastructure audits, and youth competitive examination coaching across rural North India.',
}

export default async function TenantLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ tenant: string }>
}) {
  const resolved = await params
  const tenantSlug = resolved.tenant

  // basePath for navigation within tenant
  const basePath = `/sites/${tenantSlug}`

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between antialiased bg-[#FBF9F5] text-[#292524] selection:bg-amber-200 selection:text-slate-900">
        <Navbar basePath={basePath} />
        <main className="flex-grow">{children}</main>
        <Footer basePath={basePath} />
      </body>
    </html>
  )
}
