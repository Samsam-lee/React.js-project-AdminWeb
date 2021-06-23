import React, {useContext} from "react";
import {
    FlexDiv,
    SearchTextInput,
    Button,
    DcButton,
    HashBox,
} from "../../styledFile";
import axios from "axios";
import TestContext from '../../utils/TestContextProvider'
import load from '../../assets/image/loading.gif'

const ErrorHashtag = (props) => {

    const {socket} = useContext(TestContext)

    socket.on('addressData', argAddressData => {
        props.setIsLoading(false)

        console.log(argAddressData)

        props.setPlatformData(argAddressData)
        props.setMap(true)
    })

    const combineAddress = (hashtagIndex, v) => {
        props.setHashCss(hashtagIndex);
        props.setTextValue(props.textValue + v);
    };

    const fetchPlatformData = async () => {
        props.setIsLoading(true)

        await axios.get(
            `https://cznq5drfc1.execute-api.ap-northeast-2.amazonaws.com/maps/${props.address}`
        )
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
            住所検索
        </FlexDiv>
        <SearchTextInput
        width="530px"
        fontSize="25px"
        value={props.address}
        ></SearchTextInput>
        <DcButton right="30px" bottom="625px" onClick={handleReset}>
            初期化
        </DcButton>

        <Button width="700px" height="515px" overFlow='scroll'>
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
