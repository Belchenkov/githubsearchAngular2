import { Injectable } from  '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
    private username: string;
    private client_id = '03d84303ebbfee21ed9f';
    private client_secret = '2d8ebcc076ae9175cd4d9d2da95b442f3d14869f';

    constructor(private _http: Http) {
        console.log('GitHubService Ready ...');
        this.username = 'bradtraversy';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username
                              + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
          .map(res => res.json());
    }

}
