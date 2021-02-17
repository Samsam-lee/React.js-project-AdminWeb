import React from 'react'
import { FlexDiv, ImgDiv } from "../../styledFile";

const CrawlingStatus = (props) => {
    return (
        <FlexDiv >
            <FlexDiv> {props.crawlingStatusValue.status} </FlexDiv>
            {/* {props.crawlingStatusValue.data.map(v=>(
                <FlexDiv>
                    <FlexDiv><img src={v.ytbProfile}/></FlexDiv>
                    <FlexDiv>{v.ytbChannel}</FlexDiv>
                </FlexDiv>
            ))} */}
        </FlexDiv>
    )
}

export default CrawlingStatus