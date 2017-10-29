import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class TabsActions {
    constructor(
        private ngRedux: NgRedux<any>
    ){}

    static ADD_TAB: string = 'ADD_TAB';
    static SET_TAB: string = 'SET_TAB';
    static SET_TABS: string = 'SET_TABS';

    addTab(tab: any ): void {
        this.ngRedux.dispatch({ type: TabsActions.ADD_TAB, payload: tab });
    }

    setTabs(tabs: Array<any>): void {
        this.ngRedux.dispatch({ type: TabsActions.SET_TABS, payload: tabs });
    }

    setCurrentTab(tab: any): void {
        this.ngRedux.dispatch({ type: TabsActions.SET_TAB, payload: tab });
    }
}