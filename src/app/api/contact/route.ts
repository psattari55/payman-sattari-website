// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { RateLimiter } from 'limiter'
import { z } from 'zod'

// Rate limiter: 5 submissions per IP per hour
const limiter = new RateLimiter({
  tokensPerInterval: 5,
  interval: 'hour',
  fireImmediately: true,
})

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  institution: z.string().optional(),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'contact@oreliosattari.com',
    pass: process.env.EMAIL_PASSWORD // You'll need to set this in your Vercel environment variables
  }
})

export async function POST(request: Request) {
  try {
    // Check rate limit
    const remainingRequests = await limiter.removeTokens(1)
    if (remainingRequests < 0) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Prepare email content
    const mailOptions = {
      from: 'contact@oreliosattari.com',
      to: 'contact@oreliosattari.com',
      subject: `Research Contact Form: ${validatedData.subject}`,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Institution: ${validatedData.institution || 'Not provided'}
Subject: ${validatedData.subject}

Message:
${validatedData.message}
      `,
      html: `
<h2>New Research Contact Form Submission</h2>
<p><strong>Name:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Institution:</strong> ${validatedData.institution || 'Not provided'}</p>
<p><strong>Subject:</strong> ${validatedData.subject}</p>
<h3>Message:</h3>
<p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}