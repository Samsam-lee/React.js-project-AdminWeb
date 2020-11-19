import React from 'react'
import hash from './dummy'
import './HashtagBox.css'

const HashtagBox = () => {
    return (
        <div>
        <div className='hashTitle'> {hash.hashTitle} </div>
        <div> {hash.hashBody.map(v=>
                <div className='hashBody'>{v}</div>
            )}
        </div>
        </div>
    )
}

export default HashtagBox
