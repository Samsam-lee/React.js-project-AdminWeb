import React from "react";
import "./LittleHash.css";

const LittleHash = (props) => {
  const clickForSearch = (value,index) => {
    props.setSearchText(searchText => [...searchText, value.target.innerText]);
    // props.setSearchText(searchText => searchText.concat(value.target.innerText))
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
