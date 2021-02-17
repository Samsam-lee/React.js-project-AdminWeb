import React from "react";
import GoogleMap from "../../utils/GoogleApi";
import platformData from "../../assets/platformCrawlingData";

const CollectAddress = () => {
  return (
    <div className="collectBox">
      <div className="platformBox">
        {platformData ? (
          platformData.map((v) => (
            <div className="collectPlatform">
              <div className="platform"> {v.platform} </div>
              <div className="store">
                {v.address} <br />
                <br /> {v.storeName}
              </div>
            </div>
          ))
        ) : (
          <div> no data </div>
        )}
      </div>
      <GoogleMap platformData={platformData}/>
    </div>
  );
};

export default CollectAddress;
