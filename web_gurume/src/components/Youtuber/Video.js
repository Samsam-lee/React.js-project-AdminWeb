import React from 'react'

const Video = (props) => {
    return (
        <div>
            <a href={props.videoData.ytbAddress}>
                <div><img src={props.videoData.ytbThumbnail}/></div>
                <div>{props.videoData.ytbVideoName}</div>
                <div>조회수 {props.videoData.hits}회</div>
                <div>업로드 날짜 {props.videoData.uploadDate.$date}</div>
            </a>
        </div>
    )
}

export default Video
