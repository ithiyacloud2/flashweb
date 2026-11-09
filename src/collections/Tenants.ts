import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    group: 'Multi-Tenant Engine',
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'domain', 'isDefault'],
    description: 'Manage client websites, custom domains, branding palettes, and tenant isolation.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Institute / Organization Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Tenant Identifier (Slug)',
    },
    {
      name: 'domain',
      type: 'text',
      label: 'Custom Domain (e.g., prayaan.org)',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline / Motto',
    },
    {
      name: 'primaryColor',
      type: 'text',
      defaultValue: '#0f2942',
      label: 'Brand Primary Color (Hex)',
    },
    {
      name: 'accentColor',
      type: 'text',
      defaultValue: '#d97706',
      label: 'Brand Accent Color (Hex)',
    },
    {
      name: 'contactEmail',
      type: 'email',
      defaultValue: 'info@prayaan.org',
    },
    {
      name: 'contactPhone',
      type: 'text',
      defaultValue: '(+91) 620 135 2256',
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Kishanganj, Bihar, India',
    },
    {
      name: 'isDefault',
      type: 'checkbox',
      defaultValue: false,
      label: 'Default Tenant',
    },
  ],
}
