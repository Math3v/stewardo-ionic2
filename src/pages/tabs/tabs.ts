import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { ItemsPage } from '../items/items';
import { OrderPage } from '../order/order';

import { TabsActions } from '../tabs/tabs.actions';
import { ItemsActions } from '../items/items.actions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @select('tabs') tabs$: Observable<any>;
  @select('orderBadge') orderBadge$: Observable<number>;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ItemsPage;
  tab2Root: any = OrderPage;

  constructor(
    private itemsActions: ItemsActions,
    private tabsActions: TabsActions,
  ) {}

  onTabClick(tab: any) {
    this.itemsActions.setSectionId( tab.id );
    this.tabsActions.setCurrentTab( tab.name__l );
  }
}
