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

  orderSum: number = 0;

  constructor(
    public navCtrl: NavController,
    private orderActions: OrderActions  
  ) {}

  ionViewDidEnter() {
    this.orderActions.resetOrderBadge();
    this.together();
  }

  together() {
    this.orderItems$.subscribe(
      data => this.orderSum = data.reduce((acc, curr) => {
        return acc + (curr.count * curr.price__c.czk);
      }, 0),
      error => console.error( 'Error: ', error )
    );
  }

  deleteOrderItems() {
    this.orderActions.deleteAll();
  }
}
