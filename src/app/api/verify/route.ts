import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const user = await currentUser()

  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }

  return NextResponse.redirect(new URL(`/${user.username}`, req.url))
}
