import ModeToggle from '@/components/mode-toggle'
import Profile from '@/components/profile'

export default function Home() {
  return (
    <main>
      <h1>トップページです。</h1>
      <ModeToggle />
      <Profile />
    </main>
  )
}
