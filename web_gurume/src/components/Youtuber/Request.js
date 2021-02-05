import React from 'react'
import {Button, ImgDiv, FlexDiv, AgreeButton} from '../../styledFile'

const Request = (props) => {
    return (
        <Button width='500px' height='250px'>
            <a href={props.requestData.ytbLinkAddress}>
                <FlexDiv fontWeight='900' fontSize='15px'>
                    {/* <div><img src={props.requestData.ytbProfile}/></div> */}
                    <ImgDiv margin='15px' width='200px' height='200px'>
                        <img src='https://yt3.ggpht.com/ytc/AAUvwnhaPx7YjAiaf2d8yUq45kjpIj-RaIA4Lp8RByfkdw=s176-c-k-c0x00ffffff-no-rj-mo' width='200px'/>
                    </ImgDiv>

                    <FlexDiv flexDirection='column' textAlign='left'>
                        <div>{props.requestData.ytbChannel}</div>
                        <div>{props.requestData.ytbSubscribe / 10000}만 명</div>
                        <div>{props.requestData.ytbHits / 10000}만 회</div>
                        <div>{props.requestData.userTbId.userId}</div>
                    </FlexDiv>
                </FlexDiv>
            </a>
            <AgreeButton> 승인 </AgreeButton>
        </Button>
    )
}

export default Request
