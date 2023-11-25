import { NextResponse } from 'next/server'
import { apiClient } from '@/lib/api-client'
import { Tasks } from '@/types/tasks'

export async function getAllTasks(): Promise<Tasks> {
  const res = await apiClient.get(`tasks`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

export async function GET() {
  const tasks = await getAllTasks()
  return NextResponse.json(tasks)
}

export async function POST(request: Request) {
  const req = await request.json()
  return NextResponse.json(req)
}
