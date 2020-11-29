import React from "react";
import "./Hashtag.css";
import LittleHash from "./LittleHash";

const Hashtag = (props) => {

  return (
    <>
      {props.videos ? (
        <div className="hashtag">
          <LittleHash
            argHashtag={props.videos[props.videoIndex].more}
            setHashIndex={props.setHashIndex}
            setSearchText={props.setSearchText}
          />
        </div>
      ) : (
        <div> null data </div>
      )}
    </>
  );
};

export default Hashtag;
