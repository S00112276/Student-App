import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DiaryService } from '../shared/diary.service';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
  errorMessage: String;

  title: string;
  dueDate: string;
  time: string;
  room: string;
  module: { _id: string, lecturer: string, groups: [{}] };
  percentage: string;
  description: string;
  group: string;
  lecturer: string;

  newEntry: {};

  modules: any[] = [];

  courses: any[] = [];

  groups: any[] = [];

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private _diaryService: DiaryService
  ) {
    this.getModules();
    this.getCourses();
  }

  insertEntry() {
    this.groups = this.module.groups;
    this.lecturer = this.module.lecturer;
    var time = 'T'
    var dueTime = time.concat(this.time)
    var due = this.dueDate.concat(dueTime);
    const entry = {
      title: this.title,
      startDate: new Date(),
      dueDate: due,
      lecturer: this.lecturer,
      groups: this.groups,
      room: this.room,
      module: this.module._id,
      percentage: this.percentage,
      description: this.description
    }

    this._diaryService.insertEntry(entry).subscribe(data =>  {
      if (data.success) {
          let alert = this.alertCtrl.create( {
            title:'Added to DB', 
            subTitle:'YAY', 
            buttons:['OK']
          }); 
          alert.present(); 
    this.navCtrl.pop();
        } else {
          let alert = this.alertCtrl.create( {
            title:'Failed', 
            subTitle:':(', 
            buttons:['OK']
          }); 
          alert.present(); 
        }
      });
  }

    // Get Modules
    getModules() {
      this._diaryService.getModules().subscribe(modules => {
        this.modules = modules;
      }, 
      err => {
        console.log(err);
          return false;
      });
    }
  
    // Get Courses
    getCourses() {
      this._diaryService.getCourses().subscribe(courses => {
        this.courses = courses;
      }, 
      err => {
        console.log(err);
          return false;
      });
    }

  // Returns data on selected collection
/*   populateArrays(array, _url) {
    this._diaryService.populateArrays(_url).subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        array[i] = data[i];
      }
      // this.getGroups(this.groups); 
    },
      error => this.errorMessage = <any>error);
  } */

  /*   filterGroups(moduleID) {
      for (let i = 0; i < this.modules.length; i++) {
        if(this.modules[i].name == moduleID)
            console.log(this.modules[i].groups);
      }
    }
  
    getGroups(module) {
      for (let i = 0; i < this.courses.length; i++) {
        for (let j = 0; j < this.courses[i].length; j++) {
          this.groups.push(this.courses[i].groups[j]);
        }
      }
    } */

  removeDuplicates(originalArray, objKey) {
    this.removeDuplicates(this.groups, 'name');
    var trimmedArray = [];
    var values = [];
    var value;

    for (var i = 0; i < originalArray.length; i++) {
      value = originalArray[i][objKey];

      if (values.indexOf(value) === -1) {
        trimmedArray.push(originalArray[i]);
        values.push(value);
      }
    }

    return trimmedArray;
  }
}