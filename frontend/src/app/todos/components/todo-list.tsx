import { getAllTasks } from '../../api/tasks/route'
import Todo from './todo'

export default async function TodoList() {
  const tasks = await getAllTasks()

  return (
    <div>
      {tasks.map((task) => (
        <Todo key={task.id} task={task} />
      ))}
    </div>
  )
}
