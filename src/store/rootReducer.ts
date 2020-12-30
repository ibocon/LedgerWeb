// Modules
import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

// Sources
import { interfaceReducer } from 'src/feature/interface';
import { userReducer } from 'src/feature/user';

export const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    interface: interfaceReducer,
    user: userReducer
});

export default rootReducer;