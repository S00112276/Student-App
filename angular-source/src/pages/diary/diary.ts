import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController } from 'ionic-angular';
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
  isLecturer: boolean;
  lecturerId: any;
  groupId: any;
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
  studentModules: any[] = [];
  lecturerModules: any[] = [];
  courses: any[] = [];

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private _diaryService: DiaryService,
    private _authService: AuthService,
    public modalCtrl: ModalController) {
    this.user = _authService.loadUser();
    this.userObj = JSON.parse(this.user);
    this.checkLogin();
    this.getLecturers();
  }

  checkLogin() {
    if (this.userObj.email.startsWith("s")) {
      this.isLecturer = false;
    }
    else if (this.userObj.email.startsWith("l")) {
      this.isLecturer = true;
    }
  }

  // Check overdue
  checkOverdue(entry) {
    entry = new Date(entry.dueDate);
    if (entry < new Date()) {
      return true;
    };
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
      if (this.isLecturer) {
        this.getLecturerModules();
      }
      else {
        this.getStudentModules();
      }
    },
      err => {
        console.log(err);
        return false;
      });
  }

  // Return Lecturers Modules for lectuerId
  getLecturerModules() {
    this.lecturerId = this.userObj.id;
    this._diaryService.getLecturerModules(this.lecturerId).subscribe(modules => {
      this.lecturerModules = modules;
      this.getEntries(this.lecturerModules);
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
      this.studentModules = modules;
      this.getEntries(this.studentModules);
    },
      err => {
        console.log(err);
        return false;
      });
  }

  // Returns Diary Entries
  getEntries(userModules) {
    this._diaryService.getEntries().subscribe(entries => {
      for (var i = 0; i < entries.length; i++) {
        for (let m = 0; m < userModules.length; m++) {
          if (entries[i].module == userModules[m]._id) {
            this.entries.push(entries[i]);
          }
        }
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
      if (this.entries.length === entries.length) {
        let sortedResults = [];
        sortedResults = this.entries.sort(this.sortByDate);
      }
    },
      error => this.errorMessage = <any>error);
  }

  deleteEntry(entry) {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Are you sure you want to delete this entry?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this._diaryService.deleteEntry(entry._id).subscribe(() => {
              this.refreshPage();
            });
          }
        }
      ]
    });
    alert.present();
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

  editEntry(entry) {
    this.navCtrl.push(AddEventPage, {
      id: entry._id,
      title: entry.title,
      startDate: new Date(),
      dueDate: entry.due,
      lecturer: entry.lecturer,
      groups: entry.groups,
      room: entry.room,
      module: entry.module._id,
      percentage: entry.percentage,
      description: entry.description
    });
  }

  refreshPage() {
    this.navCtrl.remove(1, 1).then(() => {
      this.navCtrl.push(DiaryPage);
    });
  }
}