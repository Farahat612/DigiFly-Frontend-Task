import { UserForm, UsersTable } from '@/components/backend-integration'
import { SectionHeader } from '@/components/global'

const FormAndTable = () => {
  return (
    <section className='w-full bg-gradient-to-br from-global-bg-gardient-start/40 to-global-bg-gardient-end/50 pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 '>
      <div className='max-w-screen-2xl mx-auto space-y-16'>
        <div>
          <SectionHeader section={1} />
        </div>
        <div className='grid gap-10 lg:gap-20 md:grid-cols-2'>
          <UserForm />
          <UsersTable />
        </div>
      </div>
    </section>
  )
}

export default FormAndTable
