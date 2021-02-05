import React from 'react'
import SearchBox from '../../components/SearchBox'
import Table from '../../components/Table'


const user = () => {
    return (
        <div className="bodyFrame">
            <div className="assist">
                <SearchBox opt={["닉네임","아이디","메모"]} pHolder='유저를 검색해주세요'/>
            </div>

            <div className="subFrame">
                <Table />
            </div>
        </div>
    )
}

export default user
