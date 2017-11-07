import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { TimetablePage } from '../timetable/timetable';
import { ChatPage } from '../chat/chat';
import { DiaryPage } from '../diary/diary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

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
