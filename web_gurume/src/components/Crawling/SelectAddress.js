import React, {useState, useEffect, useRef} from 'react'
import {FlexDiv, Button, DcButton} from '../../styledFile'
import axios from 'axios'
import GoogleMap from '../../utils/GoogleApi'
import RegionTag from '../../utils/RegionTag'

const SelectAddress = (props) => {

    const [platformFlag, setPlatformFlag] = useState(false)
    const [indexFlag, setIndexFlag] = useState(false)

    const [giveData, setGiveData] = useState(null)
    const [location, setLocation] = useState(null)
    const [storeName, setStoreName] = useState(null)

    const selectAddrCss = (platform, index, store) => {
        props.errVideo.video[props.index].storeInfo = platform.data[props.index]
        console.log(store) // storeAddress : {store}
        // console.log(props.errVideo)
        setLocation({'lat': store.crawlingLocation.lat + 0.0005, 'lng': store.crawlingLocation.lng}) // lat + 0.0005
        setStoreName(store.crawlingStore)
        setGiveData({
            "video": [{
                "_id": props.errVideo.video[index]._id,
                "storeInfo": {
                    "location": {
                        "lat": store.crawlingLocation.lat,
                        "lng": store.crawlingLocation.lng
                    },
                    "storeName": store.crawlingStore,
                    "storeAddress": store.address,
                    "typeStore": "맛집"
                },
                "status": "완료",
                "regionTag": RegionTag(store.address)
        }]})
        setPlatformFlag(platform.crawlingPlatform)
        setIndexFlag(index)
        // console.log(props.errVideo.ytbChannel)
    }

    const handleSave = async () => {
        await axios.post(
            `http://13.125.69.16/admin/ytbCrawlingTb/save/video/${props.errVideo.ytbChannel}`,
            giveData
        )
        console.log(giveData)
        props.errVideo.video.length == 1 ? document.location.href='/bigGurume/collectData' : console.log('more err video')
        props.setMap(false);
    };

    const handleReSearch = () => {
        props.setMap(false);
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
            {props.platformData.map(v=><>
                <Button height="150px" margin="0 5px" overFlow='auto'>
                <FlexDiv fontSize='20px' margin='5px'>{v.crawlingPlatform}</FlexDiv>
                {v.data.length != 0 && 
                v.data.map(value => <FlexDiv flexDirection='column'>
                    <Button width='190px' height='80px' margin='0 0 10px 8px' cursor='pointer'
                    border={(platformFlag == v.crawlingPlatform && indexFlag == v.data.indexOf(value)) ? '2px solid #f97583' : ''}
                    onClick={() => selectAddrCss(v, v.data.indexOf(value), value)}>
                        <FlexDiv>{value.crawlingStore}</FlexDiv>
                        <FlexDiv>{value.address}</FlexDiv>
                    </Button>
                    </FlexDiv>)
                }
            </Button>
            </>)}
        </Button>

        <Button width="700px" height="490px" position='relative'>
            <GoogleMap platformData={props.platformData} location={location} storeName={storeName}/>
        </Button>

        <DcButton right="180px" onClick={handleReSearch}>
            재검색
        </DcButton>
        <DcButton onClick={handleSave}> 저장 </DcButton>
        </>
    )
}

export default SelectAddress
