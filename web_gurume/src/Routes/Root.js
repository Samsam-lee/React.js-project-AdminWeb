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

import {SocketModalTest, FlexDiv} from '../styledFile'

import TestContext from '../utils/TestContextProvider'

const Root = () => {
  // const {socket} = useContext(TestContext)

  // useEffect(() => {
  //   socket.on('result', temp => {
  //     openModal()
  //   })
  // }, [socket])

  // const [modalIsOpen, setModalIsOpen] = useState(true)

  // const openModal = (err) => {
  //   setModalIsOpen(true)
  // }

  // const closeModal = () => {
  //   setModalIsOpen(false)
  // }

  // error video data
  const [tempValue, setTempValue] = useState(['Video one', 'Video two', 'Video three', 'Video four'])
  // error video 있을 때 css 
  const {displayBox, setDisplayBox} = useContext(TestContext)

  useEffect(() => {
    setDisplayBox('block')
    setTimeout(() => {
      setDisplayBox('none')
    }, 3000);
  }, [tempValue])

  useEffect(() => {
    setTimeout(() => {
      setTempValue((temp) => [...temp, 'Video five'])
    }, 10000);
  },[])

  return (
      <BrowserRouter>
        <SocketModalTest display={displayBox}>
          <FlexDiv fontSize='18px' margin='30px'>크롤링 중 에러 비디오 발생</FlexDiv>
          {tempValue.map(v => <FlexDiv cursor='pointer' margin='0 0 20px 30px'>
            <Link to='/bigGurume/collectData'>
            {v}
            </Link>
            </FlexDiv>)}
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
