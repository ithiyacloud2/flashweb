import path from 'path'
import type { CollectionConfig } from 'payload'

const staticDir = process.env.VERCEL
  ? path.resolve('/tmp', 'media')
  : path.resolve(process.cwd(), 'public/media')

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Client Content (Prayaan)',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 512,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text (for accessibility)',
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Photo Caption',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Campus & Classrooms', value: 'campus' },
        { label: 'Field Drives & Rallies', value: 'field' },
        { label: 'Competitions & Fests', value: 'events' },
        { label: 'Vocational Training', value: 'vocational' },
      ],
    },
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'tenants',
      label: 'Institute / Tenant',
    },
  ],
}
