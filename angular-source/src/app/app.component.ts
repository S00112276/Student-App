import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { HeaderColor } from '@ionic-native/header-color';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { TimetablePage } from '../pages/timetable/timetable';
import { DiaryPage } from '../pages/diary/diary';
import { HomePage } from '../pages/home/home';
import { ChatRoomPage } from '../pages/chat-room/chat-room';
import { AuthService } from '../pages/shared/auth.service';
import { WelcomePage } from '../pages/welcome/welcome';

import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav; // https://forum.ionicframework.com/t/how-to-add-sidebar-menu-to-my-existing-ionic-project/56481/2
  user: any;
  userObj: any;

  rootPage: any;

  showSplash = true;

  constructor(
    private _authService: AuthService,
    private inAppBrowser: InAppBrowser,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {
    this.user = _authService.loadUser();
    console.log(this.user);
    this.userObj = JSON.parse(this.user);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleBlackOpaque();
      splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)
    });
  }

  ngAfterContentInit() {
    // Listen to authNotifier
    this._authService.isAuthed
      //.filter(res => res !== null)
      .subscribe(status => {
        if (!status) { // when not auth'd
          this.rootPage = WelcomePage;
        }
        else {
          this.rootPage = HomePage;
        }
      });
  }

  logout() {
    this._authService.logout();
    this._authService.loggedIn(); // Calls loggedIn to update BehaviorSubject
  }

  openPage(page) {
    if (page === 'TimetablePage') {
      this.nav.push(TimetablePage);
    }
    else if (page === 'ChatRoomPage') {
      this.nav.push(ChatRoomPage);
    }
    else if (page === 'DiaryPage') {
      this.nav.push(DiaryPage);
    }
  }

  openITSligo() {
    this.inAppBrowser.create('https://www.itsligo.ie');
  }
}