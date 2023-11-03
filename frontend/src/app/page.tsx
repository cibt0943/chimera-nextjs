import styles from './page.module.scss'
import { ModeToggle } from '@/components/ui/mode-toggle'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>トップページです。</h1>
      <ModeToggle />
    </main>
  )
}
