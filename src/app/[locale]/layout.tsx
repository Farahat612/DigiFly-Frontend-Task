import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Poppins } from 'next/font/google'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
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
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={`${poppins.className} antialiased`}>
          <LanguageSwitcher />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
