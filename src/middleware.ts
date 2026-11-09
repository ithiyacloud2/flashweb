import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const { pathname } = request.nextUrl

  // Ignore API, Payload Admin, static files, and media
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // If already navigating to /sites/..., allow directly
  if (pathname.startsWith('/sites')) {
    return NextResponse.next()
  }

  // Domain-based tenant routing:
  // If request hostname is prayaan.org or subdomain prayaan.*
  const cleanHost = hostname.toLowerCase().split(':')[0]
  if (cleanHost === 'prayaan.org' || cleanHost.startsWith('prayaan.')) {
    const url = request.nextUrl.clone()
    url.pathname = `/sites/prayaan${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
