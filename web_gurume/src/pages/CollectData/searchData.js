import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BodyFrame, FlexDiv, TitleDiv } from '../../styledFile'
import queryString from 'query-string'
import CrawlingStatus from '../../components/Crawling/CrawlingStatus'
import AddressHashtag from '../../components/Crawling/AddressHashtag'

const SearchData = (props) => {
  const [errYoutuber, setErrYoutuber] = useState(null)
  const [errVideo, setErrVideo] = useState(null)
  const [map, setMap] = useState(false)

  const fetchErrYoutuber = async () => {
    await axios
      .get(`http://13.125.69.16/admin/ytbCrawlingTb/error`)
      .then((res) => {
        setErrYoutuber(res.data) // 데이터는 res.data 안에 들어있습니다.
      })
  }

  const fetchErrVideo = async () => {
    await axios
      .get(
        `http://13.125.69.16/admin/ytbCrawlingTb/error/${
          queryString.parse(props.location.search).youtuber
        }`,
      )
      .then((res) => {
        setErrVideo(res.data)
      })
  }

  useEffect(() => {
    fetchErrYoutuber()
    fetchErrVideo()
  }, [queryString.parse(props.location.search).youtuber])

  return (
    <BodyFrame>
      {errYoutuber && errVideo ? (
        <>
          <TitleDiv> 데이터 수집 </TitleDiv>
          <FlexDiv>
            <CrawlingStatus crawlingStatusValue={errYoutuber} setMap={setMap} />
            <AddressHashtag
              addrHashtag={errVideo}
              map={map}
              setMap={setMap}
              youtuber={queryString.parse(props.location.search).youtuber}
            />
          </FlexDiv>
        </>
      ) : (
        <div> loading... </div>
      )}
    </BodyFrame>
  )
}

export default SearchData
