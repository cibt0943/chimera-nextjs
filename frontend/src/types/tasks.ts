import * as z from 'zod'

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
  dueDate: Date | undefined
}

export type Tasks = Task[]

export type TaskFormData = {
  id?: number
  status?: TaskStatus
  title?: string
  memo?: string
  dueDate?: Date | undefined
}

export const NewTask: Task = {
  id: -1,
  title: '',
  memo: '',
  dueDate: undefined,
  status: TaskStatus.NEW,
}

export const TaskSchema = z.object({
  title: z.string().min(1, { message: '必須項目です' }).max(255, {
    message: '255文字以内で入力してください',
  }),
  memo: z
    .string()
    .max(10000, {
      message: '10000文字以内で入力してください',
    })
    .optional(),
  dueDate: z.date().optional(),
})

export type TaskSchemaType = z.infer<typeof TaskSchema>
