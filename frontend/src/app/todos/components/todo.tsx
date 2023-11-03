import { Task } from '@/types/tasks'

type TaskProps = {
  task: Task
}

const Todo = ({ task }: TaskProps) => {
  return <div key={task.id}>{task.title}</div>
}

export default Todo
