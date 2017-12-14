import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthService } from '../shared/auth.service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // Login
  email: String;
  password: String;

  constructor(
    private authService: AuthService, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
  ) { }

  ionViewDidLoad() { }

  Login() {
    // Create user Object for Login
    const user = {
      email: this.email.toLowerCase(),
      password: this.password
    }

    this.authService.authLecturer(user).subscribe(data => {
      console.log("authService/authUser " + data.msg);
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        let alert = this.alertCtrl.create({
          title: 'Logged In!',
          subTitle: 'You are now logged in',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(HomePage);
      } else {
        let alert = this.alertCtrl.create({
          title: 'Login Unsuccessful',
          subTitle: 'Please check that you have entered your details correctly.',
          buttons: ['OK']
        });
      }
    });
  }

}
