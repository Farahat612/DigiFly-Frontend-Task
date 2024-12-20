import { SectionHeader } from '@/components/global'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'

const Map = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/map/map-render'), {
        loading: () => (
          <div className='w-full h-[30rem] flex justify-center items-center bg-gray-400/50'>
            <h1 className='text-2xl text-white'>Loading The Map...</h1>
          </div>
        ),
        ssr: false,
      }),
    []
  )
  return (
    <>
      <section
        className='w-full bg-gradient-to-tr from-global-bg-gardient-start/40 to-global-bg-gardient-end/50 pt-32 space-y-24'
        aria-labelledby='section-2-header'
        role='region'
      >
        <div className='px-6 md:px-10 lg:px-16'>
          <div className='max-w-screen-2xl mx-auto'>
            <SectionHeader section={2} id='section-2-header' />
          </div>
        </div>
        <Map />
      </section>
    </>
  )
}

export default Map
