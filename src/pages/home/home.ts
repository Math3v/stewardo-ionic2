import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @select('items') items$: Observable<any>;
  @select('itemsFilter') itemsFilter$: Observable<number>;
  @select('currentTabName') currentTabName$: Observable<any>;

  constructor(
    public navCtrl: NavController
  ) {}
}
