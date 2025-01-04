import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Here you would typically:
    // 1. Validate the input
    // 2. Store in database
    // 3. Send email notification
    // 4. Handle any errors

    // For now, we'll just log and return success
    console.log('Contact form submission:', { name, email, message })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    )
  }
} 