interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className='space-y-2'>
      <h1 className='text-black text-3xl font-bold'>
        <span className='inline-block bg-digifly-purple w-16 h-1 align-middle rounded-md' />
        <span className='ms-4'>{title}</span>
      </h1>
      <p className='text-text-gray/80 max-w-[75%] text-lg'>{description}</p>
    </div>
  )
}

export default SectionHeader
