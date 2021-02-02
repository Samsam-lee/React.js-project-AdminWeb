import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../../styledFile'

const Youtuber = (props) => {

    return (
        <Button>
            <Link to={`/bigGurume/youtuberVideo?youtuber=${props.ytbData.ytbChannel}`}>
                <div> <img src={props.ytbData.ytbProfile}/> </div>
                <div>
                    <div> {props.ytbData.ytbChannel} </div>
                    <div> 구독자 : {props.ytbData.ytbSubscribe}명 </div>
                    <div> 동영상 : {props.ytbData.video.length}개 </div>
                </div>
            </Link>
        </Button>
    )
}



export default Youtuber
