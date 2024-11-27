import { MapReusable, CustomTooltip } from './'

export function MapRender() {
  return (
    <div className='w-full h-[480px]'>
      <MapReusable
        position={[30.0616113, 31.3368422]}
        center={[30.042155, 31.354252]}
        zoom={18}
        tooltipContent={<CustomTooltip />}
      />
    </div>
  )
}

export default MapRender
