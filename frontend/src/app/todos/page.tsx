import { Suspense } from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
// import styles from './page.module.scss'
import Spinner from '@/components/spinner'
import TodoList from './components/todo-list'

export const metadata = {
  title: 'Todos',
}

export default withPageAuthRequired(async function Todo() {
  return (
    <Suspense fallback={<Spinner />}>
      <TodoList />
    </Suspense>
  )
})
