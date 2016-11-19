import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../app/store';

@Injectable()
export class ItemsActions {
    
    constructor(
        private ngRedux: NgRedux<IAppState>
    ){}

    static ADD_ITEM: string = 'ADD_ITEM';
    static SET_FILTER: string = 'SET_FILTER';
    static SET_ITEMS: string = 'SET_ITEMS';

    addItem( item: any ) {
        this.ngRedux.dispatch({ type: ItemsActions.ADD_ITEM, payload: item });
    }

    setFilter(categoryId: number): void {
        this.ngRedux.dispatch({ type: ItemsActions.SET_FILTER, payload: categoryId });
    }

    setItems(items: Array<any>): void {
        this.ngRedux.dispatch({ type: ItemsActions.SET_ITEMS, payload: items });
    }
}