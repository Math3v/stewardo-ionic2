import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { ItemsPage } from '../items/items';
import { OrderPage } from '../order/order';

import { TabsActions } from '../tabs/tabs.actions';
import { ItemsActions } from '../items/items.actions';
import { OrderActions } from '../order/order.actions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @select('tabs') tabs$: Observable<any>;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ItemsPage;
  tab2Root: any = OrderPage;

  constructor(
    private itemsActions: ItemsActions,
    private tabsActions: TabsActions,
  ) {}

  onTabClick(id: number) {
    this.itemsActions.setSectionId( id );
    this.tabsActions.setCurrentTab( id );
  }
}
