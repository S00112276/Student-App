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

  constructor(private _http: HttpClient) { }

  // Get Diary Entries
  getEntries(): Observable<IEntry[]> {
    return this._http.get<IEntry[]>(this._entriesUrl)
      .catch(this.handleError);
  }

  // Get Lecturers
  getLecturers() {
    
  }

  // Handle Error
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}