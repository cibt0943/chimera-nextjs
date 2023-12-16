import Link from 'next/link'
import {
  RxCheck,
  RxCalendar,
  RxFile,
  RxPaperPlane,
  RxPencil2,
} from 'react-icons/rx'
import { Button } from '@/components/ui/button'
import { UserMenu } from '@/components/user-menu'

export function Sidebar() {
  return (
    <div className="px-2 py-4">
      <h1 className="mb-2 px-4 text-2xl font-bold tracking-tight">
        <Link href="/">kobushi</Link>
      </h1>
      <div className="">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/todos">
            <RxCheck className="mr-2 h-4 w-4" />
            Todo
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/memos">
            <RxPencil2 className="mr-2 h-4 w-4" />
            Memo
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/events">
            <RxCalendar className="mr-2 h-4 w-4" />
            Event
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/files">
            <RxFile className="mr-2 h-4 w-4" />
            File
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/reminders">
            <RxPaperPlane className="mr-2 h-4 w-4" />
            Reminder
          </Link>
        </Button>
      </div>
      <div className="px-4 mt-16">
        <UserMenu />
      </div>
    </div>
  )
}
