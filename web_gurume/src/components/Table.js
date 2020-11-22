import React from 'react'
import './Table.css'
import userData from '../assets/userData'
import {convertDate} from '../utils/date'

const Table = (props) => {
    return (
        <div>
            {props.title == 'flow' 
            ? 
            <table>
                {/* <div className='tableTitle'>
                    <div> 동선 제목 </div>
                    <div> 닉네임 </div>
                    <div> 작성 날짜 </div>
                    <div> 업데이트 날짜 </div>
                    <div> 조회 수 </div>
                </div>
                <div className='temp'>
                    {flowData.map(v =>
                        <div className='tableBody'>
                            <div>{v.shareTitle}</div>
                            <div>{v.userId}</div>
                            <div>{convertDate(v.shareDate.$date)}</div>
                            <div>{convertDate(v.updateDate.$date)}</div>
                            <div>{v.hits}</div>
                        </div>
                        )}
                </div> */}

                <tr>
                    <th>지역</th>
                    <th>동선 제목</th>
                    <th>닉네임</th>
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
                    <th> 동선 공유 </th>
                    <th> 유튜버 신청 </th>
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
            </>}

        </div>
    )
}

export default Table
