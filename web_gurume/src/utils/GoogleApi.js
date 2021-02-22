import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const GoogleApi = (props) => {
  return (
    <Map
      google={props.google}
      style={{
        width: '700px',
        height: '490px',
        position: 'relative'
      }}
      zoom={17}
      initialCenter={{
        lat: props.platformData[0].data[0].crawlingLocation.lat,
        lng: props.platformData[0].data[0].crawlingLocation.lng,
      }}
    >
      {props.platformData.map((v) => (
        v.data.length != 0 && v.data.map(v => <Marker
          position={{ lat: v.crawlingLocation.lat, lng: v.crawlingLocation.lng }}
          visible={true}
          />)
      ))}
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCw433e81V5_sxCujuqY5wB_zOy1FZXRk',
})(GoogleApi)
