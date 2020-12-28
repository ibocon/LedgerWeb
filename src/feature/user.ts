// Redux ducks pattern
// https://github.com/erikras/ducks-modular-redux

import { ActionType, createAction, createReducer } from 'typesafe-actions';

// Actions
export const LOGIN = 'user/login' as const;
export const LOGOUT = 'user/logout' as const;

// Action Creators
export const login = () => createAction(LOGIN);
export const logout = () => createAction(LOGOUT);

const actions = {
    login,
    logout,
};
type UserAction = ActionType<typeof actions>;

// Reducer
export type UserState = {
    email: string;
};
const initialState : UserState = { 
    email: "",
};
const user = createReducer(initialState, {
    [LOGIN]: (state, action) => {
        
        return state;
    },
    [LOGOUT]: (state, action) => {
        return state;
    },
});

export default user;