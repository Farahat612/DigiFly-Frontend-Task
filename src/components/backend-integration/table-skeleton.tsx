import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function TableSkeleton() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <TableRow key={index}>
          <TableCell className='ps-6'>
            <Skeleton className='h-4 w-[80px]' />
          </TableCell>
          <TableCell>
            <Skeleton className='h-4 w-[80px]' />
          </TableCell>
          <TableCell>
            <Skeleton className='h-4 w-[100px]' />
          </TableCell>
          <TableCell className='pe-6'>
            <Skeleton className='h-4 w-[150px]' />
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}
