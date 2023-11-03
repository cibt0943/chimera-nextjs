// import styles from './page.module.scss'
import { getAllTasks } from '../api/task'
import TodoList from './components/todo-list'

export default async function Home() {
  const tasks = await getAllTasks()
  return <TodoList tasks={tasks} />
}
