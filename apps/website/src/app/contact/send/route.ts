import { NextResponse } from 'next/server'

const WEBHOOK_URL = process.env.WEBHOOK_URL || ''

const getBody = ({ name, email, message }: Record<string, string>) => {
  return JSON.stringify({
    username: 'Website Contact',
    content: 'New message sent from palladians.xyz.',
    embeds: [
      {
        author: {
          name: name
        },
        title: 'Website Contact',
        fields: [
          {
            name: 'Email',
            value: email
          },
          {
            name: 'Message',
            value: message
          }
        ]
      }
    ]
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: getBody({
        name: body.name,
        email: body.email,
        message: body.message
      })
    })
    return NextResponse.json({ ok: true })
  } catch (error: any) {
    return NextResponse.json({ error })
  }
}
