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
          <div>登録者数 : {(props.requestData.ytbSubscribe / 10000).toFixed(1)}万人</div>
          <div>照会数 : {(props.requestData.ytbHits / 10000).toFixed(1)}万回</div>
          <div>申請したユーザーのニックネーム : {props.requestData.userTbId.userId}</div>
        </FlexDiv>
      </FlexDiv>
      <AgreeButton onClick={() => reqYtbAgree(props.requestData.ytbChannel)}>
        承認
      </AgreeButton>
      <AgreeButton
        right="65px"
        onClick={() => reqYtbDelete(props.requestData.ytbChannel)}
      >
        削除
      </AgreeButton>
    </Button>
  )
}

export default Request
