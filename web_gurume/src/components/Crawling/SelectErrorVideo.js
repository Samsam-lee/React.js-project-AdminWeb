import React, { useState, useEffect } from "react";
import SelectAddress from "./SelectAddress";
import ErrorHashtag from "./ErrorHashtag";
import { Button } from "../../styledFile";
import Loading from '../Loading'

const SelectErrorVideo = (props) => {
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [platformData, setPlatformData] = useState([]);

  useEffect(() => {
    setAddress(props.textValue)
  }, [props.textValue])

  return (
    <Button width="750px" height="750px" position="relative">
      {isLoading ? <Loading /> : (props.map ? (
        <SelectAddress
        address={address}
        map={props.map}
        setMap={props.setMap}
        errVideo={props.errVideo}
        index={props.index}
        setHashCss={props.setHashCss}
        setTextValue={props.setTextValue}
        platformData={platformData}
        isLoading={isLoading}
        setErrVideo={props.setErrVideo}
        />
      ) : (
        <ErrorHashtag
          index={props.index}
          errVideo={props.errVideo}
          address={address}
          setAddress={setAddress}
          setMap={props.setMap}
          hashCss={props.hashCss}
          setHashCss={props.setHashCss}
          textValue={props.textValue}
          setTextValue={props.setTextValue}
          setPlatformData={setPlatformData}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ))}
    </Button>
  );
};

export default SelectErrorVideo;
