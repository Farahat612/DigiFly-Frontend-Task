'use client'

import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useAddUserMutation } from '@/lib/features/api/apiSlice'
import { UserInformation, userSchema } from '@/schemas'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export function UserForm() {
  const t = useTranslations()
  const [addUser] = useAddUserMutation()

  const form = useForm<UserInformation>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
    },
  })

  async function onSubmit(data: UserInformation) {
    try {
      await addUser(data).unwrap()
      toast.success(t('toasts.user-added'))
      form.reset()
    } catch (error) {
      console.error(error)
      toast.error(t('toasts.error-msg'))
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 pb-0'>
        <div className='flex justify-between items-center gap-8'>
          <FormField
            control={form.control}
            name='FirstName'
            render={({ field }) => (
              <FormItem className='flex-grow'>
                <FormLabel>{t('fields.first-name')}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='LastName'
            render={({ field }) => (
              <FormItem className='flex-grow'>
                <FormLabel>{t('fields.last-name')}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='Phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('fields.phone')}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='Email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('fields.email')}</FormLabel>
              <FormControl>
                <Input {...field} type='email' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='pt-2'>
          <Button type='submit' className='w-full py-6' variant='submit'>
            {t('actions.send')}
          </Button>
        </div>
      </form>
    </Form>
  )
}
