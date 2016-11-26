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

export function orderBadgeReducer(state: number = 0, action: any): number {
    switch(action.type) {
        case OrderActions.INC_ORDER_BADGE:
            return state + 1;
        case OrderActions.DEL_ORDER_BADGE:
            return 0;
        default:
            return state;
    }
}