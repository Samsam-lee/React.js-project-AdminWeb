import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  FlexDiv,
  Button,
  SearchTextInput,
  HashBox,
  DcButton,
} from '../../styledFile'

const AddressHashtag = (props) => {
  const [platformData, setPlatformData] = useState(null)
  const [address, setAddress] = useState(null)

  const handleDelete = async () => {
    await axios.delete(
      `http://13.125.69.16/admin/ytbCrawlingTb/video/delete/${props.youtuber}/${props.addrHashtag.video[0]._id}`,
    )
  }

  const handleSearch = () => {
    props.setMap(true)
  }

  const handleReSearch = () => {
    props.setMap(false)
  }

  const handleSave = () => {
    props.setMap(false)
  }

  const fetchPlatformData = async () => {
    await axios
      .put(
        `http://13.125.69.16/admin/ytbCrawlingTb/address/search/result/${address}`,
      )
      .then((res) => {
        setPlatformData(res.data)
      })
  }

  useEffect(() => {
    fetchPlatformData()
  }, [address])

  return (
    <Button width="750px" height="750px" position="relative">
      {props.map ? (
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
            <Button height="150px" margin="0 5px"></Button>
            <Button height="150px" margin="0 5px"></Button>
            <Button height="150px" margin="0 5px"></Button>
          </Button>
          <Button width="700px" height="490px"></Button>
          <DcButton right="180px" onClick={handleReSearch}>
            {' '}
            재검색{' '}
          </DcButton>
          <DcButton onClick={handleSave}> 저장 </DcButton>
        </>
      ) : (
        <>
          <FlexDiv fontSize="22px" margin="25px">
            주소 조합 후 검색
          </FlexDiv>
          <SearchTextInput width="670px" fontSize="25px"></SearchTextInput>
          <Button width="700px" height="515px">
            {props.addrHashtag.video[0].more.map((v) => (
              <HashBox> {v} </HashBox>
            ))}
          </Button>
          <FlexDiv>
            <DcButton right="170px" bottom="20px" onClick={handleDelete}>
              {' '}
              삭제{' '}
            </DcButton>
            <DcButton right="30px" bottom="20px" onClick={handleSearch}>
              {' '}
              검색{' '}
            </DcButton>
          </FlexDiv>
        </>
      )}
    </Button>
  )
}

export default AddressHashtag
