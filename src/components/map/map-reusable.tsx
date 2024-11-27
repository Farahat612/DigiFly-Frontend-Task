'use client'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

import L, { LatLngExpression } from 'leaflet'
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet'

interface MapReusableProps {
  position: LatLngExpression
  zoom: number
  tooltipContent: React.ReactNode
}

const markerIcon = new L.Icon({
  iconUrl: '/map-marker.PNG',
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
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      className='w-full min-h-[28rem] bg-gradient-to-l'
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0) 0%, gray 10%, gray 90%, rgba(0,0,0,0)',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position} icon={markerIcon}>
        <Tooltip>{tooltipContent}</Tooltip>
      </Marker>
    </MapContainer>
  )
}
