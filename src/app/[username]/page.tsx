import { UserButton } from '@clerk/nextjs'

export default function Page({ params }: { params: { username: string } }) {
  return (
    <div>
      <h1>Hi {params.username}</h1>
      <UserButton />
    </div>
  )
}