import React from 'react'
import {Link} from 'react-router-dom'

const youtuberRequest = () => {
    return (
        <div className="bodyFrame">
            <div className="assist">

            </div>

            <div className="subFrame">
            <button><Link to='/'> 유튜버 정보 페이지 </Link></button>
            </div>
        </div>
    )
}

export default youtuberRequest
