import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DiaryService } from '../shared/diary.service';
import { DiaryPage } from '../diary/diary';

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
    this.navCtrl.push(DiaryPage);
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
        for (let i = 0; i < modules.length; i++) {
          this.modules[i] = modules[i];
        }
        this.modules = this.removeDuplicates(this.modules,'name');
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

  removeDuplicates(originalArray, objKey) {
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