import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import mapIcon from "../assets/image/googleMap.png";

const GoogleApi = (props) => {
  const image = mapIcon;
  const [store, setStore] = useState(null);
  const [marker, setMarker] = useState(null)
  const handleMap = (props, marker, value) => {
    console.log(value)
    setStore(value)
    setMarker(marker)
  };

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
        lat: props.platformData[0].data[0].crawlingLocation.lat,
        lng: props.platformData[0].data[0].crawlingLocation.lng,
      }}
    >
      {props.platformData.map(
        (v) =>
          v.data.length != 0 &&
          v.data.map((v) => (
            <Marker
              position={{
                lat: v.crawlingLocation.lat,
                lng: v.crawlingLocation.lng,
              }}
              visible={true}
              name={v.storeName}
              onClick={(props, marker) => handleMap(props, marker, v)}
              icon={image}
            />
          ))
      )}
      <InfoWindow marker={marker} visible={true}><div><h2>{store != null && store.crawlingStore}</h2></div></InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCCw433e81V5_sxCujuqY5wB_zOy1FZXRk",
})(GoogleApi);
