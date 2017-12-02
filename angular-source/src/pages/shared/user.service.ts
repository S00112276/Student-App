//import { IUser } from '../home/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
  private _userUrl = 'http://localhost:3000/users';

  constructor(private _http: HttpClient) { }

  // getUsers(): Observable<IUser[]> {
  //   return this._http.get<IUser[]>(this._userUrl)
  //     .do(data => console.log('All: ' + JSON.stringify(data)))
  //     .catch(this.handleError);
  // }


  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
