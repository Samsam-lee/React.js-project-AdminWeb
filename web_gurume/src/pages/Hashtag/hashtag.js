import React from 'react'
import SearchBox from '../../components/SearchBox'
import HashtagBox from '../../components/Hashtag/HashtagBox'

const hashtag = () => {
    return (
        <div className="bodyFrame">
            
            <div className="assist">
                <SearchBox />
            </div>

            <div className="subFrame">
                <HashtagBox/>
            </div>
            
        </div>
    )
}

export default hashtag
