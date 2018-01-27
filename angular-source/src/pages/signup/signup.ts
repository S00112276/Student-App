import { Component }from '@angular/core'; 
import { IonicPage }from 'ionic-angular'; 
import { AlertController }from 'ionic-angular'; 
import { AuthService }from '../shared/auth.service'
import { ValidateService }from '../shared/validate.service'; 

@IonicPage()
@Component( {
  selector:'page-signup', 
  templateUrl:'signup.html', 
})
export class SignupPage {
  // Decalre Variables
  firstName:String; 
  lastName:String; 
  username:String; 
  password:String; 
  confirmPassword:String; 
  studentID:String; 

   // Declare Services
  constructor(
    public alertCtrl:AlertController, 
    private validateService:ValidateService, 
    private _authService:AuthService
  ) {}

  ionViewDidLoad() {}

  // SignUp Button Clicked
  onSignUpSubmit() {
    const user =  {
      firstName:this.firstName, 
      lastName:this.lastName, 
      email: this.studentID + "@mail.itsligo.ie",
      username:this.username, 
      studentId:this.studentID, 
      password:this.password, 
      confirmPassword:this.confirmPassword
    }

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
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
    if (user.studentId.startsWith("S") || user.studentId.startsWith("s")) {
      this._authService.registerStudent(user).subscribe(data =>  {
        if (data.success) {
            let alert = this.alertCtrl.create( {
              title:'Registered Successfully', 
              subTitle:'Please check your college email to verify your Student ID', 
              buttons:['OK']
            }); 
            alert.present(); 
            this._authService.sendValEmail(user).subscribe(mailData =>  {
            if (mailData.success) {
              console.log("email should be sent")
            }
            else {
              console.log("email not sent: "); 
            }
          }); 
          this._authService.loggedIn(); // Calls loggedIn to update BehaviorSubject
        }else {
          let alert = this.alertCtrl.create( {
            title:'Registration Unsuccessful', 
            subTitle:'Please Try Again', 
            buttons:['OK']
          }); 
          alert.present(); 
        }
      }); 
    }
    // Lecturer
    else if (user.studentId.startsWith("L") || user.studentId.startsWith("l")) {
      this._authService.registerLecturer(user).subscribe(data =>  {
        // Registered Successfully
        if (data.success) {
            let alert = this.alertCtrl.create( {
              title:'Registered Successfully', 
              subTitle:'Please check your college email to verify your Lecturer ID', 
              buttons:['OK']
            }); 
            alert.present(); 
            this._authService.loggedIn(); // Calls loggedIn to update BehaviorSubject
        }
        // Unsuccessful
        else {
          let alert = this.alertCtrl.create( {
            title:'Registration Unsuccessful', 
            subTitle:'Please Try Again', 
            buttons:['OK']
          }); 
          alert.present(); 
        }
      }); 
    }
    else {
        console.log("StudentId does not start with either S or L"); 
        let alert = this.alertCtrl.create( {
          title:'Failed to Register', 
          subTitle:'Incorrect StudentID Format', 
          buttons:['OK']
        }); 
        alert.present(); 
        return false; 
      }
  }
}