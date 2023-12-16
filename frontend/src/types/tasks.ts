export const TaskStatus = {
  NEW: 0,
  DONE: 1,
  DOING: 2,
  CANCELED: 3,
  PENDING: 4,
} as const
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

export const TaskStatusList = [
  { value: TaskStatus.NEW, label: 'new' },
  { value: TaskStatus.DONE, label: 'done' },
  { value: TaskStatus.DOING, label: 'doing' },
  { value: TaskStatus.CANCELED, label: 'canceled' },
  { value: TaskStatus.PENDING, label: 'pending' },
]

export type TaskStatuses = TaskStatus[]

export type Task = {
  id: number
  status: TaskStatus
  title: string
  memo: string
  dueDate: Date | null
}

export type Tasks = Task[]

export type TaskFormData = {
  status?: TaskStatus
  title?: string
  memo?: string
  dueDate?: Date
}
