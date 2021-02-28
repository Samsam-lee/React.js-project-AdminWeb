import React, {useState} from 'react'
import { SearchStyleDiv, SearchTextInput, SearchButton } from '../styledFile'

const SearchBox = (props) => {
  const [tempText, setTempText] = useState(null)

  const handleSubmit = (e) => {
    props.setOption(props.Option)
    e.preventDefault()
  }

  const optionChange = (e) => {
    props.setOption(e.target.value)
  }

  return (
    <SearchStyleDiv>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
          props.handleSearch(e)
        }}
      >
        <select onChange={optionChange}>
          {props.opt.map((v) => (
            <option value={v.value}> {v.text} </option>
          ))}
        </select>
        <SearchTextInput
          type="text"
          placeholder={props.pHolder}
          onChange={(e) => {
            // props.setSearchText(e.target.value)
            setTempText(e.target.value)
          }}
        />
        <SearchButton type="submit" value="검색" onClick={() => {props.setSearchText(tempText)}}/>
      </form>
    </SearchStyleDiv>
  )
}

export default SearchBox
