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
  title: String;
  notes: String;
  startDate: Date;
  dueDate: Date;
  lecturer: String;
  groups: String;
  room: String;
  module: String;
  entry = { subject: "", location: "", details: "", date: "", time: "" };
  
  modules: any[] = [];
  private _modulesUrl = 'http://localhost:3000/course/modules';

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private _diaryService: DiaryService
  ) {
    this.populateArrays(this.modules, this._modulesUrl);
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
}