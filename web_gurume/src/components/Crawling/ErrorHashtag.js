import React, {useState, useEffect} from 'react'
import {FlexDiv, SearchTextInput, Button, DcButton, HashBox} from '../../styledFile'
import axios from 'axios'

const ErrorHashtag = (props) => {

    /**
     * 주소 해시태그 조합 알고리즘 다시
     */
    const [textIndexValue, setTextIndexValue] = useState([]);
    const combineAddress = (hashtagIndex) => {
        let num = 0
        textIndexValue.map(v=>
                v==hashtagIndex && num++
            )
        num > 0 && textIndexValue.splice(textIndexValue.indexOf(hashtagIndex),1)
        num == 0 && setTextIndexValue(() => [...textIndexValue, hashtagIndex])
    }

    useEffect(() => {
        let temp = ''
        textIndexValue.map(v => temp+=props.errVideo.video[props.index].more[v])
        props.setAddress(temp)
    },[textIndexValue])

    const handleDelete = async () => {
        await axios.delete(
            `http://13.125.69.16/admin/ytbCrawlingTb/video/delete/${props.errVideo.ytbChannel}/${props.errVideo.video[props.index]._id}`
        );
    };
    
    const handleSearch = () => {
        props.setMap(true);
    };

    return (
        <>
        <FlexDiv fontSize="22px" margin="25px">
            주소 조합 후 검색
        </FlexDiv>
        <SearchTextInput width="670px" fontSize="25px" value={props.address}></SearchTextInput>
        <Button width="700px" height="515px">
            {props.errVideo.video[props.index].more.map((v) => (
                <HashBox onClick={() => combineAddress(props.errVideo.video[props.index].more.indexOf(v))}> {v} </HashBox>
            ))}
        </Button>
        <FlexDiv>
            <DcButton right="170px" bottom="20px" onClick={handleDelete}>
                삭제
            </DcButton>
            <DcButton right="30px" bottom="20px" onClick={handleSearch}>
                검색
            </DcButton>
        </FlexDiv>   
        </>
    )
}

export default ErrorHashtag
