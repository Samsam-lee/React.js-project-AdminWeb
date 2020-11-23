import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import CrawlingStatus from '../../components/Crawling/crawlingStatus'
import './collectData.css'


const CollectData = () => {
    const [status] = useState(['진행 중', '에러', '완료'])

    return (
        <div className="bodyFrame">
                {/* <button><Link to='/collectData/search'> 지도 검색 부분 </Link></button>
                <button><Link to='/collectData/search/address'> 주소 선택 </Link></button> */}
            <div className="dataFrame">
                <CrawlingStatus status={status}/>
            </div>
        </div>
    )
}

export default CollectData
