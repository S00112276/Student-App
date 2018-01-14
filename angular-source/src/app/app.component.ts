import { App } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { TimetablePage } from '../pages/timetable/timetable';
import { ChatPage } from '../pages/chat/chat';
import { DiaryPage } from '../pages/diary/diary';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav; // https://forum.ionicframework.com/t/how-to-add-sidebar-menu-to-my-existing-ionic-project/56481/2
  
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
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