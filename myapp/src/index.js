import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './App.scss';
// import { Router, hashHistory } from 'react-router'; // 路由组件
// import {Provider} from 'react-redux';
import RouterConfig from './route/index';	// 所有定义好的路由
// import store from './store';

ReactDOM.render(
	// <Provider store={store}>
    // 	<Router routes={AppRoutes} history={hashHistory} />
    // </Provider>,
    RouterConfig(),
    document.getElementById('root')
);
//用来做资源的缓存，这样你下次访问时，就可以更快的获取资源 (只在生产环境中生效)
registerServiceWorker();
