import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useAddUserMutation } from '@/lib/features/api/apiSlice'
import { UserInformation, userSchema } from '@/schemas'
import { useTranslations } from 'next-intl'

const useUserForm = () => {
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
      toast.success(t('toasts.user-added'), {
        style: {
          padding: '16px',
          backgroundImage: 'linear-gradient(to left, #7A6D91, #49BD88)',
          color: 'white',
          borderRadius: '8px',
          fontSize: '15px',
          border: 'none',
        },
      })
      form.reset()
    } catch (error) {
      console.error(error)
      toast.error(t('toasts.error-msg'))
    }
  }
  return {
    form,
    onSubmit,
  }
}

export default useUserForm
