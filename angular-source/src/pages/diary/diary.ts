import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AddEventPage } from '../add-event/add-event';
import { DiaryService } from '../shared/diary.service';
import { IEntry } from '../diary/diary-entry';

@IonicPage()
@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html',
})
export class DiaryPage {
  entries: IEntry[] = [];
  lecturers: any[] = [];
  errorMessage: string;
  lecturerName: any[] = [];

  constructor(private alertCtrl: AlertController,
    public navCtrl: NavController,
    private _diaryService: DiaryService) {
      this.getLecturers(this.lecturers);      
      this.getEntries(this.entries, this.lecturers, this.lecturerName);
  }

  getLecturers(lecturers) {
    this._diaryService.getLecturers().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        lecturers[i] = data[i];
      }
    },
    error => this.errorMessage = <any>error);
    console.log(lecturers);
  }

  getEntries(entries, lecturers, lecturerName) {
    this._diaryService.getEntries().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        entries[i] = data[i];
        for(var j = 0; j < entries.length; j++) {
          for(var k = 0; k < lecturers.length; k++ ) {
            if(entries[j].lecturer == lecturers[k]._id) {
                lecturerName.push((lecturers[k].firstName + " " + lecturers[k].lastName));
            }
          }
        }
      }      
    },
      error => this.errorMessage = <any>error);
  }

  addEvent() {
    this.navCtrl.push(AddEventPage);
  }
}