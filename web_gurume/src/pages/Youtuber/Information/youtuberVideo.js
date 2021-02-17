import React, {useState, useEffect} from 'react'
import Video from '../../../components/Youtuber/Video'
import axios from 'axios'
import queryString from "query-string";
import {TitleDiv, BodyFrame, FlexDiv} from '../../../styledFile'

const YoutuberVideo = (props) => {

    const [youtuber, setYoutuber] = useState(null);

    const fetchYoutuber = async () => {await axios.get(
        `http://13.125.69.16/admin/ytbChannelTb/show/${queryString.parse(props.location.search).youtuber}`).then(res=>(
            setYoutuber(res.data) // 데이터는 res.data 안에 들어있습니다.
        ))
    };

    useEffect(() => {
        fetchYoutuber();
    }, []);
    
    return (
        <BodyFrame>
            <TitleDiv>{queryString.parse(props.location.search).youtuber}</TitleDiv>
            <FlexDiv flexWrap='wrap'>
                {youtuber
                ? youtuber.video.map(v => <Video videoData={v}/>)
                : <div> loading... </div>}
            </FlexDiv>
        </BodyFrame>
    )
}

export default YoutuberVideo
