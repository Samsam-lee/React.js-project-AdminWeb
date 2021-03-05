import React from 'react'
import { Button, ImgDiv, FlexDiv, AgreeButton } from '../../styledFile'
import axios from 'axios'

const Request = (props) => {
  const reqYtbAgree = async (youtuber) => {
    await axios.put(`http://13.125.69.16/admin/ytbReqTb/recognize/${youtuber}`)
    // props.setYoutuberRequest(null)
  }

  const reqYtbDelete = async (youtuber) => {
    await axios.delete(`http://13.125.69.16/admin/ytbReqTb/delete/${youtuber}`)
    // props.setYoutuberRequest(null)
  }

  const searchYoutuber = () => {
    window.open(props.requestData.ytbLinkAddress, '_blank')
  }

  return (
    <Button position="relative">
      <FlexDiv fontSize="15px" onClick={searchYoutuber} cursor="pointer">
        <ImgDiv margin="10px">
          <img
          src={'https:'+props.requestData.ytbProfile}
          width="200px"/>
          {/* {console.log(props.requestData.ytbProfile)} */}
        </ImgDiv>

        <FlexDiv flexDirection="column" textAlign="left">
          <div style={{ 'font-size': '20px', padding: '20px 0' }}>
            {props.requestData.ytbChannel}
          </div>
          <div>구독자 수 : {(props.requestData.ytbSubscribe / 10000).toFixed(1)}만 명</div>
          <div>조회 수 : {(props.requestData.ytbHits / 10000).toFixed(1)}만 회</div>
          <div>신청한 유저 닉네임 : {props.requestData.userTbId.userId}</div>
        </FlexDiv>
      </FlexDiv>
      <AgreeButton onClick={() => reqYtbAgree(props.requestData.ytbChannel)}>
        승인
      </AgreeButton>
      <AgreeButton
        right="65px"
        onClick={() => reqYtbDelete(props.requestData.ytbChannel)}
      >
        삭제
      </AgreeButton>
    </Button>
  )
}

export default Request
