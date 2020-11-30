import React, { useState, useEffect } from "react";
import "./Morpheme.css";
import Hashtag from "./Hashtag";
import CollectAddress from "./collectAddress";

const Morpheme = ({ errorYoutubers, youtuberIndex }) => {
  const [videoIndex, setVideoIndex] = useState(0); // 에러난 영상만 나오게
  const [hashIndex, setHashIndex] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [text, setText] = useState();
  const [nextPage, setNextPage] = useState(false);

  // videoIndex 는 검색버튼 클릭 시 다음 에러 발생 영상으로
  // hashIndex 는 검색창에 띄울 때 필요

  useEffect(() => {
    setSearchText([]);
  }, [youtuberIndex]);

  useEffect(() => {
    let temp = searchText.toString();
    setText(temp.replace(/,/g, ""));
  }, [searchText]);

  // 띄어쓰기 기능
  const space = () => {
    setSearchText((value) => [...value, " "]);
  };

  // 동영상 삭제 기능
  const videoDelete = () => {};
  // 검색 버튼 클릭 기능
  const addressSearchButton = () => {
    setNextPage(true);
    // 서버로 text 값 넘겨주기
  };

  // 재검색 버튼 클릭 기능
  const researchButton = () => {
    setNextPage(false);
    setSearchText([]);
  };

  const saveAddress = () => {
    setNextPage(false);
    // 서버로 선택한 주소 넘겨주기
    // 에러난 비디오 중 다음 index 값으로!
  };

  return (
    <div className="morpheme">
      <div className="morphemeTitle"> 주소 분리 및 검색 </div>
      {console.log("searchText : ", searchText)}
      {console.log("text : ", text)}
      {nextPage === false ? (
        <>
          <div className="searchAndSpace">
            <input
              className="addressSearch"
              type="text"
              placeholder="형태소 선택"
              value={text}
            />
            <div className="spaceBar" onClick={space}>
              띄어쓰기
            </div>
          </div>
          <Hashtag
            videos={errorYoutubers[youtuberIndex].video}
            videoIndex={videoIndex}
            setHashIndex={setHashIndex}
            setSearchText={setSearchText}
          />
          <div className="inputBox">
            <div className="morphemeButton" onClick={videoDelete}>
              삭제
            </div>
            <div className="morphemeButton" onClick={addressSearchButton}>
              검색
            </div>
          </div>
        </>
      ) : (
        <>
          <CollectAddress />
          <div className="inputBox">
            <div className="morphemeButton" onClick={researchButton}>
              재검색
            </div>
            <div className="morphemeButton" onClick={saveAddress}>
              저장
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Morpheme;
