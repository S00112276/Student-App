import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
  // Declare Variables
  events: any[] = [];
  title: String;
  notes: String;
  startDate: Date;
  dueDate: Date;
  lecturer: String;
  groups: String;
  room: String;
  module: String;
  entry = { subject: "", location: "", details: "", date: "", time: "" };

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

}