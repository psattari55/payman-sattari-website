// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

type ResponseData = {
  success?: boolean;
  error?: string;
}

const GHOST_URL = 'https://ghost.paymansattari.com'
const GHOST_KEY = process.env.GHOST_ADMIN_KEY

export async function POST(request: NextRequest): Promise<NextResponse<ResponseData>> {
  try {
    const body = await request.json()
    const { email, name } = body

    // Split the admin key into ID and Secret
    const [id, secret] = GHOST_KEY!.split(':')
    
    // Create the token
    const token = Buffer.from(`${id}:${secret}`).toString('base64')

    const response = await fetch(`${GHOST_URL}/ghost/api/v5.103/admin/members/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Ghost ${token}`,
        'Accept': 'application/json',
        'User-Agent': 'paymansattari.com'
      },
      body: JSON.stringify({
        members: [{
          email,
          name: name || '',
          subscribed: true
        }]
      })
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Ghost API error:', data)
      throw new Error(data.errors?.[0]?.message || 'Subscription failed')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Subscription failed' },
      { status: 400 }
    )
  }
}