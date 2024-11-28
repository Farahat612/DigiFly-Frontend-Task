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
      <Select value={locale} onValueChange={handleChange}>
        <SelectTrigger className='w-[140px] bg-white/70'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key='en' value='en'>
            <span className='inline-block w-16'>English</span>
            <Image
              width={15}
              className='inline-block ms-2 mb-1'
              alt='United Kingdom Flag'
              src={GB}
            />
          </SelectItem>

          <SelectItem key='ar' value='ar'>
            <span
              className='inline-block w-16'
              style={{ fontFamily: 'Tajawal, sans-serif' }}
            >
              العربية
            </span>
            <Image
              width={15}
              className='inline-block ms-2 mb-1'
              alt='Egypt Flag'
              src={EG}
            />
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
