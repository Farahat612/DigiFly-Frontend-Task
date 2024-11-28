'use client'

import { useLocale } from 'next-intl'

export function TooltipMessage() {
  const locale = useLocale()

  return locale === 'en' ? (
    <div
      className='poppins flex gap-1'
      role='tooltip'
      aria-label='Digi-Fly Company Welcome Message'
    >
      <span className='text-digifly-green font-semibold'>Digi</span>
      <span className='text-white/80 font-semibold'>Fly</span>
      <span className='text-white/80 font-normal'>Company welcomes you</span>
    </div>
  ) : (
    <div
      className='tajawal flex gap-1'
      role='tooltip'
      aria-label='رسالة ترحيب شركة ديجي فلي'
    >
      <span className='text-white/80 font-normal'>شركة</span>
      <span className='text-digifly-green font-medium'>ديجي</span>
      <span className='text-white/80 font-medium'>فلاى</span>
      <span className='text-white/80 font-normal'>ترحب بكم</span>
    </div>
  )
}
