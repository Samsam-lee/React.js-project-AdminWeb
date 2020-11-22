import React,{useState,useEffect} from 'react'
import SearchBox from '../../components/SearchBox'
import Table from '../../components/Table'
import flowData from '../../assets/flowData'        // 목업 데이터
import query from '../../queries/searchFlow'        // 동적
import Pagination from '../../utils/Pagination'

import { useQuery } from '@apollo/react-hooks'

const Flow = () => {
    const [flowOption, setFlowOption] = useState('region')
    const [searchText, setSearchText] = useState(null)
    const [currentPage, setCurrentpage] = useState(1)
    
    const [postPerPage] = useState(4)

    // <-- 동적
    // const { loading, error, data, refetch } = useQuery(query, {
    //     variables: {
    //         flowOption
    //     }
    // })

    // useEffect(() => {
    //     // data ? refetch() : null

    //     console.log('변경~!!!')
    //     // 작성한 쿼리 구문 
    //     // 여기서 나온 값을 다시 테이블에 전달
    // }, [flowOption])
    // -->

    return (
        <div className="bodyFrame">
            <div className="assist">
                <SearchBox search='flow' setFlowOption={setFlowOption} setSearchText={setSearchText}/>
            </div>

            <div className="subFrame">
                <div>
                    <Table title='flow' flowData={flowData} postPerPage={postPerPage} currentPage={currentPage}/>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Flow
