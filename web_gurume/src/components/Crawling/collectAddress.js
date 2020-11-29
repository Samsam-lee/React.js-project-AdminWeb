import React from "react";
import "./collectAddress.css";
import Map from "../../assets/image/지도.png";

const collectAddress = () => {
  return (
    <div className="collectBox">
      <div className="platformBox">
        <div className='collectPlatform'>
            <div className='platform'> 구글 </div>
            <div></div>
        </div>
        <div className='collectPlatform'>
            <div className='platform'> 네이버 </div>
            <div></div>
        </div>
        <div className='collectPlatform'>
            <div className='platform'> 카카오 </div>
            <div></div>
        </div>
      </div>
      <div className="mapBox">
        <input className="map" type="image" src={Map} />
      </div>
    </div>
  );
};

export default collectAddress;
