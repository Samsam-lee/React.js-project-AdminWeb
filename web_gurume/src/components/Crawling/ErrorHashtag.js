import React from 'react'
import {FlexDiv, SearchTextInput, Button, DcButton, HashBox} from '../../styledFile'
import axios from 'axios'

const ErrorHashtag = (props) => {

    const combineAddress = (hashtagIndex, v) => {
        props.setHashCss(hashtagIndex)
        props.setTextValue(props.textValue+v)
    }

    const fetchPlatformData = async () => {
        await axios.post(
            `http://13.125.69.16/admin/ytbCrawlingTb/address/search/${props.address}`
        ).then((res) => {
            props.setPlatformData(res.data);
        });
    };

    const handleDelete = async () => {
        await axios.delete(
            `http://13.125.69.16/admin/ytbCrawlingTb/video/delete/${props.errVideo.ytbChannel}/${props.errVideo.video[props.index]._id}`
        );
    };
    
    const handleSearch = () => {
        props.setHashCss(null)
        props.setTextValue([])
        // fetchPlatformData()
        props.setMap(true);
    };

    const handleReset = () => {
        props.setHashCss(null)
        props.setTextValue([])
    }

    return (
        <>
        <FlexDiv fontSize="22px" margin="25px">
            주소 조합 후 검색
        </FlexDiv>
        <SearchTextInput width="530px" fontSize="25px" value={props.address}></SearchTextInput>
        <DcButton right='30px' bottom='625px' onClick={handleReset}>초기화</DcButton>
        <Button width="700px" height="515px">
            {props.errVideo.video[props.index].more.map((v) => (
                <HashBox border={props.hashCss == props.errVideo.video[props.index].more.indexOf(v) ? '2px solid #f97583' : ''} 
                onClick={() => combineAddress(props.errVideo.video[props.index].more.indexOf(v), v)}> {v} </HashBox>
            ))}
        </Button>
        <FlexDiv>
            <DcButton right="170px" bottom="20px" onClick={handleDelete}>
                비디오 삭제
            </DcButton>
            <DcButton right="30px" bottom="20px" onClick={handleSearch}>
                주소 검색
            </DcButton>
        </FlexDiv>   
        </>
    )
}

export default ErrorHashtag
