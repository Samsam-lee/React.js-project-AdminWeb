import React, { useEffect } from 'react'
import {PageBody, PageNum} from '../styledFile'

const Pagination = (props) => {
    const allPage = []

    for(let i = props.first; i <= props.last; i++){
        allPage.push(i)
    }

    const handlePage = (page) => {
        props.setCurrentPage(page)
    }

    return (
        <PageBody>
            <PageNum> &lt;&lt; </PageNum>
            {allPage.map(v => <PageNum onClick={e=>{handlePage(v)}}> {v} </PageNum>)}
            <PageNum> &gt;&gt; </PageNum>
        </PageBody>
    )
}

export default Pagination
