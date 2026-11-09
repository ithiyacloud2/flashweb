import { NextResponse } from 'next/server'
import pg from 'pg'

export const dynamic = 'force-dynamic'

export async function GET() {
  const rawUri =
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URI ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    (process.env.PGHOST && process.env.PGUSER && process.env.PGPASSWORD
      ? `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST_UNPOOLED || process.env.PGHOST}/${process.env.PGDATABASE || 'neondb'}?sslmode=require`
      : '')

  let cleanUri = rawUri.trim()
  cleanUri = cleanUri.replace(/^(DATABASE_URI|DATABASE_URL_UNPOOLED|DATABASE_URL|POSTGRES_URL|POSTGRES_PRISMA_URL)=/, '').trim()
  cleanUri = cleanUri.replace(/^["']|["']$/g, '')

  if (cleanUri.includes('-pooler.')) {
    cleanUri = cleanUri.replace('-pooler.', '.')
  }
  cleanUri = cleanUri.replace(/([?&])channel_binding=[^&]*(&|$)/, '$1')
  cleanUri = cleanUri.replace(/[?&]$/, '')

  const isPostgres = cleanUri.startsWith('postgres')
  const hasSecret = Boolean(process.env.PAYLOAD_SECRET)

  const maskedUri = cleanUri
    ? cleanUri.replace(/:([^:@]+)@/, ':****@')
    : 'NOT_SET'

  let dbStatus = 'untested'
  let dbError = null

  if (isPostgres) {
    try {
      const pool = new pg.Pool({
        connectionString: cleanUri,
        ssl: cleanUri.includes('neon.tech') || cleanUri.includes('sslmode=require')
          ? { rejectUnauthorized: false }
          : undefined,
        connectionTimeoutMillis: 5000,
      })

      const res = await pool.query('SELECT current_database(), current_user, version()')
      dbStatus = 'connected'
      await pool.end()
    } catch (err: any) {
      dbStatus = 'connection_failed'
      dbError = err.message || String(err)
    }
  } else {
    dbStatus = 'not_postgres'
  }

  return NextResponse.json({
    status: dbStatus === 'connected' ? 'ok' : 'error',
    env: {
      hasDatabaseUri: Boolean(cleanUri),
      databaseType: isPostgres ? 'postgresql' : 'sqlite_or_empty',
      maskedUri,
      hasPayloadSecret: hasSecret,
      nodeVersion: process.version,
    },
    database: {
      status: dbStatus,
      error: dbError,
    },
  })
}
