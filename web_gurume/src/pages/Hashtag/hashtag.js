import React, { useState, useEffect } from 'react'
import HashtagBox from '../../components/Hashtag/HashtagBox'
import { TitleDiv, BodyFrame } from '../../styledFile'
import axios from 'axios'
import IMAGE from '../../assets/image/hashBackground.png'

const Hashtag = () => {
  const [administratorTag, setAdministratorTag] = useState(null)
  const [tempBool, setTempBool] = useState(1)

  const fetchAdminTag = async () => {
    await axios.get(`http://13.125.69.16/admin/adminTagTb`).then((res) =>
      setAdministratorTag(res.data), // 데이터는 res.data 안에 들어있습니다.
    )
  }

  const backgroundCss = {
    opacity: '0.1',
    'z-index': '-1',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
  }

  useEffect(() => {
    fetchAdminTag()
  }, [])

  useEffect(() => {
    fetchAdminTag()
  }, [tempBool])

  return (
    <BodyFrame>
      <img src={IMAGE} style={backgroundCss} />
      <TitleDiv margin="0 0 0 20px"> 地域別のハッシュタグ </TitleDiv>
      {administratorTag ? (
        <HashtagBox
          adminTag={administratorTag.adminTag.regionTag}
          tempValue={true}
          tempBool={tempBool}
          setTempBool={setTempBool}
        />
      ) : (
        <div> loading... </div>
      )}

      <TitleDiv margin="0 0 0 20px"> 季節別のハッシュタグ </TitleDiv>
      {administratorTag ? (
        <HashtagBox adminTag={administratorTag.adminTag.seasonTag} />
      ) : (
        <div> loading... </div>
      )}
    </BodyFrame>
  )
}

export default Hashtag
