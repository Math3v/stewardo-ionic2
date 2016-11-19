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
    ){
        this.http.get(this.api+'foods.json')
            .map(response => response.json())
            .subscribe(
                items => this.itemsActions.setItems( items ), 
                error => console.error( error ));
    }
}