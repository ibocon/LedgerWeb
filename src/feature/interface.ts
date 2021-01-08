// module
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// type
type interfaceState = {
    sidebarCollapsed : boolean;
};
// selector
export const selectSidebarCollapsed = (state : interfaceState) => state.sidebarCollapsed;
// slice
export const interfaceSlice = createSlice({
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