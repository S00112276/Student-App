import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  firstName: String;
  lastName: String;
  username: String;
  email: String; // Set to stuentID + "@mail.itsligo.ie"
  password: String;
  studentID: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  // When SignUp is clicked goes to HomePage
  signup() {
    // Api connections
    this.navCtrl.push(HomePage);
  }
}
