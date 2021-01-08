// module
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// type
type UserState = {
    email: string;
}
// selector
export const selectEmail = (state : UserState) => state.email;
// slice
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
    },
    reducers:{
        login: (state, action : PayloadAction<string>) => {
            state.email = action.payload;
        },
        logout: (state) => {
            state.email = '';
        },
    }
});
// action
export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
export default userReducer;