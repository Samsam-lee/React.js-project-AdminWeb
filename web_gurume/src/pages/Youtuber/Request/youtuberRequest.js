import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Request from '../../../components/Youtuber/Request'
import {TitleDiv} from '../../../styledFile'

const YoutuberRequest = () => {
    const [youtuberRequest, setYoutuberRequest] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchYoutuberRequest = async () => {
            try {
                setError(null);
                setYoutuberRequest(null);
                setLoading(true);
                const response = await axios.get(
                    `http://13.125.69.16/admin/ytbReqTb`
                );
                setYoutuberRequest(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
    };
    fetchYoutuberRequest();
    }, []);

    if (loading) return <div> 로딩중.. </div>;
    if (error) return <div> error </div>;
    if (!youtuberRequest) return null;

    return (
        <div className="bodyFrame">
            <TitleDiv> 유튜버 신청 목록 </TitleDiv>
            <div>
                {youtuberRequest.ytbReqTb.map(v =>
                    <Request requestData={v}/>
                )}
            </div>
        </div>
    )
}

export default YoutuberRequest
