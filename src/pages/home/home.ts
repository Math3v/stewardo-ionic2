import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';

import { ItemsService } from './items.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @select('items') items$: Observable<any>;
  @select('itemsFilter') itemsFilter$: Observable<number>;
  @select('currentTabName') currentTabName$: Observable<any>;

  constructor(
    public navCtrl: NavController,
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.itemsService.getItems();
  }
}
