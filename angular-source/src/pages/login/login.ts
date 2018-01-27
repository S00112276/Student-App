import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthService } from '../shared/auth.service';

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
    private _authService: AuthService, 
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

    this._authService.authLecturer(user).subscribe(data => {
      if(data.success) {
        this._authService.storeUserData(data.token, data.user);
        let alert = this.alertCtrl.create({
          title: 'Logged In!',
          subTitle: 'You are now logged in',
          buttons: ['OK']
        });
        alert.present();
        this._authService.loggedIn(); // Calls loggedIn to update BehaviorSubject
      } else {
        let alert = this.alertCtrl.create({
          title: 'Login Unsuccessful',
          subTitle: data.msg,
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

}
