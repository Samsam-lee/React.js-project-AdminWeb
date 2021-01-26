import React from "react";
import "./crawlingStatus.css";
import CrawlingYoutuber from "./CrawlingYoutuber";

const CrawlingStatus = (props) => {
  return (
    <div className="cBox">
      {props.status.map((v) => (
        <div className="statusBox">
          <div className="status">{v}</div>
          <CrawlingYoutuber
            status={v}
            onGoingYoutubers={props.onGoingYoutubers}
            errorYoutubers={props.errorYoutubers}
            completeYoutubers={props.completeYoutubers}
            isError={props.isError}
            countOfErr={props.countOfErr}
            handleIndex={props.handleIndex}
            youtuberIndex={props.youtuberIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default CrawlingStatus;
