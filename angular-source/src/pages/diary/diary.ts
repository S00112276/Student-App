import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { AddEventPage } from '../add-event/add-event';
import { DiaryService } from '../shared/diary.service';
import { AuthService } from '../shared/auth.service';
import { DiaryEntryPage } from '../diary-entry/diary-entry';

@IonicPage()
@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html',
})
export class DiaryPage {
  errorMessage: string;
  entryType: string[] = [
    'https://drslash.com/wp-content/uploads/2014/07/Notes.png',
    'https://image.flaticon.com/icons/svg/432/432413.svg',
    'https://image.flaticon.com/icons/svg/235/235248.svg',
    'https://image.flaticon.com/icons/svg/236/236816.svg',
    'https://image.flaticon.com/icons/svg/236/236830.svg'
  ];
  user: any;
  userObj: any;
  entries: any[] = [];
  lecturers: any[] = [];
  modules: any[] = [];
  courses: any[] = [];

  constructor(public navCtrl: NavController,
    private _diaryService: DiaryService,
    private _authService: AuthService,
    public modalCtrl: ModalController) {
    this.user = _authService.loadUser();
    this.userObj = JSON.parse(this.user);
    console.log(this.userObj.username);
    this.getLecturers();
  }

  // Get Lecturers
  getLecturers() {
    this._diaryService.getLecturers().subscribe(lecturers => {
      this.lecturers = lecturers;
      this.getModules();
    },
      err => {
        console.log(err);
        return false;
      });
  }

  // Get Modules
  getModules() {
    this._diaryService.getModules().subscribe(modules => {
      this.modules = modules;
      this.getCourses();
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
      this.getEntries();
    },
      err => {
        console.log(err);
        return false;
      });
  }

  // Returns Diary Entries
  getEntries() {
    this._diaryService.getEntries().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        this.entries.push(data[i]);
        for (var j = 0; j < this.entries.length; j++) {
          for (var k = 0; k < this.lecturers.length; k++) {
            if (this.entries[j].lecturer == this.lecturers[k]._id) {
              this.entries[j].lecturer = (this.lecturers[k].firstName + " " + this.lecturers[k].lastName);
            }
          }
          for (var l = 0; l < this.modules.length; l++) {
            if (this.entries[j].module == this.modules[l]._id) {
              this.entries[j].module = (this.modules[l].name);
            }
          }
        }
      }
      if (this.entries.length === data.length) {
        let sortedResults = [];
        sortedResults = this.entries.sort(this.sortByDate);
      }
    },
      error => this.errorMessage = <any>error);
  }

  // Sort By Date
  sortByDate(event1: any, event2: any) {
    if (event1.dueDate > event2.dueDate) return 1;
    else if (event1.dueDate === event2.dueDate) return 0;
    else return -1;
  }

  openModal(entry) {
    let modal = this.modalCtrl.create(DiaryEntryPage, entry);
    modal.present();
  }

  addEvent() {
    this.navCtrl.push(AddEventPage);
  }
}