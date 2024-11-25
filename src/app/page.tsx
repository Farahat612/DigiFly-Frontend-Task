import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20'>
      <main className='flex flex-col gap-8 items-center sm:items-start p-20 bg-digifly-purple'>
        <h1 className='text-digifly-green'>
          Welcome to Digital-Fly Frontend Challenge
        </h1>

        <Button>Get Started</Button>
      </main>
    </div>
  )
}
