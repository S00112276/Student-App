import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AddEventPage } from '../add-event/add-event';
import { DiaryService } from '../shared/diary.service';

@IonicPage()
@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html',
})
export class DiaryPage {

  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private _diarySevice: DiaryService
  ) {}
// Declare Variables
  events: any[] = [];
  title: String;
  startDate: Date;
  dueDate: Date;
  lecturer: String;
  groups: String;
  room: String;
  module: String;

  // Display Events


  addEvent() {
    this.navCtrl.push(AddEventPage);
  }
}