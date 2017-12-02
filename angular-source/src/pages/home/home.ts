import { Component, OnInit } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { TimetablePage } from '../timetable/timetable';
import { ChatPage } from '../chat/chat';
import { DiaryPage } from '../diary/diary';
import { UserService } from '../shared/user.service';
//import { IUser } from '../home/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
//users: IUser[];
errorMessage: string;

  constructor(public navCtrl: NavController, public app: App, private _userService: UserService) {

  }

  ngOnInit(): void {
    // this._userService.getUsers().subscribe(users => {
    //   this.users = users;
    // },
    //   error => this.errorMessage = <any>error);
  }

  logout() {
    //Api Token Logout
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  openPage(page) {
    if (page === 'TimetablePage') {
      this.app.getActiveNav().push(TimetablePage);
    }
    else if (page === 'ChatPage') {
      this.app.getActiveNav().push(ChatPage);
    }
    else if (page === 'DiaryPage') {
      this.app.getActiveNav().push(DiaryPage);
    }
  }

}
