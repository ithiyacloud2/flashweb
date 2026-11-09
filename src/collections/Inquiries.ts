import type { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  admin: {
    group: 'Inquiries & Admissions',
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'type', 'status', 'tenant', 'createdAt'],
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone / WhatsApp Number',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Student Admission / Enrollment', value: 'admission' },
        { label: 'Volunteer for Teaching / Drives', value: 'volunteer' },
        { label: 'Support / Sponsor a Government School', value: 'sponsor' },
        { label: 'General Inquiry / Partner', value: 'general' },
      ],
      defaultValue: 'general',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Inquiry / Application Details',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New / Unread', value: 'new' },
        { label: 'In Review', value: 'review' },
        { label: 'Followed Up / Enrolled', value: 'resolved' },
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
