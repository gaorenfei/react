import React from 'react';
import { Route, Redirect, IndexRedirect, Router } from 'react-router';


import {App} from '../App'
import {Contents} from '../components/content'
import {Page1} from '../components/page1'
import {Page2} from '../components/page2'


// 可以在这里写一些在路由即将被改变时触发的函数
// 可以用参数replace改变接下来的路由地址
const requireAuth = (nextState, replace) => {
    console.log('进入/content/page2')
}

export default (
    <Router path="/">
        <IndexRedirect to="/login" />
        <Route path="/login" component={App}/>
        <Route path="/content" component={Contents}>
            <IndexRedirect to="/content/page1" />
            <Route path="/content/page1" component={Page1}/>
            <Route path="/content/page2" component={Page2} onEnter={requireAuth} />
        </Route>
        <Redirect from='*' to='/'  />
    </Router>
);