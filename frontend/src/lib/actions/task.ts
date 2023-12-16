'use server'

import { apiClient } from '@/lib/api-client'
import { TaskFormData } from '@/types/tasks'

export const addTask = async (data: TaskFormData) => {
  const res = await apiClient.post('tasks', {
    json: { task: data },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
}
