import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../app/store';

@Injectable()
export class TabsActions {
    constructor(
        private ngRedux: NgRedux<IAppState>
    ){}

    static ADD_TAB: string = 'ADD_TAB';

    addTab( tab: any ): void {
        this.ngRedux.dispatch({ type: TabsActions.ADD_TAB, payload: tab });
    }
}