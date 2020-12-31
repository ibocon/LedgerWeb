// Actions
export const SWITCH_SIDEBAR_COLLAPSED = '@interface/switchSidebarCollapsed';

interface SwitchSidebarCollapsedAction {
    type: typeof SWITCH_SIDEBAR_COLLAPSED,
    payload: boolean,
}
type InterfaceActionTypes = SwitchSidebarCollapsedAction;

// Action Creators
export function switchSidebarCollapsed(isCollapsed: boolean): InterfaceActionTypes {
    return {
        type: SWITCH_SIDEBAR_COLLAPSED,
        payload: isCollapsed
    }
}

// Reducer
export type InterfaceState = {
    sidebarCollapsed: boolean;
};

const initialState : InterfaceState = { 
    sidebarCollapsed: false,
};

export function interfaceReducer(
    state = initialState,
    action: InterfaceActionTypes
) : InterfaceState {
    switch (action.type) {
        case SWITCH_SIDEBAR_COLLAPSED:
            return {
                ...state,
                sidebarCollapsed: action.payload
            }
        default:
            return state;
    }
}

export const getSidebarCollapsed = (state : InterfaceState) => state.sidebarCollapsed;

export default interfaceReducer;