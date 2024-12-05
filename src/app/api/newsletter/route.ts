// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
});

const GHOST_URL = 'https://ghost.paymansattari.com';
const GHOST_KEY = process.env.GHOST_ADMIN_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name } = newsletterSchema.parse(body);

    const response = await fetch(`${GHOST_URL}/ghost/api/v5/admin/members/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Ghost ${GHOST_KEY}`,
        'Accept-Version': 'v5.103'
      },
      body: JSON.stringify({
        members: [{
          email,
          name,
          subscribed: true
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors?.[0]?.message || 'Subscription failed');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Subscription failed' },
      { status: 400 }
    );
  }
}