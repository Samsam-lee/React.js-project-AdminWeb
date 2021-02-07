import React,{useState, useEffect} from 'react'
import SearchBox from '../../components/SearchBox'
import Table from '../../components/Table'
import Pagination from '../../utils/Pagination'
import axios from 'axios'

const Flow = () => {
    const [flowOption, setFlowOption] = useState('region')
    const [searchText, setSearchText] = useState(null)
    const [currentPage, setCurrentpage] = useState(1)
    const [postPerPage] = useState(4)

    const [flowData, setFlowData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFlowData = async () => {
            try {
                setError(null);
                setFlowData(null);
                setLoading(true);
                const response = await axios.get(
                    `http://localhost:3000/shareFlowTb`
                );
                setFlowData(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
    };
    fetchFlowData();
    }, []);

    if (loading) return <div> 로딩중.. </div>;
    if (error) return <div> error </div>;
    if (!flowData) return null;

    return (
        <div className="bodyFrame">
            {/* <SearchBox search='flow' setFlowOption={setFlowOption} setSearchText={setSearchText}/> */}
            <SearchBox opt={["지역","닉네임","동선 제목"]} pHolder='동선을 검색해주세요'/>

            <div>
                <Table title='flow' opt={["지역","동선 제목","아이디","작성 날짜","업데이트 날짜","조회 수"]} data={flowData.shareFlowTb}/>
                <Pagination />
            </div>
        </div>
    )
}

export default Flow
