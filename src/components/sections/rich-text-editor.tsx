import { TypoContent } from '@/components/rich-text-editor'

const RichTextEditor = () => {
  return (
    <section className='w-full min-h-[800px] bg-gradient-to-br from-global-bg-gardient-start/40 to-global-bg-gardient-end/50 pt-36 px-16 space-y-24'>
      <TypoContent />
    </section>
  )
}

export default RichTextEditor
