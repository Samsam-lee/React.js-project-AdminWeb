import React from "react";
import "./LittleHash.css";

const LittleHash = (props) => {
  const hashCss = (index) => {
    let flag = false;
    props.hashIndex.map((value) => (value == index ? (flag = true) : null));
    if (flag) {
      return "selectedLittlehash";
    } else {
      return "littlehash";
    }
  };

  const clickForSearch = async (value, index) => {
    // 해쉬태그 인덱스 값으로 css 변경
    let flag = true;
    await props.hashIndex.map((v, i) => {
      if (v == index) {
        props.setSearchText((searchText) => {
          let search = searchText
          search.splice(i-1,1);
          return search
        })
        props.setHashIndex((hashIndex) => {
          flag = false;
          let temp = hashIndex;
          temp.splice(i, 1);
          return temp;
        });
      }
    });

    if (flag) {
      props.setHashIndex((hashIndex) => [...hashIndex, index]);

      // 검색 할 값 배열로 저장
      props.setSearchText((searchText) => [
        ...searchText,
        value.target.innerText,
      ]);
    }
    flag = true;
  };

  return (
    <>
      {props.argHashtag ? (
        props.argHashtag.map((v, index) => (
          <div
            className={hashCss(index)}
            onClick={(value) => clickForSearch(value, index)}
          >
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
