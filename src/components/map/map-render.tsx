import { MapReusable } from './'

export function MapRender() {
  return (
    <div className='w-full h-[480px]'>
      <MapReusable
        position={[30.061444, 31.336885]}
        zoom={18}
        tooltipContent='Jakarta, Indonesia'
      />
    </div>
  )
}

export default MapRender
