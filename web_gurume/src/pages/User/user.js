import React, {useState, useEffect} from 'react'
import SearchBox from '../../components/SearchBox'
import Table from '../../components/Table'
import Pagination from '../../utils/Pagination'
import {FlexDiv, TitleDiv} from '../../styledFile'
import axios from 'axios'

const User = () => {
    const [userData, setUserData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1)

    const fetchUserData = async () => {
        await axios.get(`http://13.125.69.16/admin/userTb/?page=${currentPage}`).then(res=>(
            setUserData(res.data) // 데이터는 res.data 안에 들어있습니다.
        ))
    };

    useEffect(() => {
        fetchUserData();
    }, [currentPage]);

    if (!userData) return null;

    return (
        <div className="bodyFrame">
            <TitleDiv> 유저 리스트 </TitleDiv>
            <FlexDiv flexDirection='column'>
                <Table title='user' opt={["닉네임","아이디","동선 폴더 개수","소셜 로그인 플랫폼","메모"]} data={userData.collection}/>
                <Pagination setCurrentPage={setCurrentPage} first={userData.first} last={userData.last}/>
            </FlexDiv>
            <SearchBox opt={["닉네임","아이디","메모"]} pHolder='유저를 검색해주세요'/>
        </div>
    )
}

export default User
