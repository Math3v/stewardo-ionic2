import { ItemsActions } from './items.actions';

const INITIAL_STATE: Array<any> = [];

export function itemsReducer(state: Array<any> = INITIAL_STATE, action: any): Array<any> {
    switch(action.type) {
        case ItemsActions.ADD_ITEM:
            return [ ...state, action.payload ];
        default:
            return state;
    }
}