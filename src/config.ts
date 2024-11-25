import { LocalePrefix, Pathnames } from 'next-intl/routing'

export const locales = ['en', 'ar'] as const
export type Locales = typeof locales

export const pathnames: Pathnames<Locales> = {
  '/': '/',
  '/pathnames': '/pathnames',
}

export const localePrefix: LocalePrefix<Locales> = 'always'