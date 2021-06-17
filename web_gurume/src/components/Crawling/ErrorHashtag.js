import React from "react";
import {
    FlexDiv,
    SearchTextInput,
    Button,
    DcButton,
    HashBox,
} from "../../styledFile";
import axios from "axios";

const ErrorHashtag = (props) => {
    const combineAddress = (hashtagIndex, v) => {
        props.setHashCss(hashtagIndex);
        props.setTextValue(props.textValue + v);
    };

    const fetchPlatformData = async () => {
        props.setIsLoading(true)
        // const { data } = await axios.post(
        //     `http://13.125.69.16/admin/ytbCrawlingTb/address/search/${props.address}`
        // );
        // console.log(data)
        // if(data[0] == null){
        //     props.setIsLoading(false)
        // } else{
        //     props.setPlatformData(data)
            props.setMap(true)
        // }
        props.setPlatformData([
            {
                "crawlingPlatform": "Google",
                "data" : [
                    {
                        "address": "대구광역시 수성구 황금동 동대구로 219",
                        "crawlingLocation": {
                            "lat": 35.84987200777492,
                            "lng": 128.6244778213711
                        },
                        "crawlingStore": "아웃백스테이크하우스 대구황금점"
                    }
                ]
            },
            {
                "crawlingPlatform": "Naver",
                "data" : [
                    {
                        "address": "대구광역시 수성구 황금동 동대구로 219",
                        "crawlingLocation": {
                            "lat": 35.88381497862917,
                            "lng": 128.594296241206
                        },
                        "crawlingStore": "아웃백스테이크 황금점"
                    }
                ]
            },
            {
                "crawlingPlatform": "Kakao",
                "data" : []
            }
        ])

        /* 원래 주석이었던 것
        // data && props.setMap(true)
        // data && props.setPlatformData(data)
        */
        props.setIsLoading(false)
        props.setTextValue([])
        props.setHashCss(null);
    };

    const handleDelete = async () => {
        await axios.delete(
            `http://13.125.69.16/admin/ytbCrawlingTb/video/delete/${
            props.errVideo.ytbChannel
            }/${props.errVideo.video[props.index]._id}`
        );
    };

    const handleSearch = () => {
        fetchPlatformData(); // server로 address 값 submit
    };

    const handleReset = () => {
        props.setHashCss(null);
        props.setTextValue([]);
    };

    return (
    <>
        <FlexDiv fontSize="22px" margin="25px">
        住所 조합 후 検索
        </FlexDiv>
        <SearchTextInput
        width="530px"
        fontSize="25px"
        value={props.address}
        ></SearchTextInput>
        <DcButton right="30px" bottom="625px" onClick={handleReset}>
            初期化
        </DcButton>
        <Button width="700px" height="515px">
        {props.errVideo.video[props.index].more.map((v, index) => (
            <HashBox
            border={props.hashCss == index ? "2px solid #f97583" : ""}
            onClick={() => combineAddress(index, v)}
            key={index}
            >
            {v}
            </HashBox>
        ))}
        </Button>
        <FlexDiv>
        <DcButton right="170px" bottom="20px" onClick={handleDelete}>
            動画削除
        </DcButton>
        <DcButton right="30px" bottom="20px" onClick={handleSearch}>
            住所検索
        </DcButton>
        </FlexDiv>
    </>
    );
};

export default ErrorHashtag;
