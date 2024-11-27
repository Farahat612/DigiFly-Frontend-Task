import { UserForm } from '../backend-integration/user-form'
import { UsersTable } from '../backend-integration/users-table'
import { TypoContent } from '../backend-integration/typo-content'

const FormAndTable = () => {
  return (
    <section className='w-full min-h-[800px] bg-gradient-to-br from-global-bg-gardient-start/40 to-global-bg-gardient-end/50 pt-36 px-16 space-y-16'>
      <div>
        <TypoContent />
      </div>
      <div className='grid gap-20 md:grid-cols-2'>
        <div>
          <UserForm />
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-lg font-semibold text-digifly-purple'>
            Results:
          </h2>
          <UsersTable />
        </div>
      </div>
    </section>
  )
}

export default FormAndTable
