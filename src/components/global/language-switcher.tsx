'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { locales } from '@/config'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import EG from '@/assets/svg/eg.svg'
import GB from '@/assets/svg/gb.svg'
import Image from 'next/image'

export default function LanguageSwitcher() {
  const t = useTranslations('switch')
  const locale = useLocale()
  const router = useRouter()

  const handleChange = (newLocale: string) => {
    router.push(`/${newLocale}`)
  }

  return (
    <div>
      <Select value={locale} onValueChange={handleChange}>
        <SelectTrigger className='w-[120px] bg-white/70'>
          <SelectValue placeholder={t('label')} />
        </SelectTrigger>
        <SelectContent>
          {locales.map((loc) => (
            <SelectItem key={loc} value={loc}>
              {t(loc)}
              {loc === 'en' ? (
                <Image
                  width={15}
                  className='inline-block ms-2 mb-1'
                  alt='United Kingdom Flag'
                  src={GB}
                />
              ) : (
                <Image
                  width={15}
                  className='inline-block ms-6 mb-1'
                  alt='Egypt Flag'
                  src={EG}
                />
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
