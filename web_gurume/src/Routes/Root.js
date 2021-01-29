import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header/Header'

import login from '../pages/Login/Login'
import {collectData, searchData} from '../pages/CollectData'
import flow from '../pages/Flow/flow'
import hashtag from '../pages/Hashtag/hashtag'
import user from '../pages/User/user'
import {youtuberInfo, youtuberVideo} from '../pages/Youtuber/Information'
import youtuberRequest from '../pages/Youtuber/Request/youtuberRequest'

const Root = () => {
    return(
        <>
        <BrowserRouter>
            <Route exact path='/' component={login}></Route>

            <Route path='/bigGurume' component={Header}></Route>
            <Route exact path='/bigGurume' component={youtuberInfo}></Route>
            
            <Route path='/bigGurume/youtuberVideo' component={youtuberVideo}></Route>
            <Route path='/bigGurume/youtuberRequest' component={youtuberRequest}></Route>

            <Route path='/bigGurume/hashtag' component={hashtag}></Route>
            <Route path='/bigGurume/flow' component={flow}></Route>
            <Route path='/bigGurume/user' component={user}></Route>

            <Switch>
                <Route path='/bigGurume/collectData/search' component={searchData}></Route>
                <Route path='/bigGurume/collectData' component={collectData}></Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}

export default Root