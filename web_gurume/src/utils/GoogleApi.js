import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const GoogleApi = (props) => {
  return (
      <Map
        google={props.google}
        style={{
          // width: "40%",
          // height: "62.5%"
          // flex: 1
          width: '500px',
          height: '600px'
        }}
        zoom={10}
        initialCenter={{ lat: 35.798838, lng: 128.583052 }}
      />
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCCw433e81V5_sxCujuqY5wB_zOy1FZXRk",
})(GoogleApi);
