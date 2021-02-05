import React from 'react'
import {Button, ImgDiv, FlexDiv} from '../../styledFile'

const Request = (props) => {
    return (
        <Button>
            <a href={props.requestData.ytbLinkAddress}>
                <div><img src={props.requestData.ytbProfile}/></div>
                <div>{props.requestData.ytbChannel}</div>
                <div>{props.requestData.ytbSubscribe}</div>
                <div>{props.requestData.ytbHits}</div>
                <div>{props.requestData.userId}</div>
            </a>
        </Button>
    )
}

export default Request
