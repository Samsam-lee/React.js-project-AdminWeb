import React, {useState, useEffect} from 'react'
import Youtuber from '../../../components/Youtuber/Youtuber'
import axios from 'axios'
import {TitleDiv} from '../../../styledFile'

const YoutuberInfo = () => {

    const [youtubers, setYoutubers] = useState(null);

    const fetchYoutubers = async() => {
        await axios.get('http://13.125.69.16/admin/ytbChannelTb').then(res=>(
            setYoutubers(res.data.ytbChannelTb)
        ))
    }

    useEffect(() => {
        fetchYoutubers();
    }, [])

    if (!youtubers) return null
    
    return (
        <div className="bodyFrame">
            <TitleDiv> 유튜버 목록 </TitleDiv>
            <div>
                {/* 유튜버 데이터 가져와서 Youtuber 컴포넌트에 넣음 */}
                {youtubers.map(v=> <Youtuber ytbData={v}/>)}
            </div>
        </div>
    )
}

export default YoutuberInfo