import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';	// 管理异步action的插件，为了解决通过接口等形式获取异步数据后再进行更新操作
import RootReducer from '../reducer/index';

// ============================================
// Create store middlewares

const store = createStore(RootReducer, applyMiddleware(ReduxThunk));

export default store;