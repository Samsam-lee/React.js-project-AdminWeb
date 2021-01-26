import React, { useState, useEffect } from "react";
import CrawlingStatus from "../../components/Crawling/crawlingStatus";
import data from "../../assets/ytbCrawlingData";
import ConvertError from "../../utils/isThisError";

const CollectData = () => {
  const [status] = useState(["진행 중", "에러", "완료"]);
  const [errorYoutubers, setErrorYoutubers] = useState([]);
  const [completeYoutubers, setCompleteYoutubers] = useState([]);
  const [onGoingYoutubers, setOnGoingYoutubers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [countOfErr, setCountOfErr] = useState(null);

  // <-- 상태 별 비디오
  const statusOfVideos = (data) => {
    data.map((v) => {
      const { isError, countOfErr } = ConvertError(v);
      setIsError(isError);
      setCountOfErr(countOfErr);

      if (v.video.length < v.videoCount) {
        setOnGoingYoutubers((onGoingYoutubers) => [...onGoingYoutubers, v]);
      } else if (v.video.length == v.videoCount && isError) {
        setErrorYoutubers((errorYoutubers) => [...errorYoutubers, v]);
      } else {
        setCompleteYoutubers((completeYoutubers) => [...completeYoutubers, v]);
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
          onGoingYoutubers={onGoingYoutubers}
          errorYoutubers={errorYoutubers}
          completeYoutubers={completeYoutubers}
          isError={isError}
          countOfErr={countOfErr}
        />
      </div>
    </div>
  );
};

export default CollectData;