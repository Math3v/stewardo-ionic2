import { OrderActions } from './order.actions';

const INITIAL_STATE: Array<any> = [];

function incrementCount( orderItem ) {
    if( orderItem.count ) {
        orderItem.count++;
    }
}

function updateCount( orderItems, newOrderItem ) {
    var updated = false;

    orderItems.map(function(orderItem) {
        if( orderItem.id === newOrderItem.id ) {
            incrementCount( newOrderItem );
            updated = true;
        }
    });

    return updated;
}

export function orderItemsReducer(state: Array<any> = INITIAL_STATE, action: any): Array<any> {
    switch(action.type) {
        case OrderActions.ADD_ORDER_ITEM:
            if( updateCount(state, action.payload) ) {
                return [ ...state ];
            } else {
                action.payload.count = 1;
                return [ ...state, action.payload ];
            }
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