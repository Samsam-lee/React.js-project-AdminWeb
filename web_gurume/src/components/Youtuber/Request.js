import React from 'react'
import {Button, ImgDiv, FlexDiv, AgreeButton} from '../../styledFile'

const Request = (props) => {
    return (
        <Button>
            <a href={props.requestData.ytbLinkAddress}>
                <FlexDiv fontWeight='900' fontSize='15px'>
                    {/* <div><img src={props.requestData.ytbProfile}/></div> */}
                    <ImgDiv margin='10px'>
                        <img src='https://yt3.ggpht.com/ytc/AAUvwnhaPx7YjAiaf2d8yUq45kjpIj-RaIA4Lp8RByfkdw=s176-c-k-c0x00ffffff-no-rj-mo' width='200px'/>
                    </ImgDiv>

                    <FlexDiv flexDirection='column' textAlign='left'>
                        <div>{props.requestData.ytbChannel}</div>
                        <div>{props.requestData.ytbSubscribe / 10000}만 명</div>
                        <div>{props.requestData.ytbHits / 10000}만 회</div>
                        <div>{props.requestData.userTbId.userId}</div>
                    </FlexDiv>
                    <AgreeButton> 승인 </AgreeButton>
                </FlexDiv>
            </a>
        </Button>
    )
}

export default Request
