import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ItemsActions } from './items.actions';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemsService {

    constructor(
        private http: Http,
        private itemsActions: ItemsActions
    ){}

    getItems(): Promise<any> {
        return this.http.get('http://localhost:3000/foods.json')
            .toPromise()
            .then(response => response.json())
            .then(items => items.map( item => this.itemsActions.addItem( item )))
            .catch( error => console.error( error ));
    }
}