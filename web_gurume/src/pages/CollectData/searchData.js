import React, { useState, useEffect } from "react";
import axios from 'axios'
import {BodyFrame, FlexDiv} from '../../styledFile'
import queryString from "query-string";
import CrawlingStatus from '../../components/Crawling/CrawlingStatus'
import AddressHashtag from '../../components/Crawling/AddressHashtag'

const SearchData = (props) => {
  const [errYoutuber, setErrYoutuber] = useState(null);
  const [errVideo, setErrVideo] = useState(null);
  const [map, setMap] = useState(false);

  const handleSearch = (flag) => {
    setMap(flag)
  }

  const fetchErrYoutuber = async () => {
    await axios.get(`http://13.125.69.16/admin/ytbCrawlingTb/error`).then((res) => {
        setErrYoutuber(res.data); // 데이터는 res.data 안에 들어있습니다.
      });
  };

  const fetchErrVideo = async () => {
    await axios.get(`http://13.125.69.16/admin/ytbCrawlingTb/error/${queryString.parse(props.location.search).youtuber}`).then(res => {
      setErrVideo(res.data);
    })
  }

  useEffect(() => {
    fetchErrYoutuber();
    fetchErrVideo();
  }, [queryString.parse(props.location.search).youtuber]);

  return (
    <BodyFrame>
      {
        (errYoutuber && errVideo) 
        ? <FlexDiv>
            <CrawlingStatus crawlingStatusValue={errYoutuber} map={map} setMap={setMap} handleSearch={handleSearch}/>
            <AddressHashtag addrHashtag={errVideo} map={map} setMap={setMap} handleSearch={handleSearch}/>
          </FlexDiv>
        : <div> loading... </div>
      }
    </BodyFrame>
  );
};

export default SearchData;