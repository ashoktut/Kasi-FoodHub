import {Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {

    server = 'http://localhost/KasiFoodHub-Frontend/server_api/';

    // tslint:disable-next-line: deprecation
    constructor(public http: Http) {

    }
    postData(body, file) {

        const type = 'application/json; charset=UTF-8';
        // tslint:disable-next-line: deprecation
        const headers = new Headers({'Content-Type': type});
        // tslint:disable-next-line: deprecation
        const options = new RequestOptions({headers});

        return this.http.post(this.server + file, JSON.stringify(body), options)
        .map(res => res.json());

    }

}
