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
  errorMessage: string;

  constructor(private alertCtrl: AlertController,
    public navCtrl: NavController,
    private _diaryService: DiaryService) {
      this.getEntries(this.entries);
  }

  getEntries(entries) {
    this._diaryService.getEntries().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        entries[i] = data[i];
      }      
    },
      error => this.errorMessage = <any>error);
  }

  addEvent() {
    this.navCtrl.push(AddEventPage);
  }
}