import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
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
    'https://image.flaticon.com/icons/svg/236/236816.svg'
  ];

  entries: any[] = [];

  lecturers: any[] = [];
  private _lecturersUrl = 'http://localhost:3000/users/lecturers';

  modules: any[] = [];
  private _modulesUrl = 'http://localhost:3000/course/modules';

  courses: any[] = [];
  private _coursesUrl = 'http://localhost:3000/course/courses';

  constructor(private alertCtrl: AlertController,
    public navCtrl: NavController,
    private _diaryService: DiaryService,
    public modalCtrl: ModalController) {
    this.entries.push({ title: 'Assessment', startDate: new Date(), dueDate: "2018-01-01T13:00:00.000Z", lecturer: 'Keith McManus', groups: [], room: 'D2037', module: 'prj300' });
    this.entries.push({ title: 'Assignment', startDate: new Date(), dueDate: "2018-02-02T13:00:00.000Z", lecturer: 'Paul Powell', groups: [], room: 'D2039', module: 'rad302' });
    this.entries.push({ title: 'Presentation', startDate: new Date(), dueDate: "2018-03-03T13:00:00.000Z", lecturer: 'Colm Davey', groups: [], room: 'B1041', module: 'clientside scripting' });
    this.entries.push({ title: 'Event', startDate: new Date(), dueDate: "2018-04-04T13:00:00.000Z", lecturer: 'Padraig Harte', groups: [], room: 'Aurivo Auditorium', module: 'professional development' });
    this.entries.push({ title: 'Assignment', startDate: new Date(), dueDate: "2018-12-12T13:00:00.000Z", lecturer: 'Paul Powell', groups: [], room: 'D2039', module: 'rad302' }); 
    this.getEntries(this.entries, this.lecturers, this.modules, this.courses);
    this.entries.sort(this.sortByDate);
  }

  sortByDate(event1: any, event2: any) {
    if (event1.dueDate > event2.dueDate) return 1;
    else if (event1.dueDate === event2.dueDate) return 0;
    else return -1;
  }

  // Returns data on selected collection
  populateArrays(array, _url) {
    this._diaryService.populateArrays(_url).subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        array[i] = data[i];
      }
    },
      error => this.errorMessage = <any>error);
  }

  // Returns Diary Entries
  getEntries(entries, lecturers, modules, courses) {
    this.populateArrays(lecturers, this._lecturersUrl);
    this.populateArrays(modules, this._modulesUrl);
    this.populateArrays(courses, this._coursesUrl);
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
    },
      error => this.errorMessage = <any>error);
  }

  openModal(entry) {
    let modal = this.modalCtrl.create(DiaryEntryPage, entry);
    modal.present();
  }

  addEvent() {
    this.navCtrl.push(AddEventPage);
  }
}