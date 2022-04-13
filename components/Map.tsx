import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'
import React from 'react'

const styles = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [28.9, 41.0],
      zoom: 10,
    })
  }, [])

  return <div className={styles.wrapper} id="map" />
}

export default Map
