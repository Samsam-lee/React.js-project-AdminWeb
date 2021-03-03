import React, {useState, useContext, useEffect} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Header from '../components/Header/Header'

import login from '../pages/Login/Login'
import { collectData, searchData } from '../pages/CollectData'
import flow from '../pages/Flow/flow'
import hashtag from '../pages/Hashtag/hashtag'
import user from '../pages/User/user'
import { youtuberInfo, youtuberVideo } from '../pages/Youtuber/Information'
import youtuberRequest from '../pages/Youtuber/Request/youtuberRequest'

import {SocketModalTest, FlexDiv, FixTextDiv} from '../styledFile'

import TestContext from '../utils/TestContextProvider'

const Root = () => {
  // const {errVideo} = useContext(TestContext)

  // error video data
  const [tempValue, setTempValue] = useState([
    {'ytb':'야식이', 'video':'Video one'},
    {'ytb':'광마니', 'video':'Video two'},
    {'ytb':'하얀트리', 'video':'Video three'},
    {'ytb':'버거형', 'video':'Video four'},
  ])
  // error video 있을 때 css 
  const {displayBox, setDisplayBox} = useContext(TestContext)

  // 목업 데이터 인데 에러 비디오랑 유튜버 값 넘어오면 변경
  // useEffect(() => {
  //   // setTempValue((temp) => [...temp, errVideo])
  //   setDisplayBox('block')

  //   setTimeout(() => {
  //     setDisplayBox('none')
  //   }, 4000);
    
  // }, [tempValue])

  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTempValue((temp) => [...temp, {'ytb':'정육왕', 'video':'Video five'}])
  //   }, 10000);
  // },[])

  // {ytbChannel : adsf,
  //  videoName : asdf}

  

  return (
      <BrowserRouter>
        {/* <SocketModalTest cssTemp={true} duration={4}> */}
        <SocketModalTest display={displayBox}>
          <FlexDiv fontSize='18px' margin='30px 0 30px 100px' >크롤링 중 에러 비디오 발생</FlexDiv>
          <Link to='/bigGurume/collectData'>
          {tempValue.map(v => <FixTextDiv cursor='pointer' margin='0 0 20px 30px'>
            <FlexDiv justifyContent='space-around'>
            <FlexDiv>{v.video}</FlexDiv><FlexDiv>{v.ytb}</FlexDiv>
            </FlexDiv>
            </FixTextDiv>)}
          </Link>
        </SocketModalTest>

        <Route exact path="/" component={login}></Route>

        <Route path="/bigGurume" component={Header}></Route>
        <Route exact path="/bigGurume" component={youtuberInfo}></Route>

        <Route
          path="/bigGurume/youtuberVideo"
          component={youtuberVideo}
        ></Route>
        <Route
          path="/bigGurume/youtuberRequest"
          component={youtuberRequest}
        ></Route>

        <Route path="/bigGurume/hashtag" component={hashtag}></Route>
        <Route path="/bigGurume/flow" component={flow}></Route>
        <Route path="/bigGurume/user" component={user}></Route>

        <Switch>
          <Route
            path="/bigGurume/collectData/search"
            component={searchData}
          ></Route>
          <Route path="/bigGurume/collectData" component={collectData}></Route>
        </Switch>
      </BrowserRouter>
  )
}

export default Root
