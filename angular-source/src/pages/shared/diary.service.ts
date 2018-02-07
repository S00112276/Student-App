import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class DiaryService {
    isDev: boolean;

    constructor(private http: Http) {
        this.isDev = false;
    }

    // Get Diary Entries
    getEntries() {
        let ep = this.prepEndpoint('diary/diaryentries');
        return this.http.get(ep)
            .map(res => res.json());
    }

    // Prepare Endpoint (Always the same)
    prepEndpoint(ep) {
        if(this.isDev) {
            return ep;
        } else {
            return 'http://localhost:3000/' + ep;
        }
    }
}