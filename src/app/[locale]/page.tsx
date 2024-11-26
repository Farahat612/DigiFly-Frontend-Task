import { FormAndTable, Map, RichTextEditor } from '@/components/sections'

export default function Home() {
  return (
    <main className='flex flex-col items-center w-full '>
      <FormAndTable />
      <Map />
      <RichTextEditor />
    </main>
  )
}
