export const TaskStatus = {
  NEW: 0,
  DONE: 1,
  DOING: 2,
  CANCELED: 3,
  PENDING: 4,
} as const
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

export type TaskStatuses = TaskStatus[]

export type Task = {
  id: number
  status: TaskStatus
  title: string
  memo: string
  dueDate: Date | null
}

export type Tasks = Task[]

export type TaskEdit = {
  id: number
  status?: TaskStatus
  title?: string
  memo?: string
  dueDate?: Date | null
}

export type TaskFormErrorMessages = {
  status?: string
  title?: string
  memo?: string
  dueDate?: string
}
