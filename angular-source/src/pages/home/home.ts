import { Component, OnInit } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { TimetablePage } from '../timetable/timetable';
import { DiaryPage } from '../diary/diary';
//import { UserService } from '../shared/user.service';
//import { IUser } from '../home/user';
import { Socket } from 'ng-socket-io';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
//users: IUser[];
errorMessage: string;
user: any;
username = '';
timetablePage: any;
diaryPage: any;

  constructor(public navCtrl: NavController, public app: App, private socket: Socket, private _authService: AuthService) {    
    this.timetablePage = TimetablePage;
    this.diaryPage = DiaryPage;
   }

  ngOnInit(): void {
    // this._userService.getUsers().subscribe(users => {
    //   this.users = users;
    // },
    //   error => this.errorMessage = <any>error);
  }

  /* Connects to chat server */
  joinChat() {
    this.user = this._authService.user;
    this.username = this.user.username;
    this.socket.connect();
    this.socket.emit('set-username', this.username);
    this.navCtrl.push('ChatRoomPage', { username: this.username });
  }
}
