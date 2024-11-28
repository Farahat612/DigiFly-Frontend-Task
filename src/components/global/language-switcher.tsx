'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

import EG from '@/assets/svg/eg.svg'
import GB from '@/assets/svg/gb.svg'
import Image from 'next/image'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()

  const handleChange = (newLocale: string) => {
    router.push(`/${newLocale}`)
  }

  return (
    <div>
      <Select
        value={locale}
        onValueChange={handleChange}
        aria-label='Select Language'
      >
        <SelectTrigger
          className='w-auto sm:w-[140px] bg-white/70'
          aria-label='Language Selector'
          title='Language Selector'
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            key='en'
            value='en'
            role='option'
            aria-label='Switch to English Language'
          >
            <span className='hidden sm:inline-block w-16'>English</span>
            <Image
              src={GB}
              width={15}
              className='inline-block sm:ms-2 mb-1'
              alt='United Kingdom Flag'
              aria-label='United Kingdom Flag'
            />
          </SelectItem>

          <SelectItem
            key='ar'
            value='ar'
            role='option'
            aria-label='تبديل اللغة إلى العربية'
          >
            <span
              className='hidden sm:inline-block w-16'
              style={{ fontFamily: 'Tajawal, sans-serif' }}
            >
              العربية
            </span>
            <Image
              src={EG}
              width={15}
              className='inline-block sm:ms-2 mb-1'
              alt='Egypt Flag'
              aria-label='Egypt Flag'
            />
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
