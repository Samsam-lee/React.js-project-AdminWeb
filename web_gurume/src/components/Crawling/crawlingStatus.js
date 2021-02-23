import React from "react";
import { Link } from "react-router-dom";
import { FlexDiv, Button } from "../../styledFile";

const CrawlingStatus = (props) => {
  const statusText = ['진행', '에러', '완료']

  return (
    <>
      {statusText.map((v) => 
        <Button width="350px" height="750px" overFlow="scroll">
          <FlexDiv fontSize="22px" margin="25px">
            크롤링 {v} 유튜버
          </FlexDiv>

          {v == '진행' && props.crawlingData.map(v => 
              v.videoCount != v.completeCount && <Button width="300px" height="300px">
                <FlexDiv><img src="https://yt3.ggpht.com/ytc/AAUvwnhjhFWolM9jAf-swowMYGvgOEDHAnLZQmNvUnTGVw=s176-c-k-c0x00ffffff-no-rj" /></FlexDiv>
                <FlexDiv fontSize="20px" padding="15px 0">
                  {v.ytbChannel}
                </FlexDiv>
                <FlexDiv>에러 : {v.errCount} + 완성 : {v.completeCount}</FlexDiv>
                <FlexDiv>전체 영상 개수 : {v.videoCount}</FlexDiv>
              </Button>
            )}

          {v == '에러' && props.crawlingData.map(v => 
              v.errCount > 0 && <Button width="300px" height="300px">
                <Link to={`/bigGurume/collectData/search?youtuber=${v.ytbChannel}`}>
                <FlexDiv><img src="https://yt3.ggpht.com/ytc/AAUvwnhjhFWolM9jAf-swowMYGvgOEDHAnLZQmNvUnTGVw=s176-c-k-c0x00ffffff-no-rj" /></FlexDiv>
                <FlexDiv fontSize="20px" padding="15px 0">
                  {v.ytbChannel}
                </FlexDiv>
                <FlexDiv>에러 개수 : {v.errCount}</FlexDiv>
                <FlexDiv>전체 영상 개수 : {v.videoCount}</FlexDiv>
                </Link>
              </Button>
            )}

          {v == '완료' && props.crawlingData.map(v => 
              v.videoCount == v.completeCount && <Button width="300px" height="300px">
                <FlexDiv><img src="https://yt3.ggpht.com/ytc/AAUvwnhjhFWolM9jAf-swowMYGvgOEDHAnLZQmNvUnTGVw=s176-c-k-c0x00ffffff-no-rj" /></FlexDiv>
                <FlexDiv fontSize="20px" padding="15px 0">
                  {v.ytbChannel}
                </FlexDiv>
                <FlexDiv>전체 영상 개수 : {v.videoCount}</FlexDiv>
              </Button>
            )}
          
        </Button>
      )}
    </>
  );
};

export default CrawlingStatus;
