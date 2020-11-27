import React, { useState, useEffect } from "react";
import CrawlingStatus from "../../components/Crawling/crawlingStatus";
import data from "../../assets/ytbCrawlingData";
import ConvertError from "../../utils/isThisError";

const CollectData = () => {
  const [status] = useState(["진행 중", "에러", "완료"]);
  const [errorVideos, setErrorVideos] = useState([]);
  const [completeVideos, setCompleteVideos] = useState([]);
  const [onGoingVideos, setOnGoingVideos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [countOfErr, setCountOfErr] = useState(null);
  // const [youtuberIndex, setYoutuberIndex] = useState(0);

  // <-- 상태 별 비디오
  const statusOfVideos = (data) => {
    data.map((v) => {
      const { isError, countOfErr } = ConvertError(v);
      setIsError(isError);
      setCountOfErr(countOfErr);

      if (v.video.length < v.videoCount) {
        setOnGoingVideos((onGoingVideos) => [...onGoingVideos, v]);
      } else if (v.video.length == v.videoCount && isError) {
        setErrorVideos((errorVideos) => [...errorVideos, v]);
      } else {
        setCompleteVideos((completeVideos) => [...completeVideos, v]);
      }
    });
  };
  // -->

  useEffect(() => {
    statusOfVideos(data);
  }, []);

  return (
    <div className="bodyFrame">
      <div className="dataFrame">
        <CrawlingStatus
          status={status}
          onGoingVideos={onGoingVideos}
          errorVideos={errorVideos}
          completeVideos={completeVideos}
          isError={isError}
          countOfErr={countOfErr}
          // handleIndex={setYoutuberIndex}
        />
      </div>
    </div>
  );
};

export default CollectData;
