import { SignIn } from '@clerk/nextjs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expose | Sign In',
}

export default function Page() {
  return <SignIn path="/sign-in" />
}
