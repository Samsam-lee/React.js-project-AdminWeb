import React from 'react'
import './Table.css'
import {convertDate} from '../utils/date'

const Table = (props) => {
    return (
        <div>
            {/* {props.title == 'flow' 
            ? 
            <table>
                <tr>
                    <th>지역</th>
                    <th>동선 제목</th>
                    <th>아이디</th>
                    <th>작성 날짜</th>
                    <th>업데이트 날짜</th>
                    <th>조회 수</th>
                </tr>
                {props.flowData ? props.flowData.map(v=>
                    <tr>
                        <td>{v.adminTag.regionTag}</td>
                        <td>{v.shareTitle}</td>
                        <td>{v.userId}</td>
                        <td>{convertDate(v.shareDate.$date)}</td>
                        <td>{convertDate(v.updateDate.$date)}</td>
                        <td>{v.hits}</td>
                    </tr>) : null}
            </table> 
            : <>
                <table>
                    <th> 닉네임 </th>
                    <th> 아이디 </th>
                    <th> 동선 폴더 개수 </th>
                    <th> 소셜 로그인 플랫폼 </th>
                    <th> 메모 </th>
                
                    {userData.map(v =>
                        <tr>
                            <td>{v.nickname}</td>
                            <td>{v.userId}</td>
                            <td>{v.shareFlow}</td>
                            <td>{v.requestYtb}</td>
                            <td>{v.memo}</td>
                        </tr>
                        )}
                
                </table>
            </>} */}
            <table>
                {props.opt.map(v => <th>{v}</th>)}
                {props.title == 'flow' && props.data.map(v => <tr>
                    
                </tr>)}
                {props.title == 'user' && props.data.map(v => <tr>
                    <td>{v.nickname}</td>
                    <td>{v.userId}</td>
                    <td>{v.folders.length}</td>
                    <td>{v.social}</td>
                    <td>{v.memo}</td>
                </tr>)}
            </table>
            
        </div>
    )
}

export default Table
