import React,{useState, useEffect} from 'react'
import SearchBox from '../../components/SearchBox'
import Table from '../../components/Table'
import Pagination from '../../utils/Pagination'
import axios from 'axios'
import {FlexDiv, TitleDiv} from '../../styledFile'

const Flow = () => {
    const [option, setOption] = useState("region")
    const [searchText, setSearchText] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [flowData, setFlowData] = useState(null);

    /** page 에 따른 데이터 렌더링 */
    const fetchFlowData = async () => {
        await axios.get(`http://13.125.69.16/admin/shareFlowTb/?page=${currentPage}`).then(res=>{
                setFlowData(res.data); // 데이터는 res.data 안에 들어있습니다.
            })
    };
    /** */

    /** 검색에 따른 데이터 렌더링 */
    const fetchSearchData = async () => {
        // console.log(option + '~~' + searchText + '~~' + currentPage)
        await axios.get(`http://13.125.69.16/admin/shareFlowTb/${option}/${searchText}`).then(res=>{
            setFlowData(res.data);
        }).catch(e=>{
            fetchFlowData();
        })
    }
    /** */

    /** 페이지 네이션 -> 데이터 렌더링 */
    useEffect(() => {
        setFlowData(null);
        fetchFlowData();
    }, [currentPage]);
    /** */
    
    /** 검색 결과에 따른 데이터 렌더링 */
    const handleSearch = (e) => {
        e.preventDefault();     // 새로고침 x
        setFlowData(null);
        !option && setCurrentPage(1)
        searchText && fetchSearchData()
        !searchText && setCurrentPage(1)
        !searchText && fetchFlowData()
        setSearchText('')
        setOption('region')
    }
    /** */

    if (!flowData) return null;

    return (
        <div className="bodyFrame">
            <TitleDiv> 동선 리스트 </TitleDiv>
            {
                flowData
                ? <FlexDiv flexDirection='column'>
                <Table title='flow' opt={["지역","동선 제목","아이디","작성 날짜","업데이트 날짜","조회 수"]} data={flowData.collection}/>
                <Pagination setCurrentPage={setCurrentPage}
                    first={flowData.first} last={flowData.last} next={flowData.next} prev={flowData.prev}/></FlexDiv>
                : <div> loading... </div>
            }
            <SearchBox  opt={[{value:"region",text:"지역"},{value:"id",text:"아이디"},{value:"title",text:"동선 제목"}]}
                        pHolder='동선을 검색해주세요' setOption={setOption} setSearchText={setSearchText} option={option}
                        handleSearch={handleSearch} />
        </div>
    )
}

export default Flow
