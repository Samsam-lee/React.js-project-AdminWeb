import React, {useState, useEffect} from 'react'
import {FlexDiv, Button, DcButton} from '../../styledFile'
import axios from 'axios'
import GoogleMap from '../../utils/GoogleApi'

const SelectAddress = (props) => {

    const [platformData, setPlatformData] = useState([
        {
            "crawlingPlatform": "Google",
            "data": [
                {
                    "address": "대구광역시 수성구 황금동 동대구로 219",
                    "crawlingLocation": {
                        "lat": 35.84987200777492,
                        "lng": 128.6244778213711
                    },
                    "crawlingStore": "아웃백스테이크하우스 대구황금점"
                },
                {
                    "address": "대구광역시 수성구 ",
                    "crawlingLocation": {
                        "lat": 35.84987200777492,
                        "lng": 128.6234778213711
                    },
                    "crawlingStore": "아웃백"
                }
            ]
        },
        {
            "crawlingPlatform": "Naver",
            "data": [
                {
                    "address": "대구광역시 수성구 황금동 동대구로 219",
                    "crawlingLocation": {
                        "lat": 35.84881497862917,
                        "lng": 128.624296241206
                    },
                    "crawlingStore": "아웃백스테이크 황금점"
                }
            ]
        },
        {
            "crawlingPlatform": "Kakao",
            "data": []
        }
    ]);

    const handleReSearch = () => {
        props.setMap(false);
    };
    
    const handleSave = async () => {
        
        props.setMap(false);
    };
    
    const fetchPlatformData = async () => {
        await axios.post(
            `http://13.125.69.16/admin/ytbCrawlingTb/address/search/${props.address}`
        ).then((res) => {
            setPlatformData(res.data);
        });
    };

    return (
        <>
        <FlexDiv fontSize="22px" margin="25px">
            주소 선택
        </FlexDiv>
        <Button
            width="700px"
            height="150px"
            display="flex"
            border="0"
            boxShadow="0"
        >
            {platformData.map(v=><>
                <Button height="150px" margin="0 5px" overFlow='auto'>
                <FlexDiv fontSize='20px' margin='5px'>{v.crawlingPlatform}</FlexDiv>
                {v.data.length != 0 && 
                v.data.map(value => <FlexDiv flexDirection='column'>
                    <Button width='200px' height='80px' margin='0 0 10px 10px' cursor='pointer'>
                        <FlexDiv>{value.crawlingStore}</FlexDiv>
                        <FlexDiv>{value.address}</FlexDiv>
                    </Button>
                    </FlexDiv>)
                }
            </Button>
            </>)}
        </Button>

        <Button width="700px" height="490px" position='relative'>
            <GoogleMap platformData={platformData} />
        </Button>

        <DcButton right="180px" onClick={handleReSearch}>
            재검색
        </DcButton>
        <DcButton onClick={handleSave}> 저장 </DcButton>
        </>
    )
}

export default SelectAddress
