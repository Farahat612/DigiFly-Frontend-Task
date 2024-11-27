'use client'

import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/global'

export function TypoContent() {
  const t = useTranslations('content-03')
  return (
    <div>
      <SectionHeader title={t('title')} description={t('desc')} />
    </div>
  )
}
