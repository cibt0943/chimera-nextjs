import { Tasks } from '@/types/tasks'
import { getAccessToken } from '@auth0/nextjs-auth0'

export const getAllTasks = async (): Promise<Tasks> => {
  const { accessToken } = await getAccessToken()
  const res = await fetch(
    `http://${process.env.API_HOST}:${process.env.API_PORT}/api/v1/tasks`,
    {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const tasks = await res.json()
  return tasks
}
