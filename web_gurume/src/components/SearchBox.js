import React from "react"
import {SearchStyleDiv, SearchTextInput, SearchButton} from '../styledFile'

const SearchBox = (props) => {
    
    const opt = (e) => {
        props.setFlowOption(e.target.value)
    }
    
    // const handleChange = (e) => {
    //     props.setSearchText(e.target.value)
    // }

    return (
        <SearchStyleDiv>
            <select name='flowSelect' id='flowSelect' onChange={opt}>
                {props.opt.map(v => <option value={v}> {v} </option>)}
            </select>
            <SearchTextInput type='text' placeholder={props.pHolder} />   {/* onChange={handleChange} */}
            <SearchButton type='button' value='검색'/>
        </SearchStyleDiv>
    )
}

export default SearchBox
