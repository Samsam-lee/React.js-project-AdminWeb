import React from 'react'
// import SearchBox from '../../components/SearchBox'
import HashtagBox from '../../components/Hashtag/HashtagBox'

const hashtag = () => {
    return (
        <div className="bodyFrame">
            
            <div className="assist">
                <h1> 기본 해쉬태그 </h1>
            </div>

            <div className="subFrame">
                <HashtagBox/>
            </div>
            
        </div>
    )
}

export default hashtag
