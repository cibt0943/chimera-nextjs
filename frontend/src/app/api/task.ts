import { Tasks } from '@/types/tasks'

export const getAllTasks = async (): Promise<Tasks> => {
  const res = await fetch(
    `http://${process.env.API_HOST}:${process.env.API_PORT}/api/v1/tasks`,
    { cache: 'no-store' },
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const tasks = await res.json()
  return tasks
}
