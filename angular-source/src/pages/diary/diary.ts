import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AddEventPage } from '../add-event/add-event';

@IonicPage()
@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html',
})
export class DiaryPage {

  constructor( public navCtrl: NavController) {}

  events: any[] = [
    {
      subject: 'RAD 302',
      title: 'Project Proposal',
      date: '29.01.2018',
      time: '12:00'
    },
    {
      subject: 'PROJ 300',
      title: 'Report Update',
      date: '29.01.2018',
      time: '14:00'
    },
    {
      subject: 'DATA DEV',
      title: 'Triggers Assignment',
      date: '29.01.2018',
      time: '16:00'
    }
  ];

  addEvent() {
    this.navCtrl.push(AddEventPage);
  }
}