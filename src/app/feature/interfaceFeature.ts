// module
import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
// source
import { RootState } from './rootFeature';
import { logout } from './userFeature';
// type
const name : string = "interface";
type InterfaceState = {
    sidebarCollapsed : boolean;
    notification : Notification;
};
const intialState : InterfaceState = {
    sidebarCollapsed: false,
    notification : {
        level: undefined,
        message: ''
    }
}
type Notification = {
    level: 'success' | 'info' | 'warning' | 'error' | undefined;
    message: string;
}
// selector
export const selectSidebarCollapsed = (state : RootState) => state.interface.sidebarCollapsed;
export const selectNotification = (state : RootState) => state.interface.notification;
// slice
export const interfaceSlice = createSlice<InterfaceState, SliceCaseReducers<InterfaceState>>({
    name: name,
    initialState: intialState,
    reducers: {
        switchSidebarCollapsed: (state, action : PayloadAction<boolean>) => {
            state.sidebarCollapsed = action.payload;
        },
        notify: (state, action: PayloadAction<Notification>) => {
            state.notification = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(logout.fulfilled, (state: InterfaceState) => {
            state = intialState;
        });
    }
});
// action
export const { switchSidebarCollapsed, notify } = interfaceSlice.actions;
export const interfaceReducer = interfaceSlice.reducer;
export default interfaceReducer;