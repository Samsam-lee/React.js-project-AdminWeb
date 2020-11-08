import React from 'react'
import crawlingStatus from '../../components/CrawlingStatus/crawlingStatus'

const collectData = () => {
    return (
        <div className="bodyFrame">
            <div className="subFrame">
                <crawlingStatus />
            </div>
        </div>
    )
}

export default collectData
