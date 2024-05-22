import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware({
  afterSignInUrl: '/dashboard',
})

export const config = {
  matcher: ['/((?!.*..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
