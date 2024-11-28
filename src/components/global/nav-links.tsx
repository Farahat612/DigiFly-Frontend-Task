'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const keywords = ['home', 'sections', 'about', 'contact']

const NavLinks = () => {
  const t = useTranslations('navbar')
  const locale = useLocale()
  const pathname = usePathname()
  return (
    <div className='flex-1 flex justify-center items-center gap-3 md:gap-6 text-[10px] sm:text-sm md:text-base'>
      {keywords.map((keyword) => {
        const href = keyword === 'home' ? `/${locale}` : `/${locale}/${keyword}`
        const isActive = pathname === href
        return (
          <Link
            key={keyword}
            href={`/${locale}`}
            className={`font-medium ${
              isActive ? 'text-digifly-green' : 'text-neutral-700'
            }`}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`Navigate to ${t(keyword)}`}
            title={`Navigate to ${t(keyword)}`}
          >
            {t(keyword)}
          </Link>
        )
      })}
    </div>
  )
}

export default NavLinks
