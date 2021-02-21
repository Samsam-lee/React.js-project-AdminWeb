import React from 'react'
import {FlexDiv, Button, FixTextDiv, ImgDiv} from '../../styledFile'

const CrawlingVideo = (props) => {
    return (
        <Button width="350px" height="750px" overFlow="scroll">
            <FlexDiv fontSize="22px" margin="25px">
                에러 비디오
            </FlexDiv>

            {props.errVideo.video.map(v => 
                <Button width="300px" height="230px">
                    <ImgDiv margin='10px'><img src="https://i.ytimg.com/an_webp/QQaWoKKgSQs/mqdefault_6s.webp?du=3000&sqp=CJDUwoEG&rs=AOn4CLBtAtLlAwzfXxaYzN1vt1u5DeMoWg" /></ImgDiv>
                    <FixTextDiv fontSize="20px" padding="15px 0" >
                        {v.ytbVideoName}
                    </FixTextDiv>
                </Button>
            )}
        </Button>
    )
}

export default CrawlingVideo
