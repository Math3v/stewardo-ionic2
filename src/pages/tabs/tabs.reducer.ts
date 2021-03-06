import { TabsActions } from './tabs.actions';

const INITIAL_STATE: Array<any> = [];

export function tabsReducer(state: Array<any> = INITIAL_STATE, action: any): Array<any> {
    switch(action.type) {
        case TabsActions.ADD_TAB:
            return [ ...state, action.payload ];
        case TabsActions.SET_TABS:
            return action.payload;
        default:
            return state;
    }
}

export function currentTabReducer(state: any = {}, action: any): void {
    switch(action.type) {
        case TabsActions.SET_TAB:
            return action.payload;
        default:
            return state;
    }
}