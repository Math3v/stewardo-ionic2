import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { TabsService } from '../tabs/tabs.service';

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
    private tabsService: TabsService
  ) {}

  ngOnInit() {
    this.tabsService.getTabs();
  }
}
