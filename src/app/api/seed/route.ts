import { NextResponse } from 'next/server'
import { seed } from '@/seed'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const key = searchParams.get('key')
  const secret = process.env.PAYLOAD_SECRET || 'a583921bfd419b4e138a0b32e6a98762'

  // Allow seeding if secret matches or if key is provided
  if (key && key !== secret) {
    return NextResponse.json({ error: 'Unauthorized. Invalid seed key.' }, { status: 401 })
  }

  try {
    const result = await seed()
    return NextResponse.json({
      status: 'success',
      result,
      credentials: {
        adminUrl: '/admin',
        defaultEmail: 'admin@prayaan.org',
        note: 'Default super-admin created if not already existing.',
      },
    })
  } catch (error: any) {
    console.error('Seed API error:', error)
    return NextResponse.json(
      { error: 'Failed to seed database', details: error?.message || String(error) },
      { status: 500 }
    )
  }
}
