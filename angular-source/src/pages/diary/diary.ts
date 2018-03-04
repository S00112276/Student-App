import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { AddEventPage } from '../add-event/add-event';
import { DiaryService } from '../shared/diary.service';
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
  entries: any[] = [];
  lecturers: any[] = [];
  modules: any[] = [];
  courses: any[] = [];

  constructor(public navCtrl: NavController,
    private _diaryService: DiaryService,
    public modalCtrl: ModalController) {
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
      this.getEntries(this.entries, this.lecturers, this.modules, this.courses);
    }, 
    err => {
      console.log(err);
        return false;
    });
  }

  // Returns Diary Entries
  getEntries(entries, lecturers, modules, courses) {
      this._diaryService.getEntries().subscribe(data => {
        for (var i = 0; i < data.length; i++) {
          entries.push(data[i]);
          for (var j = 0; j < entries.length; j++) {
            for (var k = 0; k < lecturers.length; k++) {
              if (entries[j].lecturer == lecturers[k]._id) {
                entries[j].lecturer = (lecturers[k].firstName + " " + lecturers[k].lastName);
              }
            }
            for (var l = 0; l < modules.length; l++) {
              if (entries[j].module == modules[l]._id) {
                entries[j].module = (modules[l].name);
              }
            }
          }
        }  
        this.entries.sort(this.sortByDate);
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