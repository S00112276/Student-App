import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
//import { HomePage } from '../home/home';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login() {
    // For Development:
    //this.navCtrl.push(HomePage); //(When Not In Dev Comment Out) 
    this.navCtrl.push(LoginPage);
  }

  signup() {
    // For Development:
    //this.navCtrl.push(HomePage); //(When Not In Dev Comment Out) 
    this.navCtrl.push(SignupPage);
  }

}
