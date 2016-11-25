import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { NgReduxModule } from 'ng2-redux';

import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';

import { ItemsPage } from '../pages/items/items';
import { ItemsService } from '../pages/items/items.service';
import { ItemsActions } from '../pages/items/items.actions';
import { CategoryFilterPipe } from '../pages/items/categoryFilter.pipe';

import { TabsPage } from '../pages/tabs/tabs';
import { TabsService } from '../pages/tabs/tabs.service';
import { TabsActions } from '../pages/tabs/tabs.actions';

import { I18nPipe } from './i18n.pipe';

import { ItemPage } from '../pages/item/item';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    ItemsPage,
    TabsPage,
    CategoryFilterPipe,
    I18nPipe,
    ItemPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    NgReduxModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    ItemsPage,
    TabsPage,
    ItemPage
  ],
  providers: [
    {provide: 'api', useValue: 'http://localhost:3000/'},
    TabsService,
    TabsActions,
    ItemsService,
    ItemsActions
  ]
})
export class AppModule {}
