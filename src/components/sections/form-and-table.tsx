import {
  UserForm,
  UsersTable,
  TypoContent,
} from '@/components/backend-integration'

const FormAndTable = () => {
  return (
    <section className='w-full bg-gradient-to-br from-global-bg-gardient-start/40 to-global-bg-gardient-end/50 pt-36 px-16 space-y-16'>
      <div>
        <TypoContent />
      </div>
      <div className='grid gap-20 md:grid-cols-2'>
        <UserForm />
        <UsersTable />
      </div>
    </section>
  )
}

export default FormAndTable
