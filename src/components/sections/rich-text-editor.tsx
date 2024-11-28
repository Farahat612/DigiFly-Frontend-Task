import { SectionHeader } from '@/components/global'
import { TextEditor } from '@/components/rich-text-editor'

const RichTextEditor = () => {
  return (
    <section className='w-full bg-gradient-to-br from-global-bg-gardient-start/40 to-global-bg-gardient-end/50 pt-32 pb-20 px-16 space-y-24'>
      <SectionHeader section={3} />
      <TextEditor />
    </section>
  )
}

export default RichTextEditor
