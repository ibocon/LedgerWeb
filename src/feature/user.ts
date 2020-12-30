// Actions
export const LOGIN = '@user/login';
export const LOGOUT = '@user/logout';
interface UserLoginAction {
    type: typeof LOGIN,
    payload: string,
}
interface UserLogoutAction {
    type: typeof LOGOUT,
}
type UserActionTypes = UserLoginAction | UserLogoutAction;

// Action Creators
export function login(email: string): UserActionTypes {
    return {
        type: LOGIN,
        payload: email
    }
}
export function logout(): UserActionTypes {
    return {
        type: LOGOUT,
    }
}

// Reducer
export type UserState = {
    email: string;
};

const initialState : UserState = { 
    email: "",
};

export function userReducer(
    state = initialState,
    action: UserActionTypes
) : UserState {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                email: action.payload
            }
        case LOGOUT:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default userReducer;