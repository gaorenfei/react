// import React from 'react';
// import { Route, Redirect, IndexRedirect } from 'react-router';


// import App from '../App'
// import Contents from '../components/content'
// import Page1 from '../components/page1'
// import Page2 from '../components/page2'


// // 可以在这里写一些在路由即将被改变时触发的函数
// // 可以用参数replace改变接下来的路由地址
// const requireAuth = (nextState, replace) => {
//     console.log('进入/content/page2')
// }
//3.0版本
// export default (
//     <Route path="/">
//         <IndexRedirect to="/login" />
//         <Route path="/login" component={App}/>
//         <Route path="/content" component={Contents}>
//             <IndexRedirect to="/content/page1" />
//             <Route path="/content/page1" component={Page1}/>
//             <Route path="/content/page2" component={Page2} onEnter={requireAuth} />
//         </Route>
//         <Redirect from='*' to='/'  />
//     </Route>
// );

//按需加载3.0版本
// export default {
//     path: '/',
//     indexRoute: {
//       getComponent(nextState, cb) {
//         require.ensure([], (require) => {
//           cb(null, require('../App').default)
//         }, 'login')
//       }
//     },
//     childRoutes: [
//       require('./content').default,
//       require('./redirect').default
//     ]
// }


//路由4.0用法
import App from '../App'
import Contents from '../components/content'
import Page1 from '../components/page1'
import Page2 from '../components/page2'
import React from 'react'
import NoMatch from '../components/common'
import {
    Route,
    // Link,
    Switch,
    Router,
    BrowserRouter
} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store';
// import { syncHistoryWithStore } from 'react-router-redux'
// import createHistory from 'history/createBrowserHistory'
// const history = createHistory()

const Content = () => {
    return(
        <Contents>
            <Route path='/content/page1' component={Page1} />
            <Route path='/content/page2' component={Page2} />
        </Contents>
    )
}
const RouterConfig =()=>{
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/content" component={Content} />
                    <Route component={NoMatch}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}
export default RouterConfig
