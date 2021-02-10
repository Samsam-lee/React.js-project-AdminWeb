import React,{useState, useEffect} from 'react'
import SearchBox from '../../components/SearchBox'
import Table from '../../components/Table'
import Pagination from '../../utils/Pagination'
import axios from 'axios'
import {FlexDiv, TitleDiv} from '../../styledFile'

const Flow = () => {
    const [option, setOption] = useState('지역')
    const [searchText, setSearchText] = useState()
    const [currentPage, setCurrentPage] = useState(1)

    const [flowData, setFlowData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchFlowData = async () => {
        try {
            setError(null);
            setFlowData(null);
            setLoading(true);
            const response = await axios.get(
                `http://13.125.69.16/admin/shareFlowTb/?page=${currentPage}`
            );
            setFlowData(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchFlowData();
    }, [currentPage]);

    useEffect(() => {
        console.log("searchText 변경")
    }, [searchText])

    useEffect(() => {
        console.log("option 변경")
    }, [option])

    if (loading) return <div> 로딩중.. </div>;
    if (error) return <div> error </div>;
    if (!flowData) return null;

    return (
        <div className="bodyFrame">
            <TitleDiv> 동선 리스트 </TitleDiv>
            <FlexDiv flexDirection='column'>
                <Table title='flow' opt={["지역","동선 제목","아이디","작성 날짜","업데이트 날짜","조회 수"]} data={flowData.collection}/>
                <Pagination setCurrentPage={setCurrentPage} first={flowData.first} last={flowData.last} />
            </FlexDiv>
            <SearchBox  opt={["지역","아이디","동선 제목"]} pHolder='동선을 검색해주세요'
                        setOption={setOption} setSearchText={setSearchText}
                        option={option} searchText={searchText}/>
        </div>
    )
}

export default Flow
