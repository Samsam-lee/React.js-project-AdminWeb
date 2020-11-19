import React from 'react'
import SearchBox from '../../components/SearchBox'

const user = () => {
    return (
        <div className="bodyFrame">
            <div className="assist">
                <SearchBox />
            </div>

            <div className="subFrame">
                <h1> 유저 페이지 </h1>
            </div>
        </div>
    )
}

export default user
