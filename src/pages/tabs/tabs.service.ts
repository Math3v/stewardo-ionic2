import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TabsActions } from './tabs.actions';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TabsService {

    constructor(
        private http: Http,
        private tabsActions: TabsActions
    ) { }

    getTabs(): Promise<any> {
        return this.http.get('http://localhost:3000/categories.json')
            .toPromise()
            .then(response => response.json())
            .then(data => data.filter( (datum, index) => index < 4))
            .then(data => this.tabsActions.setTabs( data ))
            .catch( error => console.error( error ));
    }
}