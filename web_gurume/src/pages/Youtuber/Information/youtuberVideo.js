import React, {useState, useEffect} from 'react'
import Video from '../../../components/Youtuber/Video'
import axios from 'axios'
import queryString from "query-string";

const YoutuberVideo = (props) => {

    const [youtuber, setYoutuber] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchYoutuber = async () => {
            try {
                setError(null);
                setYoutuber(null);
                setLoading(true);
                const response = await axios.get(
                    `http://localhost:3000/ytbChannelTb/show/${queryString.parse(props.location.search).youtuber}`
                );
                setYoutuber(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
    };
    fetchYoutuber();
    }, []);

    if (loading) return <div> 로딩중.. </div>;
    if (error) return <div> error </div>;
    if (!youtuber) return null;

    return (
        <div className="bodyFrame">
            <div className="assist">
                <h1> {queryString.parse(props.location.search).youtuber} </h1>
            </div>

            <div className="subFrame">
                {youtuber.userTb[0].video.map(v => <Video videoData={v}/>)}
            </div>
        </div>
    )
}

export default YoutuberVideo
