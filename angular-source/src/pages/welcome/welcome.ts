import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App, LoadingController, Slides } from 'ionic-angular';
import { AuthService }from '../shared/auth.service'
import { ValidateService }from '../shared/validate.service'; 

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage  {
  public loginForm: any;
  public backgroundImage = 'assets/img/background/background-6.jpg';

  constructor(
    public loadingCtrl: LoadingController,
    public app: App,
    public navCtrl:NavController, 
    public navParams:NavParams, 
    public alertCtrl:AlertController, 
    private validateService:ValidateService, 
    private _authService:AuthService  
  ) { }

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  presentLoading(message) {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: message,
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }

  // Reset Password -- Not Being Used
  resetPassword() {
    this.presentLoading('An e-mail was sent with your new password.');
  }

   // Decalre Variables for Register
   firstName: String; 
   lastName: String; 
   username: String; 
   password: String; 
   confirmPassword: String; 
   studentID: String;
   email: String;
   password1: String;
 
   // SignUp Button Clicked
   SignUp() {
     const user =  { 
       email: this.studentID + "@mail.itsligo.ie",
       username:this.username, 
       studentId:this.studentID.toLowerCase(), 
       password:this.password, 
       confirmPassword:this.confirmPassword
     }
     
     // Check for Empty Fields
     if ( !this.validateService.validateRegister(user)) {
       let alert = this.alertCtrl.create( {
         title:'Failed to Register', 
         subTitle:'Please fill out all the fields', 
         buttons:['OK']
       }); 
       alert.present(); 
       return false; 
     }
 
     // Validate ID
     if ( ! this.validateService.validateUserID(user.studentId)) {
       let alert = this.alertCtrl.create( {
         title:'Failed to Register', 
         subTitle:'Incorrect StudentID Format', 
         buttons:['OK']
       }); 
       alert.present(); 
       return false; 
     }
 
     // Validate Password
     if ( ! this.validateService.validatePassword(user)) {
       let alert = this.alertCtrl.create( {
         title:'Failed to Register', 
         subTitle:'Passwords Must Match!', 
         buttons:['OK']
       }); 
       alert.present(); 
       return false; 
     }
 
     // Register User
     // Student
     if (user.studentId.startsWith("s")) {
       this._authService.registerStudent(user).subscribe(data =>  {
         if (data.success) {
           this._authService.storeUserData(data.token, data.user);
           this.presentLoading('Check your email.');
           // Sends Email to breakpoint@outlook.ie
           this._authService.sendValEmail(user);
           this._authService.loggedIn(); // Calls loggedIn to update BehaviorSubject
         } else {
           let alert = this.alertCtrl.create( {
             title:'Student Registration Unsuccessful', 
             subTitle:'Please Try Again', 
             buttons:['OK']
           }); 
           alert.present(); 
         }
       }); 
     }
     // Lecturer
     else if (user.studentId.startsWith("l")) {
       this._authService.registerLecturer(user).subscribe(data =>  {
         if (data.success) {
           this._authService.storeUserData(data.token, data.user);
           this.presentLoading('Check your email.');
           // Sends Email to breakpoint@outlook.ie
           this._authService.sendValEmail(user);
           this._authService.loggedIn(); // Calls loggedIn to update BehaviorSubject
        } else {
           let alert = this.alertCtrl.create( {
             title:'Lecturer Registration Unsuccessful', 
             subTitle:'Please Try Again', 
             buttons:['OK']
           }); 
           alert.present(); 
         }
       }); 
     } else { // Incorrect ID format
         console.log("ID does not start with either S or L"); 
         let alert = this.alertCtrl.create( {
           title:'Failed to Register', 
           subTitle:'Incorrect ID Format', 
           buttons:['OK']
         }); 
         alert.present(); 
         return false; 
       }    
   }
   
   // Login Method
   Login() {
    // Create Lecturer Object for Login
    const user = {
      email: this.email.toLowerCase(),
      password: this.password
    }
    // Lecturer Authentication
    if(this.email.startsWith("L") || this.email.startsWith("l"))
    {
      this._authService.authLecturer(user).subscribe(data => {
        if(data.success) {
          this._authService.storeUserData(data.token, data.user);
          this.presentLoading("You're now logged in!");
          //alert.present();
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
    // Student Authentication
    else if (this.email.startsWith("S") || this.email.startsWith("s")) {
      this._authService.authStudent(user).subscribe(data => {
        if(data.success) {
          this._authService.storeUserData(data.token, data.user);
          this.presentLoading("You're now logged in!");
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
    // Incorrect ID format
    else {
      console.log("ID does not start with either S or L"); 
         let alert = this.alertCtrl.create( {
           title:'Failed to Login', 
           subTitle:'Incorrect ID Format', 
           buttons:['OK']
         }); 
         alert.present(); 
         return false; 
    }
  }
}