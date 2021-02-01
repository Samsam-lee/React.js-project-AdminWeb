import React from 'react'
import ytbRequestData from '../../../assets/ytbReqTb'
import Request from '../../../components/Youtuber/Request'
import './youtuberRequest.css'

const youtuberRequest = () => {
    return (
        <div className="bodyFrame">

            <div className="assist">
                <span> 유튜버 신청 목록 </span>
                <button className='AgreeYtb'> 유튜버 승인 </button>
            </div>

            <div className="subFrame">
                {ytbRequestData.map(v =>
                    <>
                    <input type='checkbox' name='ytbReqInfo' value={v}/>
                    <Request requestData={v}/>
                    </>
                )}
            </div>
            
        </div>
    )
}

export default youtuberRequest
