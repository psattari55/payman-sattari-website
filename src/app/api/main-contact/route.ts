// src/app/api/main-contact/route.ts
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
  inquiryType: z.enum(['general', 'research', 'speaking', 'media', 'newsletter']),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'contact@paymansattari.com',
    pass: process.env.EMAIL_PASSWORD
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

    // Prepare email content with inquiry type highlight
    const mailOptions = {
      from: 'contact@paymansattari.com',
      to: 'contact@paymansattari.com',
      subject: `[${validatedData.inquiryType.toUpperCase()}] ${validatedData.subject}`,
      text: `
Type: ${validatedData.inquiryType}
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Type:</strong> ${validatedData.inquiryType}</p>
<p><strong>Name:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
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