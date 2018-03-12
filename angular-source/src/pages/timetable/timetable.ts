import * as moment from 'moment';
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
  user: any;
  userObj: any;
  isLecturer: boolean;
  modules: any[] = [];
  courses: any[] = [];
  moduleGroups: any[] = [];
  groups: any[] = [];
  lecturers: any[] = [];
  errorMessage: string;
  groupId: string;
  lecturerId: string;
  mondayModules: any[] = [];
  tuesdayModules:any[] = [];
  wednesdayModules:any[] = [];
  thursdayModules:any[] = [];
  fridayModules:any[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _authService: AuthService,
    private _diaryService: DiaryService) {
      this.user = _authService.loadUser(); 
      this.userObj = JSON.parse(this.user);
      this.checkLogin();
  }

  // Check Lecturer or Student
  checkLogin() {
    if(this.userObj.email.startsWith("s"))
    {
      this.isLecturer = false;
      this.getStudentModules();
    }
    else if(this.userObj.email.startsWith("l"))
    {
      this.isLecturer = true;
      this.getLecturerModules();
    }
  }

  // Return Lecturers Modules for lectuerId
  getLecturerModules() {
    this.lecturerId = this.userObj.id;
    this._diaryService.getLecturerModules(this.lecturerId).subscribe(modules => {
      this.modules = modules;
      this.getCourses();
    }, 
    err => {
      console.log(err);
        return false;
    });
  }
    
  // Return Students Modules for groupId
  getStudentModules() {
    this.groupId = this.userObj.groupId;
    this._diaryService.getStudentModules(this.groupId).subscribe(modules => {
      this.modules = modules;
      this.groupId = this.user.groupId;
      this.getLecturers();
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
      let dateString = this.modules[i].startTime;
      this.modules[i].startTime = moment(dateString).format("H:mm ");
    }
    this.mondayModules.sort(this.sortModules);
    this.tuesdayModules.sort(this.sortModules);
    this.wednesdayModules.sort(this.sortModules);
    this.thursdayModules.sort(this.sortModules);
    this.fridayModules.sort(this.sortModules);
  }

  // Get Lecturers
  getLecturers() {
    this._diaryService.getLecturers().subscribe(lecturers => {
      this.lecturers = lecturers;
      this.lecturerNames();
    }, 
    err => {
      console.log(err);
        return false;
    });
  }

  // Get Courses
  getCourses() {
    this._diaryService.getCourses().subscribe(courses => {
      for (let i = 0; i < courses.length; i++) {
        this.courses.push(courses[i]);
      }
      this.getGroups();
    }, 
    err => {
      console.log(err);
        return false;
    });
  }

  // Get Module Groups
  getModuleGroups(){
    for (let i = 0; i < this.modules.length; i++) {
      for (let j = 0; j < this.modules[i].groups.length; j++) {
        for(let k = 0; k < this.groups.length; k++) {
          for(let l = 0; l < this.groups[k].length; l++){
            if(this.groups[k][l]._id == this.modules[i].groups[j]) {
              this.modules[i].groups[j] = this.groups[k][l].name;
            }
          }
        }
      }
    }
    this.filterModules();
  }

  // Get Groups
  getGroups() {
    for (let i = 0; i < this.courses.length; i++) {
      this.groups.push(this.courses[i].groups);
    }
    this.getModuleGroups();
  }

  // Set Lecturer Names
  lecturerNames() {
    for (let i = 0; i < this.lecturers.length; i++) {
      for (let j = 0; j < this.modules.length; j++) {
        if(this.lecturers[i]._id == this.modules[j].lecturer){
          this.modules[j].lecturer = this.lecturers[i].firstName + " " + this.lecturers[i].lastName;
        }
      }
    }
    this.filterModules();
  }

  // Sort Modules by Start Time
  sortModules(module1: any, module2: any) {
    if (module1.startTime > module2.startTime) return 1;
    else if (module1.startTime === module2.startTime) return 0;
    else return -1;
  }
}