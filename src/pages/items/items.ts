import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { NavController, ToastController } from 'ionic-angular';
import { ItemPage } from '../item/item';
import { ItemsActions } from './items.actions';
import { OrderActions } from '../order/order.actions';
import { I18nPipe } from '../../app/i18n.pipe';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage {

  @select('items') items$: Observable<any>;
  @select('itemsFilter') itemsFilter$: Observable<number>;
  @select('currentTabName') currentTabName$: Observable<any>;

  static TOAST_DISMISS_TIMER: string = 'backdrop';
  static TOAST_DISMISS_CLOSE: string = 'close';

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private itemsActions: ItemsActions,
    private orderActions: OrderActions,
    private i18n: I18nPipe
  ) {}

  goToItem(item: any): void {
    this.itemsActions.setCurrentItem(item);
    this.navCtrl.push(ItemPage);
  }

  orderItem(event: any, item: any): void {
    event.stopPropagation();
    this.presentOrderToast(item, this.orderActions);
  }

  presentOrderToast(item: any, orderActions: OrderActions): void {
    let toast = this.toastCtrl.create({
      message: `Položka ${this.getItemName(item)} objednaná!`,
      position: 'top',
      duration: 2500,
      showCloseButton: true,
      closeButtonText: 'Nechci objednat',
      cssClass: 'ordered-toast'
    });
    
    toast.onDidDismiss(function() {
      let dismissContext = arguments[1];
      
      if( dismissContext && dismissContext === ItemsPage.TOAST_DISMISS_TIMER ) {  
        orderActions.addOrderItem(item);
        orderActions.incrementOrderBadge();
      }
    });

    toast.present();
  }

  private getItemName(item: any) {
    return this.i18n.transform(item.name__l);
  }
}
