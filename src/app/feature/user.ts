// module
import { createSlice, createAsyncThunk, SliceCaseReducers } from '@reduxjs/toolkit';
import { UserService } from 'src/api/UserService';
// type
const name : string = "user";
interface UserState extends UserModel { }
// action
export const login = createAsyncThunk<UserState, LoginRequest, {}>(
    `${name}/login`, 
    async (args : LoginRequest) : Promise<UserState> => {
        const user = await UserService.login({
            email: args.email,
            password: args.password,
            isStaySignedIn: args.isStaySignedIn,
        });

        return user;
    });
// selector
export const selectEmail = (state : UserState) => state.email;
// slice
export const userSlice = createSlice<UserState, SliceCaseReducers<UserState>>({
    name: name,
    initialState: {
        id: null,
        email: null,
    },
    reducers:{
        logout: (state) => {
            state.email = '';
        },
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state : UserState, { payload } : { payload : UserState}) => {
            state.id = payload.id;
            state.email = payload.email;
        });
    }
});
// action
export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
export default userReducer;