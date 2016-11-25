import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { NgRedux } from 'ng2-redux';
import { IAppState, rootReducer } from './store';
import createLogger  from 'redux-logger';

import { TabsPage } from '../pages/tabs/tabs';
import { TabsService } from '../pages/tabs/tabs.service';
import { ItemsService } from '../pages/items/items.service';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(
    private platform: Platform,
    private ngRedux: NgRedux<IAppState>,
    private tabsService: TabsService,
    private itemsService: ItemsService
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    ngRedux.configureStore(rootReducer, {}, [ createLogger() ]);
  }
}
