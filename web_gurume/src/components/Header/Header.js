import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="headerBox">
            <span className="title">ビックグルメ</span>
            <span className="temp"></span>
            <button ><Link to='/'> 유튜버 페이지 </Link></button>
            <button ><Link to='/hashtag'> 해시태그 페이지 </Link></button>
            <button ><Link to='/flow'> 동선 페이지 </Link></button>
            <button ><Link to='/user'> 유저 페이지 </Link></button>
            <button ><Link to='/collectData'> 데이터 수집 페이지 </Link></button>
            {/* <ul>
                <li> 유튜버 </li>
                <li> 해시태그 </li>
                <li> 동선 </li>
                <li> 유저 </li>
                <li> 데이터 수집 </li>
            </ul> */}
        </div>
    )
}

export default Header
