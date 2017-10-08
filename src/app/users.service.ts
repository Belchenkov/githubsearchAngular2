import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUser(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}?Client_id=bdf0288bb2212faad65c&client_secret=e62210580a792bce6a204a6ead6507bf120ef826`)
      .map((response: Response) => response.json());
  }

}
