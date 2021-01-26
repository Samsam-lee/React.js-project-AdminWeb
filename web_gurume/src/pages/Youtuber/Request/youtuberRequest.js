import React from 'react'
import {Link} from 'react-router-dom'

const youtuberRequest = () => {
    return (
        <div className="bodyFrame">
            <div className="assist">

            </div>

            <div className="subFrame">
            <button><Link to='/bigGurume'> 유튜버 정보 페이지 </Link></button>
            <h1> 유튜버 신청 페이지 </h1>
            </div>
        </div>
    )
}

export default youtuberRequest
