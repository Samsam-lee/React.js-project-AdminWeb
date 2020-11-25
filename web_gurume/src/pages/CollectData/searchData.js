import React, { useState, useEffect } from "react";
import CrawlingStatus from "../../components/Crawling/crawlingStatus";
import data from "../../assets/ytbCrawlingData";
import ConvertError from "../../utils/isThisError";

const SearchData = (props) => {
  const [errorVideos, setErrorVideos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [countOfErr, setCountOfErr] = useState(null);

  // <-- 상태 별 비디오
  const statusOfVideos = (data) => {
    data.map((v) => {
      const { isError, countOfErr } = ConvertError(v);
      setIsError(isError);
      setCountOfErr(countOfErr);

      if (v.video.length == v.videoCount && isError) {
        setErrorVideos((errorVideos) => [...errorVideos, v]);
      }
    });
  };
  // -->

  useEffect(() => {
    statusOfVideos(data);
  }, [data]);

  return (
    <div className="bodyFrame">
      <div className="dataFrame">
        <CrawlingStatus
          status={['에러']}
          onGoingVideos={null}
          errorVideos={errorVideos}
          completeVideos={null}
          isError={isError}
          countOfErr={countOfErr}
        />
      </div>
    </div>
  );
};

export default SearchData;
