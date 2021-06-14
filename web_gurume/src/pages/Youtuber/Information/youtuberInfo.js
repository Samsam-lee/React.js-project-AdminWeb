import React, { useState, useEffect } from 'react'
import Youtuber from '../../../components/Youtuber/Youtuber'
import axios from 'axios'
import { TitleDiv, BodyFrame, FlexDiv } from '../../../styledFile'

const YoutuberInfo = () => {
  const [youtubers, setYoutubers] = useState(null)

  const fetchYoutubers = async () => {
    await axios
      .get('http://13.125.69.16/admin/ytbChannelTb')
      .then((res) => setYoutubers(res.data.ytbChannelTb))
  }

  useEffect(() => {
    fetchYoutubers()
  }, [])

  return (
    <BodyFrame>
      <TitleDiv> ユーチューバーのリスト </TitleDiv>
      <FlexDiv flexWrap="wrap">
        {youtubers ? (
          youtubers.map((v) => <Youtuber ytbData={v} />)
        ) : (
          <div> loading... </div>
        )}
      </FlexDiv>
    </BodyFrame>
  )
}

export default YoutuberInfo
