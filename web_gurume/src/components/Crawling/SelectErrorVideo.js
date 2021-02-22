import React, { useState, useEffect } from "react";
import SelectAddress from "./SelectAddress";
import ErrorHashtag from "./ErrorHashtag";
import { Button } from "../../styledFile";

const SelectErrorVideo = (props) => {
  const [address, setAddress] = useState(null);

  // useEffect(() => {
  //   fetchPlatformData();
  // }, [address]);

  return (
    <Button width="750px" height="750px" position="relative">
      {props.map ? (
        <SelectAddress address={address} map={props.map} setMap={props.setMap}/>
      ) : (
        <ErrorHashtag
          index={props.index}
          errVideo={props.errVideo}
          address={address}
          setAddress={setAddress}
          setMap={props.setMap}
        />
      )}
    </Button>
  );
};

export default SelectErrorVideo;
