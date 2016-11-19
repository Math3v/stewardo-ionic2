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

    addItem( item: any ) {
        this.ngRedux.dispatch({ type: ItemsActions.ADD_ITEM, payload: item });
    }

    setFilter(categoryId: number): void {
        this.ngRedux.dispatch({ type: ItemsActions.SET_FILTER, payload: categoryId });
    }
}