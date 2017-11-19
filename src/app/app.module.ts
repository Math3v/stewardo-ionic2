import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { NgReduxModule } from 'ng2-redux';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { ItemsPage } from '../pages/items/items';
import { ItemsService } from '../pages/items/items.service';
import { ItemsActions } from '../pages/items/items.actions';
import { CategoryFilterPipe } from '../pages/items/categoryFilter.pipe';

import { TabsPage } from '../pages/tabs/tabs';
import { TabsService } from '../pages/tabs/tabs.service';
import { TabsActions } from '../pages/tabs/tabs.actions';

import { OrderPage } from '../pages/order/order';
import { OrderService } from '../pages/order/order.service';
import { OrderActions } from '../pages/order/order.actions';

import { I18nPipe } from './i18n.pipe';
import { PricePipe } from './price.pipe';

import { ItemPage } from '../pages/item/item';

@NgModule({
  declarations: [
    MyApp,
    ItemsPage,
    TabsPage,
    CategoryFilterPipe,
    I18nPipe,
    ItemPage,
    OrderPage,
    PricePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    NgReduxModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemsPage,
    TabsPage,
    ItemPage,
    OrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'api', useValue: 'https://boiling-cove-51767.herokuapp.com/'},
    TabsService,
    TabsActions,
    ItemsService,
    ItemsActions,
    OrderActions,
    OrderService,
    I18nPipe,
  ]
})
export class AppModule {}
