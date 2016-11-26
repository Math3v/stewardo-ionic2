import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../app/store';

@Injectable()
export class OrderActions {
    constructor(
        private ngRedux: NgRedux<IAppState>
    ){}

    static ADD_ORDER_ITEM: string = 'ADD_ORDER_ITEM';
    static DEL_ORDER_ITEM: string = 'DEL_ORDER_ITEM';
    static INC_ORDER_BADGE: string = 'INC_ORDER_BADGE';
    static DEL_ORDER_BADGE: string = 'DEL_ORDER_BADGE';

    addOrderItem(item: any): void {
        this.ngRedux.dispatch({ type: OrderActions.ADD_ORDER_ITEM, payload: item });
    }

    delOrderItem(item: any): void {
        this.ngRedux.dispatch({ type: OrderActions.DEL_ORDER_ITEM, payload: item });
    }

    incrementOrderBadge(): void {
        this.ngRedux.dispatch({ type: OrderActions.INC_ORDER_BADGE });
    }

    resetOrderBadge(): void {
        this.ngRedux.dispatch({ type: OrderActions.DEL_ORDER_BADGE });
    }
}