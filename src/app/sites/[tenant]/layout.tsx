import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

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
    <div className="min-h-screen flex flex-col justify-between antialiased selection:bg-amber-200 selection:text-slate-900">
      <Navbar basePath={basePath} />
      <main className="flex-grow">{children}</main>
      <Footer basePath={basePath} />
    </div>
  )
}
