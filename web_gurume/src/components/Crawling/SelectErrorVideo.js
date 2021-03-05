import React, { useState, useEffect } from "react";
import SelectAddress from "./SelectAddress";
import ErrorHashtag from "./ErrorHashtag";
import { Button } from "../../styledFile";
import Loading from '../Loading'

const SelectErrorVideo = (props) => {
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [platformData, setPlatformData] = useState([
    // {
    //     "crawlingPlatform": "Google",
    //     "data": [
    //         {
    //             "address": "대구광역시 수성구 황금동 동대구로 219",
    //             "crawlingLocation": {
    //                 "lat": 35.84987200777492,
    //                 "lng": 128.6244778213711
    //             },
    //             "crawlingStore": "아웃백스테이크하우스 대구황금점"
    //         },
    //         {
    //             "address": "대구광역시 수성구 ",
    //             "crawlingLocation": {
    //                 "lat": 35.84987200777492,
    //                 "lng": 128.6234778213711
    //             },
    //             "crawlingStore": "아웃백"
    //         }
    //     ]
    // },
    // {
    //     "crawlingPlatform": "Naver",
    //     "data": [
    //         {
    //             "address": "대구광역시 수성구 황금동 동대구로 219",
    //             "crawlingLocation": {
    //                 "lat": 35.84881497862917,
    //                 "lng": 128.624296241206
    //             },
    //             "crawlingStore": "아웃백스테이크 황금점"
    //         }
    //     ]
    // },
    // {
    //     "crawlingPlatform": "Kakao",
    //     "data": []
    // }
]);

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
