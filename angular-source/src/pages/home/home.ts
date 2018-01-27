import { Component, OnInit } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { TimetablePage } from '../timetable/timetable';
import { ChatPage } from '../chat/chat';
import { DiaryPage } from '../diary/diary';
//import { UserService } from '../shared/user.service';
//import { IUser } from '../home/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
//users: IUser[];
errorMessage: string;
timetablePage: any;
chatPage: any;
diaryPage: any;

  constructor(public navCtrl: NavController, public app: App 
    //,private _userService: UserService
  ) 
    {
    this.timetablePage = TimetablePage;
    this.chatPage = ChatPage;
    this.diaryPage = DiaryPage;
  }

  ngOnInit(): void {
    // this._userService.getUsers().subscribe(users => {
    //   this.users = users;
    // },
    //   error => this.errorMessage = <any>error);
  }
}
