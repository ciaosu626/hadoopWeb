import {Injectable} from  '@angular/core';
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { LoginCount} from  './model/user.interface'

@Injectable()
export class RegisterService {

  constructor(private http:Http) {

  }
  getAuth(user:Object): Observable<LoginCount[]>
  {
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(user);
    console.log(body);
    return this.http.post('http://localhost:3001/api/regis', body, options)
      .map((res:Response) => res.json());
  }
}

