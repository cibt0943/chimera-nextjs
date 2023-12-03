import { Suspense } from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
// import styles from './page.module.scss'
import Spinner from '@/components/spinner'
import TodoContainer from './components/todo-container'

export const metadata = {
  title: 'Todos',
}

export default withPageAuthRequired(async function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <TodoContainer />
    </Suspense>
  )
})
