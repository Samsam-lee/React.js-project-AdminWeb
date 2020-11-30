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
                  onClick={() =>
                    // url 검사 해 -> collectData/search 일때만 밑에 있는 프롭스 실행시키고
                    // collectData 페이지일때는 아에 실행안시키면 되지 않나?
                    // 위의 로직을 해결할시 unde~2번은 해결
                    // onClick이벤트가 2번 실행되는 이슐ㄹ 해결해보자..
                    {

                      // console.log(v, index)
                      return props.handleIndex ? props.handleIndex(index) : null
                    }
                  }
                  className="errorYoutuber"
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
