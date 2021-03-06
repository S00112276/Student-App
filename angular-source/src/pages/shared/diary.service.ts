import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class DiaryService {
  isDev: boolean;
  entry: any;

  constructor(private _http: HttpClient, private http: Http) { }

  // Get Diary Entries
  getEntries(): Observable<any[]> {
    return this._http.get<any[]>(this.prepEndpoint('diary/diaryentries'))
      .catch(this.handleError);
  }

  // Insert Diary Entries
  insertEntry(entry) {
    console.log(entry);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('diary/addtodiary');
    this.entry = entry;
    return this.http.post(ep, entry, { headers : headers })
      .map(res => res.json());
  }

  // Delete Entry
  deleteEntry(entryId) {
    let ep = this.prepEndpoint('diary/removefromdiary/' + entryId);
    return this.http.delete(ep)
    .map(res => res.json());
  }

  // Update Entry
  updateEntry(entry) {
    let ep = this.prepEndpoint('diary/updateentry/' + entry._id);
    return this.http.put(ep,entry)
    .map(res => res.json());
  }

  // Get Lecturers
  getLecturers() {
    let ep = this.prepEndpoint('users/lecturers');
    return this.http.get(ep)
      .map(res => res.json());
  }

  // Get Modules
  getModules() {
    let ep = this.prepEndpoint('course/modules');
    return this.http.get(ep)
      .map(res => res.json());
  }

  // Get Courses
  getCourses() {
    let ep = this.prepEndpoint('course/courses');
    return this.http.get(ep)
      .map(res => res.json());
  }

  // Find Module based on groupId
  getStudentModules(groupId) {
    let ep = this.prepEndpoint('course/studentmodules/' + groupId);
    return this.http.get(ep)
      .map(res => res.json());
  }

  // Find Module based on lecturerId
  getLecturerModules(lecturerId) {
    let ep = this.prepEndpoint('course/lecturermodules/' + lecturerId);
    return this.http.get(ep)
      .map(res => res.json());
  }

  // Handle Error
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  // Sets beginning of every endpoint
  prepEndpoint(ep) {
    if(this.isDev) {
        return ep;
    } else {
      return 'http://still-beach-80885.herokuapp.com/' + ep;
        //return 'http://localhost:3000/' + ep;
    }
}
}