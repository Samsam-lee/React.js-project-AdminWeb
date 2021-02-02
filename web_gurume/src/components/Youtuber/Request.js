import React from 'react'

const Request = (props) => {
    return (
        <div>
            <a href={props.requestData.ytbLinkAddress}>
                <div><img src={props.requestData.ytbProfile}/></div>
                <div>{props.requestData.ytbChannel}</div>
                <div>{props.requestData.ytbSubscribe}</div>
                <div>{props.requestData.ytbHits}</div>
                <div>{props.requestData.userId}</div>
            </a>
        </div>
    )
}

export default Request
