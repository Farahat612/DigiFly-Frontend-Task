'use client'

import { useTranslations } from 'next-intl'

export function TypoContent() {
  const t = useTranslations('content-01')
  return (
    <div className='space-y-2'>
      <h1 className='text-black text-3xl font-bold'>
        <span className='inline-block bg-digifly-purple w-16 h-1 align-middle rounded-md' />
        <span className='ms-4'>{t('title')}</span>
      </h1>
      <p className='text-text-gray/80 max-w-[75%] text-lg'>{t('desc')}</p>
    </div>
  )
}
