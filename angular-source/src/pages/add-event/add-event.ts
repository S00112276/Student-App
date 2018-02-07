import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  event = { subject: "", location: "", details: "", date: "", time: "" };

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private calendar: Calendar) {
  }

  // Declare Variables
  events: any[] = [];
  title: String;
  startDate: Date;
  dueDate: Date;
  lecturer: String;
  groups: String;
  room: String;
  module: String;

  save() {
    this.calendar.createEvent(this.event.subject, this.event.location, this.event.details, new Date(this.event.date), new Date(this.event.time)).then(
      (msg) => {
        let alert = this.alertCtrl.create({
          title: 'Success!',
          subTitle: 'Event saved successfully',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
      },
      (err) => {
        let alert = this.alertCtrl.create({
          title: 'Failed!',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }

}