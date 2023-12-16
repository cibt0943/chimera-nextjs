'use client'

import { ColumnDef } from '@tanstack/react-table'
// import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { TodoTableColumnHeader } from './todo-table-column-header'
import { TodoTableRowActions } from './todo-table-row-actions'
import { Task, TaskStatusList } from '@/types/tasks'

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    size: 50,
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    size: 80,
    header: ({ column }) => (
      <TodoTableColumnHeader column={column} title="ID" />
    ),
    // cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    cell: ({ row }) => <div className="">{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <TodoTableColumnHeader column={column} title="タイトル" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          {/* <span className="max-w-[500px] truncate font-medium"> */}
          <span className="truncate font-medium">{row.getValue('title')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'status',
    size: 100,
    header: ({ column }) => (
      <TodoTableColumnHeader column={column} title="状態" />
    ),
    cell: ({ row }) => {
      const status = TaskStatusList.find(
        (status) => status.value === row.getValue('status'),
      )

      if (!status) return null

      return (
        // <div className="flex w-[100px] items-center">
        <div className="flex items-center">
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'dueDate',
    size: 220,
    header: ({ column }) => (
      <TodoTableColumnHeader column={column} title="期限" />
    ),
    cell: ({ row }) => {
      return (
        // <div className="flex w-[190px] items-center">
        <div className="flex items-center">{row.getValue('dueDate')}</div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'actions',
    size: 50,
    cell: ({ row }) => <TodoTableRowActions row={row} />,
  },
]
