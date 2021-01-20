import React from "react";
import { Link } from "react-router-dom";
import "./CrawlingYoutuber.css";

const CrawlingYoutuber = (props) => {
  switch (props.status) {
    case "진행 중":
      return (
        <div className="stateBox">
          {props.onGoingYoutubers.map((v) => (
            <>
              <div className="youtuber">
                <div>{v.ytbChannel}</div>
                <div>동영상 : {v.videoCount}개</div>
                <div>
                  {v.video.length} / {v.videoCount}
                </div>
                <div>{(v.video.length / v.videoCount) * 100}%</div>
              </div>
            </>
          ))}
        </div>
      );

    case "에러":
      return (
        <div className="stateBox">
          {props.errorYoutubers.map((v, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    return props.handleIndex ? props.handleIndex(index) : null;
                  }}
                  className={props.youtuberIndex == index ? "selectedErrorYoutuber" : "errorYoutuber"}
                >
                  <Link to={`/collectData/search?index=${index}`}>
                    <div>{v.ytbChannel}</div>
                    <div>동영상 : {v.videoCount}개</div>
                    <div>
                      완료된 영상 : {v.videoCount - props.countOfErr} /{" "}
                      {v.videoCount}
                    </div>
                    <div>
                      에러 발생 영상 : {props.countOfErr} / {v.videoCount}
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      );

    case "완료":
      return (
        <div className="stateBox">
          {props.completeYoutubers.map((v) => (
            <>
              <div className="youtuber">
                <div>{v.ytbChannel}</div>
                <div>동영상 : {v.videoCount}개</div>
              </div>
            </>
          ))}
        </div>
      );
    default:
      break;
  }
};

export default CrawlingYoutuber;
