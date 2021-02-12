// module
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
// source
import { interfaceReducer } from 'src/app/feature/interfaceFeature';
import { userReducer } from 'src/app/feature/userFeature';
// root reducer
const rootReducer = combineReducers({
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
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;