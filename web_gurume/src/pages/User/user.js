import React, { useState, useEffect } from 'react'
import SearchBox from '../../components/SearchBox'
import Table from '../../components/Table'
import Pagination from '../../utils/Pagination'
import { FlexDiv, TitleDiv, BodyFrame } from '../../styledFile'
import axios from 'axios'

const User = () => {
  const [option, setOption] = useState('nickname')
  const [searchText, setSearchText] = useState('')
  const [userData, setUserData] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  /** page에 따른 데이터 렌더링 */
  const fetchUserData = async () => {
    await axios
      .get(`http://13.125.69.16/admin/userTb/?page=${currentPage}`)
      .then((res) =>
        setUserData(res.data), // 데이터는 res.data 안에 들어있습니다.
      )
  }
  /** */

  /** 검색에 따른 데이터 렌더링 */
  const fetchSearchData = async () => {
    console.log(option + '~~' + searchText + '~~' + currentPage)
    await axios
      .get(`http://13.125.69.16/admin/userTb/${option}/${searchText}`)
      .then((res) => {
        setUserData(res.data)
      })
      .catch((e) => {
        fetchUserData()
      })
  }
  /** */

  useEffect(() => {
    setUserData(null)
    fetchUserData()
  }, [currentPage])

  /** 검색 결과에 따른 데이터 렌더링 */
  const handleSearch = (e) => {
    e.preventDefault() // 새로고침 x
    setUserData(null)
    !option && setCurrentPage(1)
    searchText && fetchSearchData()
    !searchText && setCurrentPage(1)
    !searchText && fetchUserData()
    setSearchText('')
    setOption('nickname')
  }
  /** */

  return (
    <BodyFrame>
      <TitleDiv> 유저 리스트 </TitleDiv>
      {userData ? (
        <FlexDiv flexDirection="column">
          <Table
            title="user"
            opt={[
              '닉네임',
              '아이디',
              '동선 폴더 개수',
              '소셜 로그인 플랫폼',
              '메모',
            ]}
            data={userData.collection}
          />
          <Pagination
            setCurrentPage={setCurrentPage}
            first={userData.first}
            last={userData.last}
          />
        </FlexDiv>
      ) : (
        <div> loading... </div>
      )}

      <SearchBox
        opt={[
          { value: 'nickname', text: '닉네임' },
          { value: 'id', text: '아이디' },
          { value: 'memo', text: '메모' },
        ]}
        pHolder="유저를 검색해주세요"
        setOption={setOption}
        setSearchText={setSearchText}
        option={option}
        handleSearch={handleSearch}
      />
    </BodyFrame>
  )
}

export default User
