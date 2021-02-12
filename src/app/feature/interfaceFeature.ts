// module
import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
// source
import { RootState } from './rootFeature';
// type
const name : string = "interface";
type InterfaceState = {
    sidebarCollapsed : boolean;
    notification : Notification;
};
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
    initialState: {
        sidebarCollapsed: false,
        notification : {
            level: undefined,
            message: ''
        }
    },
    reducers: {
        switchSidebarCollapsed: (state, action : PayloadAction<boolean>) => {
            state.sidebarCollapsed = action.payload;
        },
        notify: (state, action: PayloadAction<Notification>) => {
            state.notification = action.payload;
        },
    }
});
// action
export const { switchSidebarCollapsed, notify } = interfaceSlice.actions;
export const interfaceReducer = interfaceSlice.reducer;
export default interfaceReducer;