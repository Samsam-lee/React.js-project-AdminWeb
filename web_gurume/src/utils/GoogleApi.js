import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const GoogleApi = (props) => {
  return (
    <Map
      google={props.google}
      style={{
        width: '100%',
        height: '100%',
      }}
      zoom={17}
      initialCenter={{
        lat: props.platformData[0].location.lat,
        lng: props.platformData[0].location.lng,
      }}
    >
      {props.platformData.map((v) => (
        <Marker
          position={{ lat: v.location.lat, lng: v.location.lng }}
          // icon={{ url: "../assets/image/googleMap.png" }}
          visible={true}
        />
      ))}
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCw433e81V5_sxCujuqY5wB_zOy1FZXRk',
})(GoogleApi)
