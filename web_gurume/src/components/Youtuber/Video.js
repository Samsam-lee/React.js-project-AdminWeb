import React from 'react'
import { convertDate } from '../../utils/date'
import { Button, ImgDiv, FlexDiv, FixTextDiv } from '../../styledFile'

const viewVideo = (video) => {
  window.open(video, '_blank')
}

const Video = (props) => {
  return (
    <Button height="300px">
      <FlexDiv
        flexDirection="column"
        textAlign="center"
        fontWeight="900"
        fontSize="15px"
        cursor="pointer"
        onClick={() => viewVideo(props.videoData.ytbAddress)}
      >
        <ImgDiv margin="10px" width="300px" height="200px">
          <img src={props.videoData.ytbThumbnail} />
        </ImgDiv>
        <FixTextDiv>{props.videoData.ytbVideoName}</FixTextDiv>
        <div>照会数 : {props.videoData.hits}回</div>
        <div>アップロードの日付 : {convertDate(props.videoData.uploadDate)}</div>
      </FlexDiv>
    </Button>
  )
}

export default Video
