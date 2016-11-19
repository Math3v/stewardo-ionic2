import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { TabsActions } from './tabs.actions';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TabsService {

    constructor(
        private http: Http,
        private tabsActions: TabsActions,
        @Inject('api') private api
    ) { }

    getTabs(): Promise<any> {
        return this.http.get(this.api+'categories.json')
            .toPromise()
            .then(response => response.json())
            .then(data => data.filter( (datum, index) => index < 4))
            .then(data => this.tabsActions.setTabs( data ))
            .catch( error => console.error( error ));
    }
}