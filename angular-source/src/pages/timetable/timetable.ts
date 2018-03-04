import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../shared/auth.service';
import { DiaryService } from '../shared/diary.service';

@IonicPage()
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _authService: AuthService,
    private _diaryService: DiaryService) {
      this.user = _authService.loadUser();
      console.log("user: " + this.user);
      this.getModules();
  }
    
  user: any;
  modules: any[] = [];
  errorMessage: string;
  groupId = "5a78f42853e0020c2cf5b22c"; // Should be from user in localStorage
  mondayModules: any[] = [];
  tuesdayModules:any[] = [];
  wednesdayModules:any[] = [];
  thursdayModules:any[] = [];
  fridayModules:any[] = [];
    
  // Return Modules for groupId
  getModules() {
    this._diaryService.getStudentModules(this.groupId).subscribe(modules => {
      this.modules = modules;
      this.filterModules();
    }, 
    err => {
      console.log(err);
        return false;
    });
  }

  // Filter Modules by Day
  filterModules() {
    for (let i = 0; i < this.modules.length; i++) {
      if(this.modules[i].day.toLowerCase() == "monday") {
        this.mondayModules.push(this.modules[i]);
      }
      else if(this.modules[i].day.toLowerCase() == "tuesday") {
        this.tuesdayModules.push(this.modules[i]);
      }
      else if(this.modules[i].day.toLowerCase() == "wednesday") {
        this.wednesdayModules.push(this.modules[i]);
      }
      else if(this.modules[i].day.toLowerCase() == "thursday") {
        this.thursdayModules.push(this.modules[i]);
      }
      else if(this.modules[i].day.toLowerCase() == "friday") {
        this.fridayModules.push(this.modules[i]);
      }
    }
  }
}