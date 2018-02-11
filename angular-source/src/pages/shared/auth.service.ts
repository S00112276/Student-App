import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    isDev: boolean;
    // Observable to send messages to when the user is no long auth'd
    // BehaviorSubject is like a ReplaySubject with a stack depth of 1
    isAuthed: BehaviorSubject<boolean>

    constructor(private http: Http) {
        this.isDev = false;
        this.isAuthed = new BehaviorSubject(false);
    }

    // Send Validation Email
    sendValEmail(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('email/sendemail');
        return this.http.post(ep, user, { headers: headers })
        .map(res => res.json());
    }

    // Register Student
    registerStudent(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('users/registerstudent');
        this.user = user;        
        return this.http.post(ep, user, { headers: headers })
            .map(res => res.json());
    }

    // Register Lecturer
    registerLecturer(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('users/registerlecturer');
        this.user = user;
        return this.http.post(ep, user, { headers: headers })
            .map(res => res.json());
    }

    // Authenticate Lecturer
    authLecturer(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('users/authenticatelecturer');
        return this.http.post(ep, user, { headers: headers })
            .map(res => res.json());
    }

    // Authenticate Student
    authStudent(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('users/authenticatestudent');
        return this.http.post(ep, user, { headers: headers })
            .map(res => res.json());
    }

    // Get User Profile - Not in use
    getProfile() {
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        let ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(res => res.json());
    }

    // Store User Data
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    // Load Token from Local Storage
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
      }

    // Sets beginning of every endpoint
    prepEndpoint(ep) {
        if(this.isDev) {
            return ep;
        } else {
            return 'http://localhost:3000/' + ep;
        }
    }

    // Logged in --> Used to conditonally hide/show elements
    loggedIn() {
        this.isAuthed.next(!this.isAuthed.value);
        return tokenNotExpired();
    }

    // Logged Out
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}