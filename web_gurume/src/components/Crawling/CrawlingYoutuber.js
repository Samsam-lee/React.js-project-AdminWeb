import React, {useState} from 'react'
import './CrawlingYoutuber.css'

const ConvertError = (data) => {
    let isError = false
    let countOfErr = 0
    data.video.map(value => {
        if (value.status === '에러') {
            isError = true
            countOfErr++
        }
    })

    return {isError, countOfErr}
    // for(let key in data.video){
    //     if(data.video[key].status === '에러'){
    //         return true
    //     }
    // }
}

const CrawlingYoutuber = (props) => {
    const [errorVideos, setErrorVideos] = useState([])
    const [completeVideos, setCompleteVidoes] = useState([])
    const [onGoingVideos, setOnGoingVidoes] = useState([])

    // useEffect 사용

    
    switch(props.status){
        case '진행 중':
            return (<>
                {props.data.map(v => 
                <> {v.video.length < v.videoCount 
                ? <div className='youtuber'>
                    <div>{v.ytbChannel}</div>
                        <div>동영상 : {v.videoCount}개</div>
                        <div>{v.video.length} / {v.videoCount}</div>
                        <div>{v.video.length/v.videoCount*100}%</div>
                </div> 
                : null}
                </>)}
                </>
            )
        case '에러':
            return (<>
                {props.data.map(v => 
                    // const {isError, countOFErr} = ConvertError(v)
                    <> {(v.video.length == v.videoCount && ConvertError(v).isError)
                    ? <div className='youtuber'>
                        <div>{v.ytbChannel}</div>
                        <div>동영상 : {v.videoCount}개</div>
                        <div>완료된 영상 : {} / {v.videoCount}</div>
                        <div>에러 발생 영상 : {} / {v.videoCount}</div>
                    </div> 
                    : null}
                    </>)}
                </>
            )
        case '완료':
            return (<>
                {props.data.map(v => 
                    <> {(v.video.length == v.videoCount) && !(ConvertError(v).isError)
                    ? <div className='youtuber'>
                        <div>{v.ytbChannel}</div>
                        <div>동영상 : {v.videoCount}개</div>
                    </div> 
                    : null}
                    </>)}
                </>
            )
        default:
            break;
    }

    
}

export default CrawlingYoutuber
