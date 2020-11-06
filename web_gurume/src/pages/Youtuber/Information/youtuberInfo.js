import React from 'react'
import {Link} from 'react-router-dom'

const youtuberInfo = () => {
    return (
        <div>
            {/* <h1>This page is youtuberInfo ~</h1> */}
            

            <div><Link to='/youtuberRequest'> 유튜버 신청 페이지 </Link></div>

            <div><Link to='/youtuberVideo'> 유튜버 비디오 </Link></div>
        </div>
    )
}

export default youtuberInfo
