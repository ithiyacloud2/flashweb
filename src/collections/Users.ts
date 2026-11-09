import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    group: 'Multi-Tenant Engine',
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'role'],
    description: 'Manage Super Admins and client staff editors assigned to specific tenants.',
  },
  auth: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'editor',
      required: true,
      options: [
        { label: 'Super Admin (All Sites)', value: 'super-admin' },
        { label: 'Institute Staff / Editor', value: 'editor' },
        { label: 'Viewer', value: 'viewer' },
      ],
    },
    {
      name: 'tenants',
      type: 'relationship',
      relationTo: 'tenants',
      hasMany: true,
      label: 'Assigned Institutes / Tenants',
      admin: {
        condition: (data) => data?.role !== 'super-admin',
      },
    },
  ],
}
