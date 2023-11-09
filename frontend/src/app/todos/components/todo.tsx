import { Task } from '@/types/tasks'

type TaskProps = {
  task: Task
}

export default function Todo({ task }: TaskProps) {
  return <div key={task.id}>{task.title}</div>
}
