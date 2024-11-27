'use client'

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
import useUserForm from '@/hooks/useUserForm'
import { useTranslations } from 'next-intl'

export function UserForm() {
  const t = useTranslations()
  const { form, onSubmit } = useUserForm()

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
          <Button
            type='submit'
            className='w-full py-6'
            variant='submit'
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting
              ? t('actions.sending') + '...'
              : t('actions.send')}
          </Button>
        </div>
      </form>
    </Form>
  )
}
