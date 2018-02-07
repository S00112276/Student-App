import { IEntry } from '../diary/diary-entry';
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
  private _lecturersUrl = 'http://localhost:3000/users/lecturers';

  constructor(private _http: HttpClient) { }
  // Get Lecturers  
  getLecturers(): Observable<any[]> {
    return this._http.get<any[]>(this._lecturersUrl)
    .catch(this.handleError);
  }

  // Get Diary Entries
  getEntries(): Observable<IEntry[]> {
    return this._http.get<IEntry[]>(this._entriesUrl)
      .catch(this.handleError);
  }

  // Handle Error
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}