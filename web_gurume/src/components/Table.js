import React, {useState} from 'react'
import './Table.css'
import { convertDate } from '../utils/date'
import { FlexDiv } from '../styledFile'

const Table = (props) => {

  // const [thumnail, setThumnail] = useState('none')

  // const mouseOver = () => {
  //   setThumnail('block')
  // }

  // const mouseOut = () => {
  //   setThumnail('none')
  // }

  return (
    <FlexDiv alignSelf="center">
      <table>
        {props.opt.map((v) => (
          <th>{v}</th>
        ))}
        {props.title == 'flow' &&
          props.data.map((v) => (
            <tr>
              <td>{v.adminTag.regionTag[0]}</td>
              <td>{v.shareTitle}</td>
              {/* <td><div onMouseOver={mouseOver} onMouseOut={mouseOut}>{v.shareTitle}</div></td> */}
              <td>{v.userId}</td>
              <td>{convertDate(v.shareDate)}</td>
              <td>{convertDate(v.updateDate)}</td>
              <td>{v.hits}</td>
            </tr>
          ))}

        {props.title == 'user' &&
          props.data.map((v) => (
            <tr>
              <td>{v.nickname}</td>
              <td>{v.userId}</td>
              <td>{v.folders.length}</td>
              <td>{v.social}</td>
              <td>{v.memo}</td>
            </tr>
          ))}
      </table>
    </FlexDiv>
  )
}

export default Table
