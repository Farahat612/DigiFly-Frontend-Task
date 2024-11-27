import { TypoContent } from '@/components/map'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'

const Map = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/map/map-render'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  )
  return (
    <section className='w-full min-h-[800px] bg-gradient-to-tr from-global-bg-gardient-start/40 to-global-bg-gardient-end/50 pt-36 space-y-24'>
      <TypoContent />
      <Map />
    </section>
  )
}

export default Map
