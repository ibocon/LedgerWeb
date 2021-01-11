// module
import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory, LocationState } from 'history';
// source
import { interfaceReducer } from 'src/feature/interface';
import { userReducer } from 'src/feature/user';

export const history = createBrowserHistory<LocationState>();
// root reducer
const rootReducer = combineReducers({
    router: connectRouter(history),
    interface: interfaceReducer,
    user: userReducer
});
export type RootState = ReturnType<typeof rootReducer>;
// store
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});
export default store;