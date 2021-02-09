import React, {useState, useEffect} from 'react'
import SearchBox from '../../components/SearchBox'
import Table from '../../components/Table'
import Pagination from '../../utils/Pagination'
import {FlexDiv, TitleDiv} from '../../styledFile'
import axios from 'axios'

const User = () => {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setError(null);
                setUserData(null);
                setLoading(true);
                const response = await axios.get(
                    `http://13.125.69.16/admin/userTb`
                );
                setUserData(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
    };
    fetchUserData();
    }, []);

    if (loading) return <div> 로딩중.. </div>;
    if (error) return <div> error </div>;
    if (!userData) return null;

    return (
        <div className="bodyFrame">
            <TitleDiv> 유저 리스트 </TitleDiv>
            <FlexDiv flexDirection='column'>
                <Table title='user' opt={["닉네임","아이디","동선 폴더 개수","소셜 로그인 플랫폼","메모"]} data={userData.collection}/>
                <Pagination />
            </FlexDiv>
            <SearchBox opt={["닉네임","아이디","메모"]} pHolder='유저를 검색해주세요'/>
        </div>
    )
}

export default User
