import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { TabsActions } from '../tabs/tabs.actions';
import { ItemsActions } from '../home/items.actions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @select('tabs') tabs$: Observable<any>;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor(
    private itemsActions: ItemsActions,
    private tabsActions: TabsActions,
  ) {}

  onTabClick(id: number) {
    this.itemsActions.setFilter( id );
    this.tabsActions.setCurrentTab( id );
  }
}
