import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { TabsService } from '../tabs/tabs.service';
import { ItemsActions } from '../home/items.actions';
import { TabsActions } from '../tabs/tabs.actions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {
  @select('tabs') tabs$: Observable<any>;
  tabs: Array<any> = [
    { name__l: 'Test' },
    { name__l: 'Rest' }
  ];
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor(
    private tabsService: TabsService,
    private itemsActions: ItemsActions,
    private tabsActions: TabsActions
  ) {}

  ngOnInit() {
    this.tabsService.getTabs();
  }

  onTabClick(tab: any) {
    this.itemsActions.setFilter( tab.id );
    this.tabsActions.setCurrentTab( tab.name__l );
  }
}
