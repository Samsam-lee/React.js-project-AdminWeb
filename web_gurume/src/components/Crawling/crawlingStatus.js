import React from 'react'
import './crawlingStatus.css'
import CrawlingYoutuber from './CrawlingYoutuber';
import data from '../../assets/ytbCrawlingData'

const CrawlingStatus = (props) => {

    return (
        <div className='cBox'>
            {props.status.map(v => 
            <div className='statusBox'>
                <div className='status'>
                    {v}
                </div>
                <CrawlingYoutuber status={v} data={data}/>
            </div>)}
        </div>
    )
}

export default CrawlingStatus
