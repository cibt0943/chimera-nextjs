import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export const metadata = {
  title: 'Memos',
}

export default withPageAuthRequired(async function Page() {
  return <>メモ機能を作る予定</>
})
