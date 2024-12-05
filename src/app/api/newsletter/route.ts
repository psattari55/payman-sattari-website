// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

type ResponseData = {
  message: string;
  received?: unknown;
}

export async function POST(request: NextRequest): Promise<NextResponse<ResponseData>> {
  try {
    const body = await request.json()
    console.log('Received request:', body)
    return NextResponse.json({ 
      message: 'Test successful',
      received: body 
    })
  } catch (error) {
    console.error('Error in newsletter route:', error)
    return NextResponse.json({ 
      message: 'Error processing request' 
    }, { 
      status: 400 
    })
  }
}