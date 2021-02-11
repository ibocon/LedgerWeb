// module
import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
// source
import { RootState } from 'src/app/store';
// type
type interfaceState = {
    sidebarCollapsed : boolean;
};
// selector
export const selectSidebarCollapsed = (state : RootState) => state.interface.sidebarCollapsed;
// slice
export const interfaceSlice = createSlice<interfaceState, SliceCaseReducers<interfaceState>>({
    name: 'interface',
    initialState: {
        sidebarCollapsed: false,
    },
    reducers: {
        switchSidebarCollapsed: (state, action : PayloadAction<boolean>) => {
            state.sidebarCollapsed = action.payload;
        },
    }
});
// action
export const { switchSidebarCollapsed } = interfaceSlice.actions;
export const interfaceReducer = interfaceSlice.reducer;
export default interfaceReducer;