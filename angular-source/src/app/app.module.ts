import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Services
import { AuthService } from '../pages/shared/auth.service';
import { ValidateService } from '../pages/shared/validate.service';
import { DiaryService } from '../pages/shared/diary.service';

// Components
import { WelcomePage } from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TimetablePage } from '../pages/timetable/timetable';
import { DiaryPage } from '../pages/diary/diary';
import { AddEventPage } from '../pages/add-event/add-event';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Calendar } from '@ionic-native/calendar';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    ContactPage,
    HomePage,
    TimetablePage,
    DiaryPage,
    AddEventPage
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    ContactPage,
    HomePage,
    TimetablePage,
    DiaryPage,
    AddEventPage
  ],
  providers: [
    AuthService,
    ValidateService,
    DiaryService,
    StatusBar,
    SplashScreen,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
