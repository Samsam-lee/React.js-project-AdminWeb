import React from 'react'
import { PageBody, PageNum } from '../styledFile'

const Pagination = (props) => {
  const allPage = []

  for (let i = props.first; i <= props.last; i++) {
    allPage.push(i)
  }

  const handlePage = (page) => {
    page != null && props.setCurrentPage(page)
  }

  return (
    <PageBody>
      <PageNum
        onClick={(e) => {
          handlePage(props.prev)
        }}
      >
        {' '}
        &lt;&lt;{' '}
      </PageNum>
      {allPage.map((v) => (
        <PageNum
          onClick={(e) => {
            handlePage(v)
          }}
        >
          {' '}
          {v}{' '}
        </PageNum>
      ))}
      <PageNum
        onClick={(e) => {
          handlePage(props.next)
        }}
      >
        {' '}
        &gt;&gt;{' '}
      </PageNum>
    </PageBody>
  )
}

export default Pagination
