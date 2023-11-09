import { withPageAuthRequired } from '@auth0/nextjs-auth0'
// import styles from './page.module.scss'
import { getAllTasks } from '../api/task'
import TodoList from './components/todo-list'

export default withPageAuthRequired(async function Todo() {
  const tasks = await getAllTasks()
  return <TodoList tasks={tasks} />
})
