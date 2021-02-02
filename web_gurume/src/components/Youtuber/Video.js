import React from 'react'
import {convertDate} from'../../utils/date'

const Video = (props) => {
    return (
        <div>
            <a href={props.videoData.ytbAddress}>
                <div><img src={props.videoData.ytbThumbnail}/></div>
                <div>{props.videoData.ytbVideoName}</div>
                <div>조회수 {props.videoData.hits}회</div>
                <div>업로드 날짜 {convertDate(props.videoData.uploadDate)}</div>
            </a>
            {/* <div>{props.videoData.ytbStoreTbId.regionTag}</div>
            <div>{props.videoData.ytbStoreTbId.storeInfo.storeName}</div> */}
        </div>
    )
}

export default Video
