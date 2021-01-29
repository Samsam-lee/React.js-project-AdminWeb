import React from 'react'
import Youtuber from '../../../components/Youtuber/Youtuber'
import youtuberData from '../../../assets/youtuberData'

const youtuberInfo = () => {
    return (
        <div className="bodyFrame">
            <div className="assist">
                <div> 유튜버 목록 </div>
            </div>

            <div className="subFrame">
                {/* 유튜버 데이터 가져와서 Youtuber 컴포넌트에 넣음 */}
                {youtuberData.map(v=>
                    <Youtuber ytbData={v}/>
                )}
            </div>
        </div>
    )
}

export default youtuberInfo