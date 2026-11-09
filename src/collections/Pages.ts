import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Page Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Page Path Slug (e.g. "home", "about", "programs")',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'SEO Meta Description',
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Page Layout Blocks (Lego System for Any Industry)',
      blocks: [
        {
          slug: 'heroBlock',
          labels: {
            singular: 'Hero Section',
            plural: 'Hero Sections',
          },
          fields: [
            { name: 'badge', type: 'text', label: 'Badge Text (e.g. "National NGO & Education Institute")' },
            { name: 'heading', type: 'text', required: true, label: 'Main Headline' },
            { name: 'subheading', type: 'textarea', label: 'Subheading Description' },
            { name: 'primaryButtonText', type: 'text', defaultValue: 'Explore Programs' },
            { name: 'primaryButtonLink', type: 'text', defaultValue: '/programs' },
            { name: 'secondaryButtonText', type: 'text', defaultValue: 'Get Involved' },
            { name: 'secondaryButtonLink', type: 'text', defaultValue: '/contact' },
          ],
        },
        {
          slug: 'statsBlock',
          labels: {
            singular: 'Impact & Stats Ticker',
            plural: 'Impact & Stats Tickers',
          },
          fields: [
            {
              name: 'stats',
              type: 'array',
              label: 'Metrics & Counters',
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'value', type: 'text', required: true },
                { name: 'subtext', type: 'text' },
              ],
            },
          ],
        },
        {
          slug: 'contentBlock',
          labels: {
            singular: 'Content & Narrative Block',
            plural: 'Content & Narrative Blocks',
          },
          fields: [
            { name: 'sectionTitle', type: 'text' },
            { name: 'heading', type: 'text', required: true },
            { name: 'body', type: 'richText' },
          ],
        },
        {
          slug: 'callToActionBlock',
          labels: {
            singular: 'Call to Action (CTA) Banner',
            plural: 'CTA Banners',
          },
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
            { name: 'buttonText', type: 'text', defaultValue: 'Join Our Mission' },
            { name: 'buttonLink', type: 'text', defaultValue: '/contact' },
          ],
        },
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
