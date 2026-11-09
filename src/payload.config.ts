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

const isPostgres = (process.env.DATABASE_URI || '').startsWith('postgres')

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
  collections: [Tenants, Users, Programs, Posts, Media, Inquiries, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'a583921bfd419b4e138a0b32e6a98762',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: isPostgres
    ? postgresAdapter({
        pool: {
          connectionString: process.env.DATABASE_URI,
        },
      })
    : sqliteAdapter({
        client: {
          url: process.env.DATABASE_URI || 'file:./local.db',
        },
      }),
  sharp,
})
