import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Request from '../../../components/Youtuber/Request'
import { TitleDiv, BodyFrame, FlexDiv } from '../../../styledFile'

const YoutuberRequest = () => {
  const [youtuberRequest, setYoutuberRequest] = useState(null)
  const [tempDataa, setTempDataa] = useState(1)

  const fetchYoutuberRequest = async () => {
    await axios.get(`http://13.125.69.16/admin/ytbReqTb`).then((res) =>
      setYoutuberRequest(res.data.ytbReqTb), // 데이터는 res.data 안에 들어있습니다.
    )
  }

  useEffect(() => {
    fetchYoutuberRequest()
  }, [tempDataa])

  return (
    <BodyFrame>
      <TitleDiv> ユーチューバー申請リスト </TitleDiv>
      <FlexDiv flexWrap="wrap">
        {youtuberRequest ? (
          youtuberRequest.map((v) => (
            <Request requestData={v} tempData={tempDataa} setTempData={setTempDataa}/>
          ))
        ) : (
          <div> loading... </div>
        )}
      </FlexDiv>
    </BodyFrame>
  )
}

export default YoutuberRequest
