import React, {useState} from "react"
import {SearchStyleDiv, SearchTextInput, SearchButton} from '../styledFile'

const SearchBox = (props) => {
    const [tempText, setTempText] = useState()
    const [tempOption, setTempOption] = useState(props.option)

    const handleSubmit = (e) => {
        props.setSearchText(tempText)
        props.setOption(tempOption)
        console.log(props.option + '~~~~' + props.searchText)
        e.preventDefault();
    }
    
    const textChange = (e) => {
        setTempText(e.target.value)
    }

    const optionChange = (e) => {
        setTempOption(e.target.value)
    }

    return (
        <SearchStyleDiv>
            <form onSubmit={handleSubmit}>
            <select value={props.option} onChange={optionChange}>
                {props.opt.map(v => <option value={v}> {v} </option>)}
            </select>
            <SearchTextInput type='text' placeholder={props.pHolder} onChange={textChange}/>
            <SearchButton type='submit' value='검색'/>
            </form>
        </SearchStyleDiv>
    )
}

export default SearchBox
