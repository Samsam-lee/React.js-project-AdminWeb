import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <span><Link to='/'> 유튜버 페이지 __</Link></span>
            <span><Link to='/hashtag'> 해시태그 페이지 __</Link></span>
            <span><Link to='/flow'> 동선 페이지 __</Link></span>
            <span><Link to='/user'> 유저 페이지 __</Link></span>
            <span><Link to='/collectData'> 데이터 수집 페이지 </Link></span>
        </div>
    )
}

export default Header
