'use client'

import * as React from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { RxPlus } from 'react-icons/rx'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { TaskForm } from './task-form'

export function AddTask() {
  const [open, setOpen] = React.useState(false)
  useHotkeys('mod+i', () => setOpen(!open))

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="h-8 px-2 lg:px-3">
          <RxPlus className="mr-2" />
          追加
          <p className="text-[10px] text-muted-foreground ml-2">
            <kbd className="inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-muted-foreground">
              <span className="text-xs">⌘</span>i
            </kbd>
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>タスク追加</DialogTitle>
          <DialogDescription>
            新規に追加するタスクの情報を設定してください。
          </DialogDescription>
        </DialogHeader>
        <TaskForm task={{}}>
          <DialogFooter>
            <Button type="submit">保存</Button>
          </DialogFooter>
        </TaskForm>
      </DialogContent>
    </Dialog>
  )
}
