import type { CollectionConfig } from 'payload'

export const Programs: CollectionConfig = {
  slug: 'programs',
  admin: {
    group: 'Client Content (Prayaan)',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'tenant', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Program / Initiative Name',
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
      required: true,
      options: [
        { label: 'Core Schooling & Tutoring', value: 'core-education' },
        { label: 'Grassroots Mobilization', value: 'grassroots' },
        { label: 'Dropouts Reintegration', value: 'dropouts' },
        { label: 'Competitive Exam Coaching', value: 'coaching' },
        { label: 'Vocational & Livelihood', value: 'vocational' },
        { label: 'Advocacy & Public Infrastructure', value: 'advocacy' },
      ],
      defaultValue: 'core-education',
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      label: 'Short Summary (Shown in cards)',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Full Detailed Description',
    },
    {
      name: 'targetGroup',
      type: 'text',
      label: 'Target Group / Audience (e.g., Grades 1-12, Out-of-school Youth)',
    },
    {
      name: 'impactMetric',
      type: 'text',
      label: 'Key Impact Metric (e.g., 3,500+ Dropouts Re-enrolled)',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Flagship Initiative', value: 'flagship' },
        { label: 'Upcoming', value: 'upcoming' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order',
    },
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'tenants',
      label: 'Institute / Tenant',
    },
  ],
}
