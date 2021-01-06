// Modules
import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';

// Sources
import { InterfaceState, interfaceReducer } from 'src/feature/interface';
import { UserState, userReducer } from 'src/feature/user';

export type RootState = {
    router: RouterState,
    interface: InterfaceState,
    user: UserState
};

export const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    interface: interfaceReducer,
    user: userReducer
});

export default rootReducer;