import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ItemsActions } from './items.actions';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemsService {

    constructor(
        private http: Http,
        private itemsActions: ItemsActions,
        @Inject('api') private api
    ){}

    getItems(): Promise<any> {
        return this.http.get(this.api+'foods.json')
            .toPromise()
            .then(response => response.json())
            .then(items => items.map( item => this.itemsActions.addItem( item )))
            .catch( error => console.error( error ));
    }
}