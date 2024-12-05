// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const GHOST_URL = 'https://ghost.paymansattari.com'
const GHOST_KEY = process.env.GHOST_ADMIN_KEY

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    const response = await fetch(`${GHOST_URL}/ghost/api/content/members/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Ghost ${GHOST_KEY}`
      },
      body: JSON.stringify({
        email,
        name: name || ''
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