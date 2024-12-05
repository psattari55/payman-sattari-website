// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import { z } from 'zod'
import jwt from 'jsonwebtoken'

// Validation schema
const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
})

// Split the key into ID and Secret
const [id, secret] = process.env.GHOST_ADMIN_KEY?.split(':') || []

function createToken() {
  const now = Math.floor(Date.now() / 1000)
  const exp = now + 300 // Token expires in 5 minutes

  const header = {
    alg: 'HS256',
    kid: id,
    typ: 'JWT'
  }

  const payload = {
    iat: now,
    exp,
    aud: '/admin/'
  }

  return jwt.sign(payload, Buffer.from(secret, 'hex'), { 
    algorithm: 'HS256',
    header 
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name } = subscribeSchema.parse(body)

    // Create JWT token
    const token = createToken()

    // Make request to Ghost
    const response = await fetch(`${process.env.GHOST_URL}/ghost/api/admin/members/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Ghost ${token}`,
        'Accept-Version': 'v5.0'
      },
      body: JSON.stringify({
        members: [{
          email,
          name,
          subscribed: true,
          labels: ['Website Signup'],
          email_count: 0,
        }]
      })
    })

    const data = await response.json()

    if (!response.ok) {
      // Check if member already exists
      if (response.status === 422) {
        return NextResponse.json(
          { error: 'This email is already subscribed.' },
          { status: 422 }
        )
      }
      throw new Error(data.errors?.[0]?.message || 'Failed to subscribe')
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