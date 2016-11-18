import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../app/store';

@Injectable()
export class ItemsActions {
    
    constructor(
        private ngRedux: NgRedux<IAppState>
    ){}

    static ADD_ITEM: string = 'ADD_ITEM';

    addItem( item: any ) {
        this.ngRedux.dispatch({ type: ItemsActions.ADD_ITEM, payload: item });
    }
}