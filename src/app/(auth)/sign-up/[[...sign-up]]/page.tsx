import { SignUp } from '@clerk/nextjs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expose | Sign Up',
}

export default function Page() {
  return <SignUp path="/sign-up" />
}
