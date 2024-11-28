import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  section: number
}

const SectionHeader = ({ section, className }: SectionHeaderProps) => {
  const t = useTranslations(`content-0${section}`)
  return (
    <div className={cn('space-y-4', className)}>
      <h1 className='text-black text-xl md:text-3xl font-bold'>
        <span className='inline-block bg-digifly-purple w-16 h-1 align-middle rounded-md' />
        <span className='ms-4'>{t('title')}</span>
      </h1>
      <p className='text-text-gray/80 text-center md:text-start md:max-w-[75%] text-sm  md:text-base xl:text-lg'>
        {t('desc')}
      </p>
    </div>
  )
}

export default SectionHeader
