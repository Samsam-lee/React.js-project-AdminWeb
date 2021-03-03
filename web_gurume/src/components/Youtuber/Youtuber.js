import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ImgDiv, FlexDiv } from '../../styledFile'

const Youtuber = (props) => {
  return (
    <Button>
      <Link
        to={`/bigGurume/youtuberVideo?youtuber=${props.ytbData.ytbChannel}`}
      >
        <FlexDiv alignItems='center'>
          <ImgDiv margin="10px">
            <img src={props.ytbData.ytbProfile} />
          </ImgDiv>
          <FlexDiv
            flexDirection="column"
            textAlign="left"
            fontWeight="900"
            fontSize="16px"
            margin="25px 0"
          >
            <div style={{ 'font-size': '20px', 'padding-bottom': '15px' }}>
              {props.ytbData.ytbChannel}
            </div>
            <div>
              구독자 : {(props.ytbData.ytbSubscribe / 10000).toFixed(1)}만명
            </div>
            <div> 동영상 : {props.ytbData.video.length}개 </div>
          </FlexDiv>
        </FlexDiv>
      </Link>
    </Button>
  )
}

export default Youtuber
