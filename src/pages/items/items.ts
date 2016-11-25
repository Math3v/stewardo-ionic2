import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { ItemPage } from '../item/item';
import { ItemsActions } from './items.actions';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage {
  @select('items') items$: Observable<any>;
  @select('itemsFilter') itemsFilter$: Observable<number>;
  @select('currentTabName') currentTabName$: Observable<any>;

  constructor(
    public navCtrl: NavController,
    private itemsActions: ItemsActions
  ) {}

  goToItem(item: any): void {
    this.itemsActions.setCurrentItem(item);
    this.navCtrl.push(ItemPage);
  }
}
