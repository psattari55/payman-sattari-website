// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const GHOST_URL = 'https://ghost.paymansattari.com'
const GHOST_KEY = process.env.GHOST_ADMIN_KEY

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    const [id, secret] = GHOST_KEY!.split(':')
    const token = Buffer.from(`${id}:${secret}`).toString('base64')

    const response = await fetch(`${GHOST_URL}/ghost/api/admin/members/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Ghost ${token}`,
        'Accept-Version': 'v5.103'
      },
      body: JSON.stringify({
        members: [{
          email,
          name: name || '',
          subscribed: true
        }]
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Ghost API error:', error)
      throw new Error(error.errors?.[0]?.message || 'Subscription failed')
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