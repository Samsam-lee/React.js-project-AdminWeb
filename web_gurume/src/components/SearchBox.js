import React from 'react'
import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className='sBox'>
            <input className='search' type='text' placeholder='해시태그를 입력해주세요'/>
            <input className='searchButton' type='submit' value='검색'/>
        </div>
    )
}

export default SearchBox
