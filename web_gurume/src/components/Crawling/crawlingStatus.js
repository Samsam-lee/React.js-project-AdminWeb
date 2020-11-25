import React from "react";
import "./crawlingStatus.css";
import CrawlingYoutuber from "./CrawlingYoutuber";

const CrawlingStatus = (props) => {
  return (
    <div className="cBox">
      {props.status.map((v) => (
        <div className="statusBox">
          <div className="status">{v}</div>
          {console.log(props.errorVideos)}
          <CrawlingYoutuber
            status={v}
            onGoingVideos={props.onGoingVideos}
            errorVideos={props.errorVideos}
            completeVideos={props.completeVideos}
            isError={props.isError}
            countOfErr={props.countOfErr}
          />
        </div>
      ))}
    </div>
  );
};

export default CrawlingStatus;
