'use client'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { TaskFormData } from '@/types/tasks'
import { addTask } from '@/lib/actions/task'

const zodString = z.string({ required_error: '必須項目です' })
const taskFormSchema = z.object({
  title: zodString.max(255, {
    message: '255文字以内で入力してください',
  }),
  memo: zodString
    .max(10000, {
      message: '10000文字以内で入力してください',
    })
    .optional(),
})

export function TaskForm({
  children,
  task,
}: {
  children: React.ReactNode
  task: TaskFormData
}) {
  const form = useForm<z.infer<typeof taskFormSchema>>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: task,
  })

  async function onSubmit(values: z.infer<typeof taskFormSchema>) {
    await addTask(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                タイトル<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="memo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メモ</FormLabel>
              <FormControl>
                <Textarea placeholder="" className="resize-none" {...field} />
              </FormControl>
              <FormDescription>説明をここに書く</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {children}
      </form>
    </Form>
  )
}
