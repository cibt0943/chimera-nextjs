'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

export default function Profile() {
  const { user } = useUser()

  if (!user) return

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}
