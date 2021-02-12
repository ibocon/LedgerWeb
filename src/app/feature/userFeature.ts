// module
import { createSlice, createAsyncThunk, SliceCaseReducers } from '@reduxjs/toolkit';
import { UserService } from 'src/api/user';
// source
import { isUserModel } from 'src/app/component';
import { RootState } from './rootFeature';
// type
const name : string = "user";
interface UserState extends UserModel { }
const intialState = {
    id: null,
    email: null,
};
function isUserState(state : any): state is UserState {
    if(isUserModel(state)) {
        return true;
    } else {
        return false;
    }
}
// action
export const getUser = createAsyncThunk<UserState | Fail, { id: number }>(
    `${name}/get`, 
    async (args : { id: number }) : Promise<UserState | Fail> => {
        const response = await UserService.get({
            id: args.id
        });

        return response;
    });
export const login = createAsyncThunk<UserState | Fail, LoginRequest>(
    `${name}/login`, 
    async (args : LoginRequest) : Promise<UserState | Fail> => {
        const response = await UserService.login({
            email: args.email,
            password: args.password,
            isStaySignedIn: args.isStaySignedIn,
        });

        return response;
    });
export const signup = createAsyncThunk<UserState | Fail, SignupRequest>(
    `${name}/signup`,
    async (args : SignupRequest) : Promise<UserState | Fail> => {
        const response = await UserService.signup({
            email: args.email,
            password: args.password
        });
        return response;
    });
export const logout = createAsyncThunk<void, void>(
    `${name}/logout`,
    async () : Promise<void> => {
        UserService.logout();
        return;
    });
// selector
export const selectUserId = (state : RootState) : number | null => state.user.id;
export const selectUserEmail = (state : RootState) : string | null => state.user.email;
// slice
export const userSlice = createSlice<UserState, SliceCaseReducers<UserState>>({
    name: name,
    initialState: intialState,
    reducers:{

    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state : UserState, { payload } : { payload : UserState | Fail}) => {
            if(isUserState(payload)) {
                state.id = payload.id;
                state.email = payload.email;
            }
        }).addCase(logout.fulfilled, (state : UserState) => {
            state = intialState;
        });
    }
});
// action
// export const { } = userSlice.actions;
export const userReducer = userSlice.reducer;
export default userReducer;