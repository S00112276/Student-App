import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class DiaryService {
  //private _productUrl = '/products';
  private _entriesUrl = 'http://localhost:3000/diary/diaryentries'; 

  constructor(private _http: HttpClient) { }
  // Returns data on selected collection
  populateArrays(_url): Observable<any[]> {
    return this._http.get<any[]>(_url)
    .catch(this.handleError);
  }

  // Get Diary Entries
  getEntries(): Observable<any[]> {
    return this._http.get<any[]>(this._entriesUrl)
      .catch(this.handleError);
  }

  // Handle Error
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}