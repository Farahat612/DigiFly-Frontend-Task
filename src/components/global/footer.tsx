'use client'

import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('shared')
  return (
    <footer className='w-full bg-digifly-purple flex justify-center items-center py-4'>
      <p className='text-white/60 text-sm'>{t('copyright')}</p>
    </footer>
  )
}

export default Footer
