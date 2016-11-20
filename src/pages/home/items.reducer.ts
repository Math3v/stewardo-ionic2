import { ItemsActions } from './items.actions';

const INITIAL_STATE: Array<any> = [];

export function itemsReducer(state: Array<any> = INITIAL_STATE, action: any): Array<any> {
    switch(action.type) {
        case ItemsActions.ADD_ITEM:
            return [ ...state, action.payload ];
        case ItemsActions.SET_ITEMS:
            return action.payload;
        default:
            return state;
    }
}

export function itemsFilterReducer(state: number = 0, action: any): number {
    switch(action.type) {
        case ItemsActions.SET_FILTER:
            return action.payload;
        default:
            return state;
    }
}

export function currentItemReducer(state: any = {}, action: any): any {
    switch(action.type) {
        case ItemsActions.SET_ITEM:
            return action.payload;
        default:
            return state;
    }
}