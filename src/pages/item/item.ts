import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'item',
    templateUrl: 'item.html'
})
export class ItemPage {
    @select('currentItem') item$: Observable<any>;

    constructor(
        public navCtrl: NavController
    ){}

    goBack() {
        this.navCtrl.pop();
    }
}