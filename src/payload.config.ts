import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

import { Tenants } from './collections/Tenants'
import { Users } from './collections/Users'
import { Programs } from './collections/Programs'
import { Posts } from './collections/Posts'
import { Media } from './collections/Media'
import { Inquiries } from './collections/Inquiries'
import { Pages } from './collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const rawUri =
  process.env.DATABASE_URI ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  ''

let cleanUri = rawUri.trim()
cleanUri = cleanUri.replace(/^(DATABASE_URI|DATABASE_URL|POSTGRES_URL)=/, '').trim()
cleanUri = cleanUri.replace(/^["']|["']$/g, '')

const isPostgres = cleanUri.startsWith('postgres')

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '• FlashWeb Multi-Tenant CMS',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [Tenants, Users, Programs, Posts, Media, Inquiries, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'a583921bfd419b4e138a0b32e6a98762',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: isPostgres
    ? postgresAdapter({
        pool: {
          connectionString: cleanUri,
          ssl: cleanUri.includes('neon.tech') || cleanUri.includes('sslmode=require')
            ? { rejectUnauthorized: false }
            : undefined,
        },
      })
    : sqliteAdapter({
        client: {
          url: cleanUri || 'file:./local.db',
        },
      }),
  sharp,
})
