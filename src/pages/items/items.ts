import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { NavController, ToastController } from 'ionic-angular';
import { ItemPage } from '../item/item';
import { ItemsActions } from './items.actions';
import { OrderActions } from '../order/order.actions';

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
    private toastCtrl: ToastController,
    private itemsActions: ItemsActions,
    private orderActions: OrderActions
  ) {}

  goToItem(item: any): void {
    this.itemsActions.setCurrentItem(item);
    this.navCtrl.push(ItemPage);
  }

  orderItem(event: any, item: any): void {
    event.stopPropagation();
    this.presentOrderToast();
    this.orderActions.addOrderItem(item);
  }

  presentOrderToast(): void {
    this.toastCtrl.create({
      message: 'Položka objednaná!',
      position: 'bottom',
      duration: 2500
    }).present();
  }
}
