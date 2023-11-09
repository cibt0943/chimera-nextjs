'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import Login from '@/components/login-button'
import Logout from '@/components/logout-button'

export default function Profile() {
  const { user } = useUser()

  if (user) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Logout />
      </div>
    )
  }
  return (
    <div>
      <Login />
    </div>
  )
}
