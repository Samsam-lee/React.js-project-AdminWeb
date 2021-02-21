import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BodyFrame, FlexDiv, TitleDiv } from '../../styledFile'
import queryString from 'query-string'
import CrawlingVideo from '../../components/Crawling/CrawlingVideo'
import AddressHashtag from '../../components/Crawling/AddressHashtag'

const SearchData = (props) => {
  const [errVideo, setErrVideo] = useState(null)
  const [map, setMap] = useState(false)

  const fetchErrVideo = async () => {
    await axios.get(`http://13.125.69.16/admin/ytbCrawlingTb/error/${
          queryString.parse(props.location.search).youtuber
        }`,
      ).then((res) => {
        setErrVideo(res.data[0])
      })
  }

  useEffect(() => {
    fetchErrVideo();
  }, [])

  return (
    <BodyFrame>
      {errVideo ? (
        <>
          <TitleDiv> {errVideo.ytbChannel} </TitleDiv>
          <FlexDiv>
            <CrawlingVideo errVideo={errVideo} map={map} setMap={setMap}/>
            <AddressHashtag
              errVideo={errVideo}
              map={map}
              setMap={setMap}
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
