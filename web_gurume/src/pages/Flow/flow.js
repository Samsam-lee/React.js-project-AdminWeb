import React, { useState, useEffect } from 'react'
import SearchBox from '../../components/SearchBox'
import Table from '../../components/Table'
import Pagination from '../../utils/Pagination'
import axios from 'axios'
import { FlexDiv, TitleDiv, BodyFrame } from '../../styledFile'

const Flow = () => {
  const [option, setOption] = useState('region')
  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [flowData, setFlowData] = useState(null)

  /** page 에 따른 데이터 렌더링 */
  const fetchFlowData = async () => {
    await axios
      .get(`http://13.125.69.16/admin/shareFlowTb/?page=${currentPage}`)
      .then((res) => {
        setFlowData(res.data) // 데이터는 res.data 안에 들어있습니다.
        res.data == null ? setCurrentPage(1) : console.log(res.data)
        
      })
  }
  /** */

  /** 검색에 따른 데이터 렌더링 */
  const fetchSearchData = async () => {
    await axios
      .get(`http://13.125.69.16/admin/shareFlowTb/${option}/${searchText}`)
      .then((res) => {
        setFlowData(res.data)
      })
      .catch((e) => {
        fetchFlowData()
      })
  }
  /** */
  console.log('option : ' +option)
  console.log('searchText : ' +searchText)

  /** 페이지 네이션 -> 데이터 렌더링 */
  useEffect(() => {
    setFlowData(null)
    fetchFlowData()
  }, [currentPage])
  /** */

  /** 검색 결과에 따른 데이터 렌더링 */
  const handleSearch = (e) => {
    e.preventDefault() // 새로고침 x
    setFlowData(null)
    // !option && setCurrentPage(1)
    searchText && fetchSearchData()
    !searchText && setCurrentPage(1)
    !searchText && fetchFlowData()
    setSearchText(searchText)
    setOption(option)
  }
  /** */

  return (
    <BodyFrame>
      <TitleDiv> ルートリスト </TitleDiv>
      {flowData ? (
        <FlexDiv flexDirection="column">
          <Table
            title="flow"
            opt={[
              '地域',
              'ルートのタイトル',
              'ID',
              '作成の日付',
              'アップデートの日付',
              '照会数',
            ]}
            data={flowData.collection}
          />
          <Pagination
            setCurrentPage={setCurrentPage}
            first={flowData.first}
            last={flowData.last}
            next={flowData.next}
            prev={flowData.prev}
          />
        </FlexDiv>
      ) : (
        <div> loading... </div>
      )}
      <SearchBox
        opt={[
          { value: 'region', text: '地域' },
          { value: 'id', text: 'ID' },
          { value: 'title', text: 'ルートのタイトル' },
        ]}
        pHolder="ルートを検索してください"
        setOption={setOption}
        setSearchText={setSearchText}
        option={option}
        handleSearch={handleSearch}
      />
    </BodyFrame>
  )
}

export default Flow
