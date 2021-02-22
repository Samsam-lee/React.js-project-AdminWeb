import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BodyFrame, FlexDiv, TitleDiv } from '../../styledFile'
import queryString from 'query-string'
import CrawlingVideo from '../../components/Crawling/CrawlingVideo'
import SelectErrorVideo from '../../components/Crawling/SelectErrorVideo'

const SearchData = (props) => {
  const [errVideo, setErrVideo] = useState(null)
  const [map, setMap] = useState(false)
  const [index, setIndex] = useState(0)

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

  useEffect(() => {
    setMap(false);
  }, [index])

  return (
    <BodyFrame>
      {errVideo ? (
        <>
          <TitleDiv> {errVideo.ytbChannel} </TitleDiv>
          <FlexDiv>
            <CrawlingVideo errVideo={errVideo} setMap={setMap} index={index} setIndex={setIndex}/>
            <SelectErrorVideo
              errVideo={errVideo}
              map={map}
              setMap={setMap}
              index={index}
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
