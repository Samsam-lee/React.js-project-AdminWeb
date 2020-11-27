import React from "react";
import "./LittleHash.css";

const LittleHash = (props) => {
  const clickForSearch = (v,index) => {
    console.log(v.target.innerText, index)
    // props.setSearchText(...props.searchText, props.argHashtag[index]);
  };

  return (
    <>
      {props.argHashtag ? (
        props.argHashtag.map((v, index) => (
          <div className="littlehash" onClick={(v) => clickForSearch(v, index)}>
            {v}
          </div>
        ))
      ) : (
        <div> no data </div>
      )}
    </>
  );
};

export default LittleHash;
