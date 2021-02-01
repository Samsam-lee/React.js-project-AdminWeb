import React from 'react'
import youtuberData from '../../../assets/youtuberData'
import Video from '../../../components/Youtuber/Video'

const youtuberVideo = (props) => {
    return (
        <div className="bodyFrame">
            <div className="assist">
                {/* youtuberData[4] 는 api 받아왔을 때 값 변경 */}
                <div> {youtuberData[4].ytbChannel} </div>
            </div>

            <div className="subFrame">
                {/* youtuberData[4] 는 변경하고 map 돌려서 Video component로 데이터 전송 */}
                {youtuberData[4].video.map(v => <Video videoData={v}/>)}
            </div>
        </div>
    )
}

export default youtuberVideo
