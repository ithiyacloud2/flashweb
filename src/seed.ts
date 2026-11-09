import { getPayload } from 'payload'
import config from './payload.config'

export async function seed() {
  console.log('Seeding initial data for Prayaan Foundation...')
  const payload = await getPayload({ config })

  // 1. Check or Create Default Tenant
  const existingTenants = await payload.find({
    collection: 'tenants',
    where: {
      slug: {
        equals: 'prayaan',
      },
    },
  })

  let tenantId: string | number
  if (existingTenants.docs.length > 0) {
    tenantId = existingTenants.docs[0].id
    console.log('Found existing Prayaan tenant ID:', tenantId)
  } else {
    const tenant = await payload.create({
      collection: 'tenants',
      data: {
        name: 'Prayaan Foundation',
        slug: 'prayaan',
        domain: 'prayaan.org',
        tagline: 'Social and economic empowerment through education, community welfare, and grassroots development',
        primaryColor: '#0f2942',
        accentColor: '#d97706',
        contactEmail: 'info@prayaan.org',
        contactPhone: '(+91) 620 135 2256',
        location: 'Kishanganj, Bihar, India',
        isDefault: true,
      },
    })
    tenantId = tenant.id
    console.log('Created Prayaan tenant ID:', tenantId)
  }

  // 2. Check or Create Super Admin User
  const existingUsers = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: 'admin@prayaan.org',
      },
    },
  })

  if (existingUsers.docs.length === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@prayaan.org',
        password: 'PrayaanAdmin2026!',
        name: 'Prayaan Lead Administrator',
        role: 'super-admin',
      },
    })
    console.log('Created default admin: admin@prayaan.org')
  }

  // 3. Seed Core Programs
  const programs = [
    {
      title: 'Vidya Prabha',
      slug: 'vidya-prabha',
      category: 'core-education' as const,
      summary: 'Comprehensive educational support, scholarships, and free tutoring for underprivileged children across rural North India.',
      targetGroup: 'Grades 1 to 10 Students',
      impactMetric: '4,200+ Students Supported',
      status: 'flagship' as const,
      order: 1,
    },
    {
      title: 'School Chale Hum',
      slug: 'school-chale-hum',
      category: 'grassroots' as const,
      summary: 'Grassroots community enrollment drives and door-to-door counseling motivating marginalized parents to send their children to school.',
      targetGroup: 'Rural & Tribal Communities',
      impactMetric: '15,000+ Families Reached',
      status: 'flagship' as const,
      order: 2,
    },
    {
      title: 'Dropout Clinic',
      slug: 'dropout-clinic',
      category: 'dropouts' as const,
      summary: 'Specialized bridge schooling and counseling centers identifying school dropouts and successfully reinstating them into formal education.',
      targetGroup: 'Out-of-school Children & Adolescents',
      impactMetric: '1,850+ Dropouts Re-enrolled',
      status: 'flagship' as const,
      order: 3,
    },
    {
      title: 'Centre for Competition',
      slug: 'centre-for-competition',
      category: 'coaching' as const,
      summary: 'Mentorship, library resources, and dedicated coaching preparing talented underprivileged youth for competitive exams and government services.',
      targetGroup: 'Youth & Aspirants (Ages 16-25)',
      impactMetric: '350+ Exam Aspirants Trained',
      status: 'active' as const,
      order: 4,
    },
    {
      title: 'Model School Project',
      slug: 'model-school',
      category: 'core-education' as const,
      summary: 'Exemplary benchmark schools from Grades 1 to 12 equipped with modern smart classrooms, computer labs, and holistic pedagogy.',
      targetGroup: 'Grades 1 to 12',
      impactMetric: 'K-12 Full Standard Curriculum',
      status: 'active' as const,
      order: 5,
    },
    {
      title: 'Institutional Excellence & Public School Support',
      slug: 'institutional-excellence',
      category: 'advocacy' as const,
      summary: 'Auditing government school infrastructure, mobilizing sponsors for clean drinking water/toilets/libraries, and providing HR teaching aid.',
      targetGroup: 'Government Primary & Middle Schools',
      impactMetric: '35+ Government Schools Upgraded',
      status: 'active' as const,
      order: 6,
    },
    {
      title: 'Community Centre & Vocational Empowerment',
      slug: 'community-centre',
      category: 'vocational' as const,
      summary: 'Livelihood skill training in tailoring, food craft, and handicraft for unemployed youth, women, and persons with disabilities.',
      targetGroup: 'Unemployed Women & Persons with Disabilities',
      impactMetric: '800+ Women Economically Empowered',
      status: 'active' as const,
      order: 7,
    },
  ]

  for (const prog of programs) {
    const existing = await payload.find({
      collection: 'programs',
      where: {
        slug: {
          equals: prog.slug,
        },
      },
    })
    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'programs',
        data: {
          ...prog,
          tenant: tenantId,
        },
      })
      console.log(`Seeded program: ${prog.title}`)
    }
  }

  // 4. Seed Posts / Drives
  const posts = [
    {
      title: 'School Chale Hum Program at Government Middle School Dingsole, Majgama',
      slug: 'school-chale-hum-dingsole-majgama',
      category: 'campaign' as const,
      excerpt: 'Prayaan field teams conducted an intensive enrollment rally and distributed educational kits to over 200 children at GMS Dingsole.',
      publishedAt: new Date('2026-03-15').toISOString(),
      location: 'Dingsole, Majgama, Kishanganj',
    },
    {
      title: 'Annual Inter-Coaching Center Fest & Academic Scholarship Awards',
      slug: 'inter-coaching-center-fest',
      category: 'event' as const,
      excerpt: 'Students from 8 rural coaching centers gathered for a day of academic quizzes, cultural showcases, and merit scholarship awards.',
      publishedAt: new Date('2026-05-20').toISOString(),
      location: 'Prayaan Central Hall, Kishanganj',
    },
    {
      title: 'New Vocational Batch Inaugurated at Prayaan Community Centre',
      slug: 'vocational-batch-inauguration',
      category: 'story' as const,
      excerpt: '50 women commenced their 6-month certification course in garment tailoring and small enterprise management.',
      publishedAt: new Date('2026-07-10').toISOString(),
      location: 'Community Centre, Kishanganj',
    },
  ]

  for (const post of posts) {
    const existing = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: post.slug,
        },
      },
    })
    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'posts',
        data: {
          ...post,
          tenant: tenantId,
        },
      })
      console.log(`Seeded post: ${post.title}`)
    }
  }

  console.log('Seeding completed successfully!')
  process.exit(0)
}

if (process.argv[1]?.endsWith('seed.ts') || process.argv[1]?.endsWith('seed.js')) {
  seed().catch((err) => {
    console.error('Seed error:', err)
    process.exit(1)
  })
}
