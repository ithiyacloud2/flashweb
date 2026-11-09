import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Article / Event Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
    },
    {
      name: 'category',
      type: 'select',
      defaultValue: 'news',
      options: [
        { label: 'Field Drive / Campaign', value: 'campaign' },
        { label: 'Event / Celebration', value: 'event' },
        { label: 'Press & Announcement', value: 'news' },
        { label: 'Impact Story', value: 'story' },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published Date',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Short Excerpt',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Event Location (e.g. Majgama, Kishanganj)',
    },
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'tenants',
      label: 'Institute / Tenant',
    },
  ],
}
