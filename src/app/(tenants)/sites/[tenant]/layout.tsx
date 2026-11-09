import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default async function TenantSiteLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ tenant: string }>
}) {
  const resolved = await params
  const tenantSlug = resolved.tenant
  const basePath = `/sites/${tenantSlug}`

  return (
    <>
      <Navbar basePath={basePath} />
      <main className="flex-grow">{children}</main>
      <Footer basePath={basePath} />
    </>
  )
}
