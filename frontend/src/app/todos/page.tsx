// import Image from 'next/image'
import { Tasks } from '@/types/tasks'
import styles from './page.module.scss'

const fetchTasks = async (): Promise<Tasks> => {
  const res = await fetch(
    `http://${process.env.API_HOST}:${process.env.API_PORT}/api/v1/tasks`,
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const tasks = await res.json()
  return tasks
}

export default async function Home() {
  const tasks = await fetchTasks()
  return (
    <div className={styles.main}>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  )
}
