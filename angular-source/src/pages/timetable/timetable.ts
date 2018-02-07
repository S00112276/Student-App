import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() { }

  events = [
    {
      _id: 1,
      subject: 'Rich Application Development',
      lecturer: 'Paul Powell',
      location: 'A0005',
      day: 'Monday',
      time: '12:00 - 13:00'
    },
    {
      _id: 2,
      subject: 'Software Project Management',
      lecturer: 'Kinsellal',
      location: 'E2011',
      day: 'Tuesday',      
      time: '13:00 - 14:00'
    },
    {
      _id: 3,
      subject: 'Web Programming',
      lecturer: 'Shane Banks',
      location: 'D2039',
      day: 'Wednesday',      
      time: '14:00 - 15:00'
    },
    {
      _id: 4,
      subject: 'Foundation Object Oriented Programming',
      lecturer: 'Keith McManus',
      location: 'B1042',
      day: 'Thursday',      
      time: '16:00 - 18:00'
    },
    {
      _id: 5,
      subject: 'Professional Development',
      lecturer: 'Aine Mitchell',
      location: 'A0004',
      day: 'Friday',      
      time: '9:00 - 10:00'
    },
  ]
}
