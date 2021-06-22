import React from 'react'
import {FlexDiv, Button, FixTextDiv, ImgDiv} from '../../styledFile'

const CrawlingVideo = (props) => {

    const chooseIndex = (index) => {
        props.setIndex(index)
        props.setMap(false)
        props.setTextValue([])
        props.setHashCss(null)
    }

    return (
        <Button width="350px" height="750px" overFlow="auto">
            <FlexDiv fontSize="22px" margin="25px">
                エラービデオ
            </FlexDiv>
            {props.errVideo.video.map(v => 
                <Button width="300px" height="250px" cursor='pointer'
                border={props.index == props.errVideo.video.indexOf(v) ? '2px solid #f97583' : ''}
                onClick={() => chooseIndex(props.errVideo.video.indexOf(v))}
                >
                    <ImgDiv margin='10px'><img src={v.ytbThumbnail} width='280px'/></ImgDiv>
                    <FixTextDiv fontSize="20px" padding="15px 0" >
                        {v.ytbVideoName}
                    </FixTextDiv>
                    <FlexDiv margin='0 0 0 85px'>照会数 : {(v.hits/10000).toFixed(1)}万回</FlexDiv>
                </Button>
            )}
        </Button>
    )
}

export default CrawlingVideo
