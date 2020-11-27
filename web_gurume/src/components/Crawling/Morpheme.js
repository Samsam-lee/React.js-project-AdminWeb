import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Morpheme.css";
import Hashtag from "./Hashtag";

const Morpheme = ({ errorVideos, youtuberIndex }) => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [hashIndex, setHashIndex] = useState(null);
  const [searchText, setSearchText] = useState([""]);

  // videoIndex 는 검색버튼 클릭 시 다음 에러 발생 영상으로
  // hashIndex 는 검색창에 띄울 때 필요

  return (
    <div className="morpheme">
      <div className="morphemeTitle"> 주소 분리 및 검색 </div>

      <input className="addressSearch" type="text" placeholder="형태소 선택" value={searchText}/>
      <Hashtag
        videos={errorVideos[youtuberIndex].video}
        setVideoIndex={setVideoIndex}
        videoIndex={videoIndex}
        setHashIndex={setHashIndex}
        setSearchText={setSearchText}
        searchText={searchText}
      />
      <div className="inputBox">
        <div className="morphemeButton"> 삭제 </div>
        {/* 컴포넌트 갈아끼우기 */}
        <div className="morphemeButton">
          <Link to="/collectData/search"> 검색 </Link>
        </div>
      </div>
    </div>
  );
};

export default Morpheme;
