import React from 'react'
import {Link} from 'react-router-dom'
import {Button, ImgDiv, FlexDiv} from '../../styledFile'

const Youtuber = (props) => {

    return (
        <Button>
            <Link to={`/bigGurume/youtuberVideo?youtuber=${props.ytbData.ytbChannel}`}>
                <FlexDiv>
                    {/* <ImgDiv> <img src={props.ytbData.ytbProfile}/> </ImgDiv> */}
                    <ImgDiv margin='10px'><img src={'https://yt3.ggpht.com/ytc/AAUvwnhaPx7YjAiaf2d8yUq45kjpIj-RaIA4Lp8RByfkdw=s176-c-k-c0x00ffffff-no-rj'}/></ImgDiv>
                    <FlexDiv flexDirection='column' textAlign='left' fontWeight='900' fontSize='16px'>
                        <div> {props.ytbData.ytbChannel} </div>
                        <div> 구독자 : {props.ytbData.ytbSubscribe / 10000}만명 </div>
                        <div> 동영상 : {props.ytbData.video.length}개 </div>
                    </FlexDiv>
                </FlexDiv>
            </Link>
        </Button>
    )
}



export default Youtuber
