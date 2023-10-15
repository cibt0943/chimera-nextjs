import { Tasks } from '@/types/tasks'
import Todo from './Todo'

interface TodoListProps {
  tasks: Tasks
}

const TodoList = ({ tasks }: TodoListProps) => {
  return (
    <div>
      {tasks.map((task) => (
        <Todo key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TodoList
