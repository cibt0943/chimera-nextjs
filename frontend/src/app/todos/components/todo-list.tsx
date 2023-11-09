import { Tasks } from '@/types/tasks'
import Todo from './todo'

interface TodoListProps {
  tasks: Tasks
}

export default function TodoList({ tasks }: TodoListProps) {
  return (
    <div>
      {tasks.map((task) => (
        <Todo key={task.id} task={task} />
      ))}
    </div>
  )
}
