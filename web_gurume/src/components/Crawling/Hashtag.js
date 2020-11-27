import React, { useState } from "react";
import "./Hashtag.css";
import LittleHash from "./LittleHash";

const Hashtag = (props) => {

  return (
    <>
      {props.videos ? (
        <div className="hashtag">
          <LittleHash
            argHashtag={props.videos[props.videoIndex].more}
            setVideoIndex={props.setVideoIndex}
            setHashIndex={props.setHashIndex}
            setSearchText={props.setSearchText}
            searchText={props.searchText}
          />
        </div>
      ) : (
        <div> null data </div>
      )}
    </>
  );
};

export default Hashtag;
