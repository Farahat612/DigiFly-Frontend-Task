import { Footer, NavBar } from '@/components/global/'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Poppins, Tajawal } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
})

export const metadata: Metadata = {
  title: 'Digi-Fly Frontend Challenge',
  description:
    'A frontend challenge for Digi-Fly marketing agency contains a form and a list of users, a leaflet map, and a rich text editor.',
}

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages()
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <NextIntlClientProvider messages={messages}>
        <body
          className={`${
            locale === 'ar' ? `${tajawal.className}` : `${poppins.className}`
          } antialiased w-full`}
        >
          <NavBar />
          <Providers>{children}</Providers>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
