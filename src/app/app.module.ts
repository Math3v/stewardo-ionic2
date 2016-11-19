import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { NgReduxModule } from 'ng2-redux';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { HomePage } from '../pages/home/home';
import { ItemsService } from '../pages/home/items.service';
import { ItemsActions } from '../pages/home/items.actions';
import { CategoryFilterPipe } from '../pages/home/categoryFilter.pipe';

import { TabsPage } from '../pages/tabs/tabs';
import { TabsService } from '../pages/tabs/tabs.service';
import { TabsActions } from '../pages/tabs/tabs.actions';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoryFilterPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    NgReduxModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    TabsService,
    TabsActions,
    ItemsService,
    ItemsActions
  ]
})
export class AppModule {}
