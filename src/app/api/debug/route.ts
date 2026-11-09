import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const diagnostics: Record<string, any> = {
    step: 'start',
  }

  try {
    diagnostics.step = 'importing_payload_config'
    const configModule = await import('@/payload.config')
    const config = configModule.default
    diagnostics.hasConfig = Boolean(config)

    diagnostics.step = 'importing_getPayload'
    const { getPayload } = await import('payload')
    diagnostics.hasGetPayload = typeof getPayload === 'function'

    diagnostics.step = 'calling_getPayload'
    const payload = await getPayload({ config })
    diagnostics.payloadInitialized = Boolean(payload)

    diagnostics.step = 'querying_tenants'
    const tenants = await payload.find({ collection: 'tenants', limit: 1 })
    diagnostics.tenantsCount = tenants.totalDocs

    return NextResponse.json({
      status: 'ok',
      diagnostics,
    })
  } catch (err: any) {
    return NextResponse.json(
      {
        status: 'error',
        failedAtStep: diagnostics.step,
        diagnostics,
        error: {
          name: err?.name,
          message: err?.message,
          stack: err?.stack,
        },
      },
      { status: 200 } // return 200 so we can read the JSON in the browser!
    )
  }
}
