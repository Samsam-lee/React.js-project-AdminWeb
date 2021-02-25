import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import {
  HeadDiv,
  HeaderTitleDiv,
  HeaderList,
  FlexDiv,
  ContainerBox,
} from '../../styledFile'

const Header = () => {
  const [ytbDetailCss, setYtbDetailCss] = useState('mOut')
  const nowPage = useLocation()

  return (
    <ContainerBox>
      <HeadDiv>
        <HeaderTitleDiv>
          <Link to="/bigGurume" style={{ color: '#f97583' }}>
            {' '}
            Big Gurume{' '}
          </Link>
        </HeaderTitleDiv>

        <FlexDiv alignSelf="center">
          <HeaderList
            onClicked={
              nowPage.pathname == '/bigGurume' ||
              nowPage.pathname == '/bigGurume/youtuberRequest' ||
              nowPage.pathname == '/bigGurume/youtuberVideo'
            }
            onMouseOver={() => {
              setYtbDetailCss('mOver')
            }}
            onMouseOut={() => {
              setYtbDetailCss('mOut')
            }}
          >
            <Link to="/bigGurume"> 유튜버 </Link>
            <div className={ytbDetailCss}>
              <HeaderList
                onClicked={nowPage.pathname == '/bigGurume'}
                margin="0"
                paddingTop="5px"
              >
                <Link to="/bigGurume">정보</Link>
              </HeaderList>
              <HeaderList
                onClicked={nowPage.pathname == '/bigGurume/youtuberRequest'}
                margin="0"
                paddingTop="15px"
              >
                <Link to="/bigGurume/youtuberRequest">신청</Link>
              </HeaderList>
            </div>
          </HeaderList>
          <HeaderList onClicked={nowPage.pathname == '/bigGurume/hashtag'}>
            <Link to="/bigGurume/hashtag"> 해시태그 </Link>
          </HeaderList>
          <HeaderList onClicked={nowPage.pathname == '/bigGurume/flow'}>
            <Link to="/bigGurume/flow"> 동선 </Link>
          </HeaderList>
          <HeaderList onClicked={nowPage.pathname == '/bigGurume/user'}>
            <Link to="/bigGurume/user"> 유저 </Link>
          </HeaderList>
          <HeaderList
            onClicked={
              nowPage.pathname == '/bigGurume/collectData' ||
              nowPage.pathname == '/bigGurume/collectData/search'
            }
          >
            <Link to="/bigGurume/collectData"> 데이터 수집 </Link>
          </HeaderList>
          <HeaderList>
            <Link to="/">로그아웃</Link>
          </HeaderList>
        </FlexDiv>
      </HeadDiv>
    </ContainerBox>
  )
}

export default Header
