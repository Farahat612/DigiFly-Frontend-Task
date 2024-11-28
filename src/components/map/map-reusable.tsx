'use client'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

import L, { LatLngExpression } from 'leaflet'
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet'

interface MapReusableProps {
  position: LatLngExpression
  center: LatLngExpression
  zoom: number
  tooltipContent: React.ReactNode
}

const markerIcon = new L.Icon({
  iconUrl: '/map-marker.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export function MapReusable({
  position,
  zoom,
  tooltipContent,
}: MapReusableProps) {
  return (
    <div className='leaflet-mask w-full h-[450px] overflow-y-hidden'>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        className='w-full h-full bg-gradient-to-l'
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0) 0%, gray 10%, gray 90%, rgba(0,0,0,0)',
        }}
        aria-label='Map showing location'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <div role='button' tabIndex={0} aria-label='Company location marker'>
          <Marker position={position} icon={markerIcon}>
            <Tooltip
              permanent
              direction='top'
              className='flex flex-col justify-center bg-transparent opacity-100 text-white font-medium text-lg border-none rounded-lg relative align-middle w-[16rem] h-[6rem] !shadow-[0px_4px_25px_0px_rgba(109, 92, 186, 1)]'
            >
              {tooltipContent}
            </Tooltip>
          </Marker>
        </div>
      </MapContainer>
    </div>
  )
}
