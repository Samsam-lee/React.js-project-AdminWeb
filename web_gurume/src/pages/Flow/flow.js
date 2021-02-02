import React,{useState,useEffect} from 'react'
import SearchBox from '../../components/SearchBox'
import Table from '../../components/Table'
import flowData from '../../assets/flowData'        // 목업 데이터
import Pagination from '../../utils/Pagination'


const Flow = () => {
    const [flowOption, setFlowOption] = useState('region')
    const [searchText, setSearchText] = useState(null)
    const [currentPage, setCurrentpage] = useState(1)
    
    const [postPerPage] = useState(4)

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
