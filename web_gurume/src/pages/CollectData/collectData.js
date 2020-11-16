import React from 'react'
import {Link} from 'react-router-dom'
import './collectData.css'


const collectData = () => {
    return (
        <div className="bodyFrame">
            <div className="dataFrame">
                <crawlingStatus />
                <h1> 데이터 수집 페이지 </h1>
                <button><Link to='/collectData/search'> 지도 검색 부분 </Link></button>
                <button><Link to='/collectData/search/address'> 주소 선택 </Link></button>
            </div>
        </div>
    )
}

export default collectData
