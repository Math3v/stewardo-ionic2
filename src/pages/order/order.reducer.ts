import { OrderActions } from './order.actions';

const INITIAL_STATE: Array<any> = [];

export function orderItemsReducer(state: Array<any> = INITIAL_STATE, action: any): Array<any> {
    switch(action.type) {
        case OrderActions.ADD_ORDER_ITEM:
            return [ ...state, action.payload ];
        default:
            return state;
    }
}