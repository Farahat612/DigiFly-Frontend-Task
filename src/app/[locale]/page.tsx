import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('content-01')
  return (
    <div className='grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20'>
      <main className='flex flex-col gap-8 items-center sm:items-start p-20 bg-digifly-purple'>
        <h1 className='text-digifly-green'>
          Welcome to Digital-Fly Frontend Challenge
        </h1>

        <Button>Get Started</Button>

        <p>{t('title')}</p>
      </main>
    </div>
  )
}
