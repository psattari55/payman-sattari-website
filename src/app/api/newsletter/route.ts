// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name } = newsletterSchema.parse(body);

    // API endpoint for Ghost v5
    const ghostUrl = 'https://ghost.paymansattari.com/ghost/api/v5/admin/members/';
    
    // Authorization key from your environment variable
    const adminKey = process.env.GHOST_ADMIN_KEY;
    if (!adminKey) {
      throw new Error('Ghost Admin Key not configured');
    }

    // Split the key into ID and Secret
    const [id, secret] = adminKey.split(':');
    
    // Create the authentication token
    const token = Buffer.from(`${id}:${secret}`).toString('base64');

    const response = await fetch(ghostUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Ghost ${token}`,
        'Accept-Version': 'v5.0'
      },
      body: JSON.stringify({
        members: [{
          email,
          name: name || undefined,
          subscribed: true,
          newsletters: [{ id: 'default-newsletter' }]
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Ghost API error:', data);
      throw new Error(data.errors?.[0]?.message || 'Failed to subscribe');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Subscription failed',
        details: error
      }, 
      { status: 400 }
    );
  }
}