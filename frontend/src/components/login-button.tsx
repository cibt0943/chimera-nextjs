import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LoginButton() {
  const login = '/api/auth/login'

  return (
    <Button asChild>
      <Link href={login}>Log in</Link>
    </Button>
  )
}
