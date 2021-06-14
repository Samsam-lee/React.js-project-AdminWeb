import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { BodyFrame, FlexDiv, TitleDiv } from '../../styledFile'
import CrawlingStatus from '../../components/Crawling/CrawlingStatus'
import TestContext from '../../utils/TestContextProvider'

const CollectData = () => {

  
  /**
   * Socket
   */
  const {errorvideo} = useContext(TestContext)
  
  useEffect(() => {
    !errorvideo && setCrawlingData(errorvideo)
  }, [errorvideo])
  /** Socket */

  const [crawlingData, setCrawlingData] = useState(null)

  /** page 에 따른 데이터 렌더링 */
  const fetchCrawlingData = async () => {
    await axios
      .get(`http://13.125.69.16/admin/ytbCrawlingTb/socket`)
      .then((res) => {
        setCrawlingData(res.data) // 데이터는 res.data 안에 들어있습니다.
      })
  }
  /** */

  useEffect(() => {
    fetchCrawlingData()
  }, [])

  return (
    <BodyFrame>
      <TitleDiv>クローリングの状態</TitleDiv>
      <FlexDiv>
        {crawlingData ? <FlexDiv> 
          <CrawlingStatus crawlingData={crawlingData}/>
        </FlexDiv> : (
          <div> loading... </div>
        )}
      </FlexDiv>
    </BodyFrame>
  )
}

export default CollectData
