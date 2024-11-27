'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useGetUsersQuery } from '@/lib/features/api/apiSlice'
import { useTranslations } from 'next-intl'
import { TableSkeleton } from './table-skeleton'

export function UsersTable() {
  const t = useTranslations()
  const { data: users = [], isLoading } = useGetUsersQuery()

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-lg font-semibold text-digifly-purple'>
        {t('table.results')} :
      </h2>
      <div className='rounded-[0.12rem] border border-zinc-300/80 bg-white flex-grow shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)]'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='ps-6'>{t('fields.first-name')}</TableHead>
              <TableHead>{t('fields.last-name')}</TableHead>
              <TableHead>{t('fields.phone')}</TableHead>
              <TableHead className='pe-6'>{t('fields.email')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableSkeleton />
            ) : users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className='text-center px-6'>
                  {t('table.no-data')}
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.Email}>
                  <TableCell className='ps-6'>{user.FirstName}</TableCell>
                  <TableCell>{user.LastName}</TableCell>
                  <TableCell>{user.Phone}</TableCell>
                  <TableCell className='pe-6 lowercase'>{user.Email}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
