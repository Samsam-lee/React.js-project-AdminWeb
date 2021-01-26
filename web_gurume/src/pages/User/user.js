import React from 'react'
import SearchBox from '../../components/SearchBox'
import Table from '../../components/Table'


const user = () => {
    return (
        <div className="bodyFrame">
            <div className="assist">
                <SearchBox />
            </div>

            <div className="subFrame">
                <Table />
            </div>
        </div>
    )
}

export default user
