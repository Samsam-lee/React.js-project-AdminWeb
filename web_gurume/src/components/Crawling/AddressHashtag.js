import React from 'react'
import {FlexDiv, Button, SearchTextInput, HashBox, DcButton} from '../../styledFile'

const AddressHashtag = (props) => {
    return (
        <Button width='750px' height='785px' position='relative'>
            {props.map
            ?<> <FlexDiv fontSize='22px' margin='25px'>주소 선택</FlexDiv>
                <Button width='700px' height='150px' display='flex' border='0' boxShadow='0'>
                    <Button height='150px' margin='0 5px'></Button>
                    <Button height='150px' margin='0 5px'></Button>
                    <Button height='150px' margin='0 5px'></Button>
                </Button>
            <Button width='700px' height='520px'></Button>
            <DcButton right='180px'> 재검색 </DcButton>
            <DcButton> 저장 </DcButton>
            </>
            : <><FlexDiv fontSize='22px' margin='25px'>주소 조합 후 검색</FlexDiv>
                <SearchTextInput width='670px' fontSize='25px'></SearchTextInput>
                <Button width='700px' height='550px'>
                    {props.addrHashtag.video[0].more.map(v=>
                        <HashBox> {v} </HashBox>)}
                </Button>
                <FlexDiv>
                    <DcButton right='170px' bottom='20px'> 삭제 </DcButton>
                    <DcButton right='30px' bottom='20px' onClick={() => props.handleSearch(true)}> 검색 </DcButton>
                </FlexDiv></>}
        </Button>
    )
}

export default AddressHashtag
