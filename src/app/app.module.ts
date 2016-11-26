import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { NgReduxModule } from 'ng2-redux';

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
    IonicModule.forRoot(MyApp),
    NgReduxModule.forRoot()
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
    {provide: 'api', useValue: 'http://localhost:3000/'},
    TabsService,
    TabsActions,
    ItemsService,
    ItemsActions,
    OrderActions,
    OrderService
  ]
})
export class AppModule {}
