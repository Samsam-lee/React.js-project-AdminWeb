import React from 'react'
import {Link} from 'react-router-dom'
import './youtuberInfo.css'
import Youtuber from '../../../components/Youtuber/Youtuber'

const youtuberInfo = () => {
    return (
        <div className="bodyFrame">
            <div className="assist">

            </div>

            <div className="subFrame">
                {/* map 돌리기 */}
                <h1> 유튜버 정보 페이지 </h1>
                <button><Link to='/youtuberRequest'> 유튜버 신청 페이지 </Link></button>
                <button><Link to='/youtuberVideo'> 유튜버 비디오 </Link></button>
                <Youtuber /> 
            </div>
        </div>
    )
}

export default youtuberInfo



            