import { Suspense } from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
// import styles from './page.module.scss'
import { TodoListSkeleton } from './components/todo-list-skeleton'
import { TodoContainer } from './components/todo-container'

export const metadata = {
  title: 'Todos',
}

export default withPageAuthRequired(async function Page() {
  return (
    <div className="container px-4">
      <Suspense fallback={<TodoListSkeleton />}>
        <TodoContainer />
      </Suspense>
    </div>
  )
})
