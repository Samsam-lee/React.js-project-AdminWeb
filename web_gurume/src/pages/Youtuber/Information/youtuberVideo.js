import React, {useState, useEffect} from 'react'
import Video from '../../../components/Youtuber/Video'
import axios from 'axios'
import queryString from "query-string";
import {TitleDiv} from '../../../styledFile'

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

    if (!youtuber) return null;

    return (
        <div className="bodyFrame">
            <TitleDiv>{queryString.parse(props.location.search).youtuber}</TitleDiv>
            <div>
                {/* 해당 유튜버 video 데이터 */}
                {youtuber.video.map(v => <Video videoData={v}/>)}
            </div>
        </div>
    )
}

export default YoutuberVideo
