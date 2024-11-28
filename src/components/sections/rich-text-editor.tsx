import { SectionHeader } from '@/components/global'
import { TextEditor } from '@/components/rich-text-editor'

const RichTextEditor = () => {
  return (
    <section
      className='w-full bg-gradient-to-br from-global-bg-gardient-start/40 to-global-bg-gardient-end/50 pt-28 pb-20 px-6 md:px-10 lg:px-16'
      aria-labelledby='section-3-header'
      role='region'
    >
      <div className='max-w-screen-2xl mx-auto space-y-24'>
        <SectionHeader section={3} id='section-3-header' />
        <TextEditor />
      </div>
    </section>
  )
}

export default RichTextEditor
