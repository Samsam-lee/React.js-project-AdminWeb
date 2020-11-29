import React from "react";
import "./LittleHash.css";

const LittleHash = (props) => {
  const clickForSearch = (value,index) => {
    console.log(value.target.innerText, index)
    props.setSearchText(searchText => searchText.concat(value.target.innerText))
  };

  return (
    <>
      {props.argHashtag ? (
        props.argHashtag.map((v, index) => (
          <div className="littlehash" onClick={(value) => clickForSearch(value, index)}>
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
