import React,{useState,useEffect} from "react"
import './SearchBox.css'


const SearchBox = (props) => {
    
    const opt = (e) => {
        props.setFlowOption(e.target.value)
    }
    
    const handleChange = (e) => {
        props.setSearchText(e.target.value)
    }

    return (
        <div>
            <select name='flowSelect' id='flowSelect' onChange={opt}>
                {props.opt.map(v => <option value={v}> {v} </option>)}
            </select>
            <input className='search' type='text' placeholder={props.pHolder} onChange={handleChange}/>
            <input className='searchButton' type='submit' value='검색'/>
        </div>
        // <div className='sBox'>
        //     {
        //     props.search == 'flow' 
        //     ? <>
        //     {/* 동선 페이지 searchBox */}
        //     <select name='flowSelect' id='flowSelect' onChange={opt}>
        //         <option value='region'>지역</option>
        //         <option value='nickname'>닉네임</option>
        //         <option value='flowTitle'>동선 제목</option>
        //     </select>
        //     <input className='search' type='text' placeholder='동선을 검색해주세요' onChange={handleChange}/>
        //     <input className='searchButton' type='submit' value='검색'/>
        //     </>
        //     : <>
        //     {/* 유저 페이지 searchBox */}
        //     <select>
        //         <option>닉네임</option>
        //         <option>id</option>
        //         <option>메모</option>
        //     </select>
        //     <input className='search' type='text' placeholder='유저를 검색해주세요'/>
        //     <input className='searchButton' type='submit' value='검색'/>
        //     </>
        //     }
            
        // </div>
    )
}

export default SearchBox
