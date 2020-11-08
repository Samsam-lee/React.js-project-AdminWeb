import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'

import {collectAddress, collectData, searchData} from '../pages/CollectData'
import flow from '../pages/Flow/flow'
import hashtag from '../pages/Hashtag/hashtag'
import user from '../pages/User/user'
import {youtuberInfo, youtuberVideo} from '../pages/Youtuber/Information'
import youtuberRequest from '../pages/Youtuber/Request/youtuberRequest'

const Root = () => {
    return(
        <>
        <BrowserRouter>
            <Route path='/' component={Header}></Route>
            <Route exact path='/' component={youtuberInfo}></Route>
            
            <Route path='/youtuberVideo' component={youtuberVideo}></Route>
            <Route path='/youtuberRequest' component={youtuberRequest}></Route>

            <Route path='/hashtag' component={hashtag}></Route>
            <Route path='/flow' component={flow}></Route>
            <Route path='/user' component={user}></Route>

            <Switch>
                <Route path='/collectData/search/address' component={collectAddress}></Route>
                <Route path='/collectData/search' component={searchData}></Route>
                <Route path='/collectData' component={collectData}></Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}

export default Root