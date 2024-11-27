'use client'

import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/global'

export function TypoContent() {
  const t = useTranslations('content-02')
  return (
    <div className='px-16'>
      <SectionHeader title={t('title')} description={t('desc')} />
    </div>
  )
}
