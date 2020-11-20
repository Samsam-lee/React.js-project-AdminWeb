import React from 'react'
import adminTag from './dummy'
import './HashtagBox.css'

const HashtagBox = () => {
    return (
        <>
            <div className='box'>
                <div className='hashTitle'> 지역 </div>
                <div className='hashBody'> {adminTag.regionTags.map(v=>
                        <div className='hashElement'>{v}</div>
                    )}
                    <div className='hashElementPlus'> + </div>
                </div>
            </div>

            <div className='box'>
                <div className='hashTitle'> 계절 </div>
                <div className='hashBody'> {adminTag.seasonTags.map(v=>
                        <div className='hashElement'>{v}</div>
                    )}
                    <div className='hashElementPlus'> + </div>
                </div>
            </div>
        </>
    )
}

export default HashtagBox
