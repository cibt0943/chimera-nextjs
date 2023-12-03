import { columns } from './todo-table-columns'
import TodoTable from './todo-table'
import { getAllTasks } from '../../api/tasks/route'

export default async function TodoContainer() {
  const tasks = await getAllTasks()

  return <TodoTable data={tasks} columns={columns} />
}
