import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeEnhancers } from 'src/store/utils';
import { rootReducer } from 'src/store/rootReducer';

// browser history 생성
export const history = createBrowserHistory();

// middleware 구성
const middlewares = [thunkMiddleware];
// composeEnhancers 로 Middleware 적용
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// App 의 state 초기화
const initialState = {};

export const store = createStore(rootReducer(history), initialState, enhancer);

export default store;