'use client'

import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('shared')
  return (
    <div className='w-full bg-digifly-purple flex justify-center items-center py-4'>
      <p className='text-neutral-300/50 text-sm'>{t('copyright')}</p>
    </div>
  )
}

export default Footer
