import { App } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TimetablePage } from '../pages/timetable/timetable';
import { ChatPage } from '../pages/chat/chat';
import { DiaryPage } from '../pages/diary/diary';
import { HomePage } from '../pages/home/home';
import { AuthService } from '../pages/shared/auth.service';
import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav; // https://forum.ionicframework.com/t/how-to-add-sidebar-menu-to-my-existing-ionic-project/56481/2
  
  rootPage: any;

  constructor(private _authService: AuthService,
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
 /*    if(_authService.loggedIn() == true) {
      this.rootPage = HomePage;
    }
    else {
      this.rootPage = WelcomePage;
    } */
  }

  ngAfterContentInit() {
    // Listen to authNotifier
    this._authService.isAuthed
    //.filter(res => res !== null)
      .subscribe(status => {
        if(!status){ // when not auth'd
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
    else if (page === 'ChatPage') {
      this.nav.push(ChatPage);
    }
    else if (page === 'DiaryPage') {
      this.nav.push(DiaryPage);
    }
  }
}