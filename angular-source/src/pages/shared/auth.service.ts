import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    isDev: boolean;

    constructor(private http: Http) {
        this.isDev = false;
    }

    // Register Student
    registerStudent(user) {
        console.log("Register Student: " + user.firstName + " in auth.service.ts");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('users/registerstudent');
        return this.http.post(ep, user, { headers: headers })
            .map(res => res.json());
    }

    // Register User
    registerUser(user) {
        console.log("Register User: " + user.firstName + " in auth.service.ts");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(res => res.json());
    }

    // Authenticate User
    authUser(user) {
        console.log("auth user: " + user);
        console.log("auth data: " + user.data);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(res => res.json());
    }

    // Get User Profile
    getProfile() {
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorisation', this.authToken);
        headers.append('Content-Type', 'application/json');
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

    // Logged in
    loggedIn() {
        return tokenNotExpired();
    }

    // Logged Out
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}