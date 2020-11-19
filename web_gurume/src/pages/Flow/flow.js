import React from 'react'
import SearchBox from '../../components/SearchBox'

const flow = () => {
    return (
        <div className="bodyFrame">
            <div className="assist">
                <SearchBox />
            </div>

            <div className="subFrame">
                <h1> 동선 페이지 </h1>
            </div>
        </div>
    )
}

export default flow
