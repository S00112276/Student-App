import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthService } from '../shared/auth.service'
import { ValidateService } from '../shared/validate.service';
import { Console } from '@angular/core/src/console';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  // Decalre Variables
  firstName: String;
  lastName: String;
  username: String;
  password: String;
  studentID: String;

   // Declare Services
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    private validateService: ValidateService, 
    private authService: AuthService
  ) { }

  ionViewDidLoad() { }

  // SignUp Button Clicked
  onSignUpSubmit(){
    console.log("Sign Up Submit");
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.studentID + "@mail.itsligo.ie",
      username: this.username,
      studentId: this.studentID,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)) {
      console.log("Validating Register Failed");
      let alert = this.alertCtrl.create({
        title: 'Failed to Register',
        subTitle: 'Please fill out all the fields',
        buttons: ['OK']
      });
      alert.present();
      return false;
    }

    // Validate ID
    if (!this.validateService.validateUserID(user.studentId)) {
      console.log("Validating StudentID Failed");
      let alert = this.alertCtrl.create({
        title: 'Failed to Register',
        subTitle: 'Incorrect StudentID Format',
        buttons: ['OK']
      });
      alert.present();
      return false;
    }

    // Register User
    // Student
    if(user.studentId.startsWith("S") || user.studentId.startsWith("s"))
    {
      this.authService.registerStudent(user).subscribe(data => {
        if (data.success) {
          console.log("Student Registered");
            let alert = this.alertCtrl.create({
              title: 'Registered Successfully',
              subTitle: 'Please check your college email to verify your Student ID',
              buttons: ['OK']
            });
            alert.present();
          this.navCtrl.push(HomePage);
        } else {
          let alert = this.alertCtrl.create({
            title: 'Registration Unsuccessful',
            subTitle: 'Please Try Again',
            buttons: ['OK']
          });
        }
      });
    }
    // Lecturer
    else if(user.studentId.startsWith("L") || user.studentId.startsWith("l"))
    {
      this.authService.registerLecturer(user).subscribe(data => {
        console.log("Out of auth service: " + data);
        if (data.success) {
          console.log("Lecturer Registered");
            let alert = this.alertCtrl.create({
              title: 'Registered Successfully',
              subTitle: 'Please check your college email to verify your Lecturer ID',
              buttons: ['OK']
            });
            alert.present();
          this.navCtrl.push(HomePage);
        } else {
          let alert = this.alertCtrl.create({
            title: 'Registration Unsuccessful',
            subTitle: 'Please Try Again',
            buttons: ['OK']
          });
        }
      });
    }
    else 
      {
        console.log("StudentId does not start with either S or L");
        let alert = this.alertCtrl.create({
          title: 'Failed to Register',
          subTitle: 'Incorrect StudentID Format',
          buttons: ['OK']
        });
        alert.present();
        return false;
      }
    // this.authService.registerUser(user).subscribe(data => {
    //   if (data.success) {
    //     console.log("User Registered");
    //       let alert = this.alertCtrl.create({
    //         title: 'Registered Successfully',
    //         subTitle: 'Please check your college email to verify your Student ID',
    //         buttons: ['OK']
    //       });
    //     this.navCtrl.push(HomePage);
    //   } else {
    //     let alert = this.alertCtrl.create({
    //       title: 'Registration Unsuccessful',
    //       subTitle: 'Please Try Again',
    //       buttons: ['OK']
    //     });
    //   }
    // });
  }
}