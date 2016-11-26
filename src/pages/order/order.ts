import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { OrderActions } from './order.actions';

/*
  Generated class for the Order page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  @select('orderItems') orderItems$: Observable<any>;

  constructor(
    public navCtrl: NavController,
    private orderActions: OrderActions  
  ) {}

  ionViewDidEnter() {
    this.orderActions.resetOrderBadge();
  }
}
