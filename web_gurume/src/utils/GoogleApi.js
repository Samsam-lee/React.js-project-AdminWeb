import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import mapIcon from "../assets/image/googleMap.png";

const GoogleApi = (props) => {
  const image = mapIcon;
  const [store, setStore] = useState(null);
  const [marker, setMarker] = useState(null);
  const [centerLocation, setCenterLocation] = useState({'lat':127, 'lng':37})

  // const handleMap = (props, marker, value) => {
  //   // console.log(props);
  //   // console.log(marker);
  //   // console.log(value)
  //   setStore(value.crawlingStore)
  //   setMarker(marker)
  // };

  // useEffect(() => {
  //   // console.log(props.platformData)
  //   props.platformData.map(v => {
  //     v.data != [] &&
  //     v.data.map(value => {
  //       value.crawlingLocation && setCenterLocation(value.crawlingLocation);
  //     })
  //   })
  // }, [])

  return (
    <Map
      google={props.google}
      style={{
        width: "700px",
        height: "490px",
        position: "relative",
      }}
      zoom={17}
      initialCenter={{
        lat: centerLocation.lat,
        lng: centerLocation.lng,
      }}
    >
      {props.platformData.map(
        (value, index) =>
          value.data.length != 0 &&
          value.data.map((v) => (
            <Marker
              position={{
                lat: v.crawlingLocation.lat,
                lng: v.crawlingLocation.lng,
              }}
              visible={true}
              name={v.storeName}
              icon={image}
            > 
            </Marker>
          ))
      )}

      <InfoWindow position={props.location} visible={true}>
          <h3>{props.storeName != null && props.storeName}</h3>
      </InfoWindow>
      <InfoWindow marker={marker} visible={true}>
          <h3>{store != null && store}</h3>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCCw433e81V5_sxCujuqY5wB_zOy1FZXRk",
})(GoogleApi);
