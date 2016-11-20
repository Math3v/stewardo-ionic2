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
    ) { 
        this.http.get(this.api+'sections.json')
            .map(response => response.json())
            .subscribe(
                data => this.tabsActions.setTabs( data ),
                error => console.error( error )
            );
    }
}