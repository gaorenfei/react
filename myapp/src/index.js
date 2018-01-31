import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './App.scss';
import { Router, hashHistory } from 'react-router'; // 路由组件
import AppRoutes from './route/index';	// 所有定义好的路由
ReactDOM.render(
    <Router routes={AppRoutes} history={hashHistory} />,
    document.getElementById('root')
);
registerServiceWorker();
