import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LogoutButton() {
  const logout = '/api/auth/logout'

  return (
    <Button asChild>
      <Link href={logout}>Log out</Link>
    </Button>
  )
}
