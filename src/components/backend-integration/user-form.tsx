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
import { useUserForm } from '@/hooks'
import { useTranslations } from 'next-intl'

export function UserForm() {
  const t = useTranslations()
  const { form, onSubmit } = useUserForm()

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 sm:space-y-8 pb-0 text-xs md:text-sm lg:text-base'
        aria-label='User Information Form'
      >
        <div className='flex justify-between items-center flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-4 xl:gap-8'>
          <FormField
            control={form.control}
            name='FirstName'
            render={({ field, fieldState }) => (
              <FormItem className='flex-grow w-full'>
                <FormLabel className='text-xs sm:text-sm md:text-sm'>
                  {t('fields.first-name')}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    aria-required='true'
                    aria-invalid={fieldState.invalid ? 'true' : 'false'}
                    aria-describedby={
                      fieldState.invalid ? `${field.name}-error` : undefined
                    }
                  />
                </FormControl>
                <FormMessage id={`${field.name}-error`} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='LastName'
            render={({ field, fieldState }) => (
              <FormItem className='flex-grow w-full'>
                <FormLabel className='text-xs md:text-sm'>
                  {t('fields.last-name')}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    aria-required='true'
                    aria-invalid={fieldState.invalid ? 'true' : 'false'}
                    aria-describedby={
                      fieldState.invalid ? `${field.name}-error` : undefined
                    }
                  />
                </FormControl>
                <FormMessage id={`${field.name}-error`} />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='Phone'
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className='text-xs md:text-sm'>
                {t('fields.phone')}
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  aria-required='true'
                  aria-invalid={fieldState.invalid ? 'true' : 'false'}
                  aria-describedby={
                    fieldState.invalid ? `${field.name}-error` : undefined
                  }
                />
              </FormControl>
              <FormMessage id={`${field.name}-error`} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='Email'
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className='text-xs md:text-sm'>
                {t('fields.email')}
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='email'
                  aria-required='true'
                  aria-invalid={fieldState.invalid ? 'true' : 'false'}
                  aria-describedby={
                    fieldState.invalid ? `${field.name}-error` : undefined
                  }
                />
              </FormControl>
              <FormMessage id={`${field.name}-error`} />
            </FormItem>
          )}
        />
        <div className='pt-2'>
          <Button
            type='submit'
            className='w-full py-6'
            variant='submit'
            disabled={form.formState.isSubmitting}
            title='Create a user'
            aria-label='Create a user'
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
