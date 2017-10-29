import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { NgRedux } from 'ng2-redux';
import { rootReducer } from './store';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(
    private platform: Platform,
    private ngRedux: NgRedux<any>,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  ) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.ngRedux.configureStore(rootReducer, {}, []);
  }
}
