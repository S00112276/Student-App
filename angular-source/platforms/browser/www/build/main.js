webpackJsonp([6],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(authService, navCtrl, navParams, alertCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.Login = function () {
        var _this = this;
        // Create user Object for Login
        var user = {
            email: this.email.toLowerCase(),
            password: this.password
        };
        this.authService.authLecturer(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                var alert_1 = _this.alertCtrl.create({
                    title: 'Logged In!',
                    subTitle: 'You are now logged in',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Login Unsuccessful',
                    subTitle: data.msg,
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\login\login.html"*/'<!-- Header --> \n\n<ion-header> \n\n  <ion-navbar color="dark"> \n\n    <ion-title> \n\n      Login \n\n    </ion-title> \n\n  </ion-navbar> \n\n</ion-header> \n\n\n\n<ion-content padding>\n\n\n\n  <form (submit)=\'Login()\'>\n\n      <!-- ID --> \n\n      <h1 text-center>Login</h1>\n\n      <ion-item>\n\n        <ion-label fixed>Email</ion-label>\n\n        <ion-input type="text" name="email" [(ngModel)]="email" placeholder="S00123456@mail.itsligo.ie"></ion-input>\n\n      </ion-item>\n\n      <!-- Password -->\n\n      <ion-item>\n\n        <ion-label fixed>Password</ion-label>\n\n        <ion-input type="password" name="password" [(ngModel)]="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <button ion-button block color="primary" type="submit">Login</button>\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validate_service__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    // Declare Services
    function SignupPage(navCtrl, navParams, alertCtrl, validateService, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.validateService = validateService;
        this.authService = authService;
    }
    SignupPage.prototype.ionViewDidLoad = function () { };
    // SignUp Button Clicked
    SignupPage.prototype.onSignUpSubmit = function () {
        var _this = this;
        var user = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.studentID + "@mail.itsligo.ie",
            username: this.username,
            studentId: this.studentID,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
        // Required Fields
        // For Development:  
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]); //(When Not In Dev Comment Out) 
        if (!this.validateService.validateRegister(user)) {
            var alert_1 = this.alertCtrl.create({
                title: 'Failed to Register',
                subTitle: 'Please fill out all the fields',
                buttons: ['OK']
            });
            alert_1.present();
            return false;
        }
        // Validate ID
        if (!this.validateService.validateUserID(user.studentId)) {
            var alert_2 = this.alertCtrl.create({
                title: 'Failed to Register',
                subTitle: 'Incorrect StudentID Format',
                buttons: ['OK']
            });
            alert_2.present();
            return false;
        }
        // Validate Password
        if (!this.validateService.validatePassword(user)) {
            var alert_3 = this.alertCtrl.create({
                title: 'Failed to Register',
                subTitle: 'Passwords Must Match!',
                buttons: ['OK']
            });
            alert_3.present();
            return false;
        }
        // Register User
        // Student
        if (user.studentId.startsWith("S") || user.studentId.startsWith("s")) {
            this.authService.registerStudent(user).subscribe(function (data) {
                if (data.success) {
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Registered Successfully',
                        subTitle: 'Please check your college email to verify your Student ID',
                        buttons: ['OK']
                    });
                    alert_4.present();
                    _this.authService.sendValEmail(user).subscribe(function (mailData) {
                        if (mailData.success) {
                            console.log("email should be sent");
                        }
                        else {
                            console.log("email not sent: ");
                        }
                    });
                    //this.navCtrl.push(HomePage);
                }
                else {
                    var alert_5 = _this.alertCtrl.create({
                        title: 'Registration Unsuccessful',
                        subTitle: 'Please Try Again',
                        buttons: ['OK']
                    });
                    alert_5.present();
                }
            });
        }
        else if (user.studentId.startsWith("L") || user.studentId.startsWith("l")) {
            this.authService.registerLecturer(user).subscribe(function (data) {
                if (data.success) {
                    var alert_6 = _this.alertCtrl.create({
                        title: 'Registered Successfully',
                        subTitle: 'Please check your college email to verify your Lecturer ID',
                        buttons: ['OK']
                    });
                    alert_6.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                }
                else {
                    var alert_7 = _this.alertCtrl.create({
                        title: 'Registration Unsuccessful',
                        subTitle: 'Please Try Again',
                        buttons: ['OK']
                    });
                    alert_7.present();
                }
            });
        }
        else {
            console.log("StudentId does not start with either S or L");
            var alert_8 = this.alertCtrl.create({
                title: 'Failed to Register',
                subTitle: 'Incorrect StudentID Format',
                buttons: ['OK']
            });
            alert_8.present();
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
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar color="dark"> \n\n    <ion-title> \n\n      Sign Up \n\n    </ion-title> \n\n  </ion-navbar> \n\n</ion-header> \n\n\n\n<ion-content padding>\n\n\n\n  <form (submit)="onSignUpSubmit()">\n\n    <h1 text-center>Your Details</h1>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>First Name</ion-label>\n\n      <ion-input type="text" name="firstName" [(ngModel)]="firstName" placeholder="John" required></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label fixed>Last Name</ion-label>\n\n        <ion-input type="text" name="lastName" [(ngModel)]="lastName" placeholder="Doe"></ion-input>\n\n      </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Username</ion-label>\n\n      <ion-input type="text" name="username" [(ngModel)]="username" placeholder="JohnD"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Student ID</ion-label>\n\n      <ion-input type="text" name="studentID" [(ngModel)]="studentID" placeholder="S00123456"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Password</ion-label>\n\n      <ion-input type="password" name="password" [(ngModel)]="password" placeholder="******"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Password</ion-label>\n\n      <ion-input type="password" name="password" [(ngModel)]="confirmPassword" placeholder="******"></ion-input>\n\n    </ion-item> \n\n\n\n    <button ion-button block color="primary" type="submit">Sign Up</button>\n\n  </form>\n\n  <p class="important">Verification Email will be Sent to College Email</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__shared_validate_service__["a" /* ValidateService */],
        __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\welcome\welcome.html"*/'<ion-content padding id="welcome">\n\n\n\n  <img src="assets/imgs/logo.png" class="logo">\n\n  <h1> Welcome to Student-App </h1>\n\n  <div> Connect with your class </div>\n\n\n\n  <button ion-button block class="marginTop" (click)="signup()">Sign Up</button>\n\n  <button ion-button block color="lightprimary" (click)="login()">Login</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		291,
		5
	],
	"../pages/diary/diary.module": [
		292,
		4
	],
	"../pages/login/login.module": [
		293,
		3
	],
	"../pages/signup/signup.module": [
		294,
		2
	],
	"../pages/timetable/timetable.module": [
		295,
		1
	],
	"../pages/welcome/welcome.module": [
		296,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { IUser } from '../home/user';






var UserService = (function () {
    // Heroku
    //private _userUrl = 'https://breakpoint-app.herokuapp.com/';
    function UserService(_http) {
        this._http = _http;
        this._userUrl = 'http://localhost:3000/users';
        this._emailUrl = 'http://localhost:3000';
    }
    // getUsers(): Observable<IUser[]> {
    //   return this._http.get<IUser[]>(this._userUrl)
    //     .do(data => console.log('All: ' + JSON.stringify(data)))
    //     .catch(this.handleError);
    // }
    UserService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(err.message);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    // Validate Registration
    ValidateService.prototype.validateRegister = function (user) {
        if (user.firstName == undefined
            || user.lastName == undefined
            || user.username == undefined
            || user.studentId == undefined
            || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // Validate Email
    ValidateService.prototype.validateUserID = function (userID) {
        var re = new RegExp('^[slSL][0-9]{8}$');
        return re.test(userID);
    };
    // Validate Password
    ValidateService.prototype.validatePassword = function (user) {
        if (user.password != user.confirmPassword) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_shared_user_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shared_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shared_validate_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_timetable_timetable__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_chat_chat__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_diary_diary__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Services



// Components











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_timetable_timetable__["a" /* TimetablePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_diary_diary__["a" /* DiaryPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/diary/diary.module#DiaryPageModule', name: 'DiaryPage', segment: 'diary', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/timetable/timetable.module#TimetablePageModule', name: 'TimetablePage', segment: 'timetable', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_timetable_timetable__["a" /* TimetablePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_diary_diary__["a" /* DiaryPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__pages_shared_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__pages_shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__pages_shared_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_timetable_timetable__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_diary_diary__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app) {
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.logout = function () {
        //Api Token Logout
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    MyApp.prototype.openPage = function (page) {
        if (page === 'TimetablePage') {
            this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_timetable_timetable__["a" /* TimetablePage */]);
        }
        else if (page === 'ChatPage') {
            this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */]);
        }
        else if (page === 'DiaryPage') {
            this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_6__pages_diary_diary__["a" /* DiaryPage */]);
        }
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar color="dark">\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button ion-item menuToggle (click)="openPage(\'TimetablePage\')">\n                Timetable\n            </button>\n            <button ion-item menuToggle (click)="openPage(\'ChatPage\')">\n                Chat\n            </button>\n            <button ion-item menuToggle (click)="openPage(\'ChatPage\')">\n                Diary\n            </button>\n            <button ion-button color="primary" (click)="logout()">\n                Logout\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* App */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n      <img src="assets/imgs/logo.png" class="navbarLogo"/><ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n      <img src="assets/imgs/logo.png" class="navbarLogo"/><ion-title>Contact</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\chat\chat.html"*/'<html><head></head><body><ion-navbar color="secondary">\n\n  <ion-title>\n\n    Chat\n\n  </ion-title>\n\n</ion-navbar>\n\n\n\n  <meta charset="UTF-8">\n\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n\n  <title>Mongo Chat</title>\n\n\n\n  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">\n\n\n\n  <style>\n\n    #messages{height: 300px;}\n\n  </style>\n\n\n\n\n\n\n\n<div class="container">\n\n        <div class="row">\n\n          <div class="col-md-6 offset-md-3 col-sm-12">\n\n            <h1 class="text-center">\n\n              Mongo Chat\n\n              <button id="clear" class="btn btn-danger">Clear</button>\n\n            </h1>\n\n      \n\n            <div id="status"></div>\n\n      \n\n            <div class="chat">\n\n              <input type="text" id="username" class="form-control" placeholder="Enter name..">\n\n              <br>\n\n              <div class="card">\n\n                <div id="messages" class="card-block"></div>\n\n      \n\n              </div>\n\n              <br>\n\n              <textarea id="textarea" class="form-control" placeholder="Enter message.."></textarea>\n\n              <button class="btn btn-primary btn-lg btn-block" id="submit" type="submit">Send</button>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n\n\n\n\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>\n\n  <script>\n\n\n\n        (function(){\n\n          var element = function(id){\n\n            return document.getElementById(id);\n\n          }\n\n          // Get Elements\n\n          var status = element(\'status\');\n\n          var messages = element(\'messages\');\n\n          var submit = element(\'submit\');\n\n          var username = element(\'username\');\n\n          var clearBtn = element(\'clear\');\n\n          \n\n          var statusDefault = status.textContent;\n\n      \n\n          var setStatus = function(s){\n\n            // Set Status\n\n            status.textContent = s;\n\n      \n\n            if(s !== statusDefault){\n\n              var delay = setTimeout(function(){\n\n                setStatus(statusDefault);\n\n              }, 4000);\n\n          \n\n            }\n\n          }\n\n      \n\n          // Connect to Socket.io\n\n          var socket = io.connect(\'http://127.0.0.1:4000\');\n\n      \n\n          // Check for connection\n\n          if(socket !== undefined){\n\n            console.log(\'Connected to Socket...\');\n\n\n\n            // Handle output\n\n            socket.on(\'output\', function (data) {\n\n\n\n              if (data.length) {\n\n                for (var x = 0; x < data.length; x++) {\n\n                  var message = document.createElement(\'div\');\n\n                  message.setAttribute(\'class\', \'chat-message\');\n\n                  message.textContent = data[x].name + ": " + data[x].message;\n\n                  messages.appendChild(message);\n\n                  messages.insertBefore(message, messages.lastChild);\n\n                }\n\n              }\n\n            });\n\n            socket.on(\'status\', function(data){\n\n              // get message status\n\n              setStatus((typeof data === \'object\')? data.message: data);\n\n\n\n              if(data.clear){\n\n                textarea.value = "";\n\n              }\n\n            });\n\n\n\n            // Handle Input\n\n            submit.addEventListener(\'click\', function(event){\n\n                // Emit to server input   \n\n                            \n\n                socket.emit(\'input\', {name:username.value, message:textarea.value});\n\n\n\n                event.preventDefault();\n\n              \n\n\n\n            })\n\n\n\n            // Handle clear chat\n\n            clearBtn.addEventListener(\'click\', function(){\n\n              socket.emit(\'clear\');\n\n            });\n\n\n\n            // Clear Message\n\n            socket.on(\'cleared\', function(){\n\n              messages.textContent = \'\';\n\n            })\n\n\n\n          }\n\n          else{\n\n            alert("Not connected");\n\n          }\n\n\n\n        })();\n\n      </script>\n\n\n\n</body></html>'/*ion-inline-end:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DiaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiaryPage = (function () {
    function DiaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DiaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiaryPage');
    };
    return DiaryPage;
}());
DiaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-diary',template:/*ion-inline-start:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\diary\diary.html"*/''/*ion-inline-end:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\diary\diary.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DiaryPage);

//# sourceMappingURL=diary.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimetablePage = (function () {
    function TimetablePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TimetablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimetablePage');
    };
    return TimetablePage;
}());
TimetablePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-timetable',template:/*ion-inline-start:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\timetable\timetable.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Timetable</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-group>\n      <ion-item-divider color="light">Monday</ion-item-divider>\n      <ion-item>\n        <h2>Rich Application Development</h2>\n        <h3>A0005 // 12:00 - 13:00</h3>\n        <p>Paul Powell</p>\n      </ion-item>\n      <ion-item>\n        <h2>Software Project Management</h2>\n        <h3>E2011 // 13:00 - 14:00</h3>\n        <p>Vivion Kinsellal</p>\n      </ion-item>\n      <ion-item>\n        <h2>Web Programming</h2>\n        <h3>D2039 // 14:00 - 15:00</h3>\n        <p>Shane Banks</p>\n      </ion-item>\n      <ion-item>\n        <h2>Foundation Object Oriented Programming</h2>\n        <h3>B1042 // 16:00 - 18:00</h3>\n        <p>Keith McManus</p>\n      </ion-item>\n    </ion-item-group>\n    <ion-item-group>\n        <ion-item-divider color="light">Tuesday</ion-item-divider>\n        <ion-item>\n          <h2>Professional Development</h2>\n          <h3>A0004 // 9:00 - 10:00</h3>\n          <p>Aine Mitchell</p>\n        </ion-item>\n        <ion-item>\n          <h2>Software Project Management</h2>\n          <h3>E1028 // 12:00 - 14:00</h3>\n          <p>Vivion Kinsellal</p>\n        </ion-item>\n        <ion-item>\n          <h2>Database Development</h2>\n          <h3>D2037 // 14:00 - 16:00</h3>\n          <p>Shane Banks</p>\n        </ion-item>\n      </ion-item-group>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\timetable\timetable.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TimetablePage);

//# sourceMappingURL=timetable.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false;
    }
    // Send Validation Email
    AuthService.prototype.sendValEmail = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('email/sendemail');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Register Student
    AuthService.prototype.registerStudent = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/registerstudent');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Register Lecturer
    AuthService.prototype.registerLecturer = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/registerlecturer');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // // Register User
    // registerUser(user) {
    //     console.log("Register User: " + user.firstName + " in auth.service.ts");
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     let ep = this.prepEndpoint('users/register');
    //     return this.http.post(ep, user, { headers: headers })
    //         .map(res => res.json());
    // }
    // Authenticate Lecturer
    AuthService.prototype.authLecturer = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticatelecturer');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Authenticate User
    // authUser(user) {
    //     console.log("auth user: " + user);
    //     console.log("auth data: " + user.data);
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     let ep = this.prepEndpoint('users/authenticate');
    //     return this.http.post(ep, user, { headers: headers })
    //         .map(res => res.json());
    // }
    // Get User Profile
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorisation', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Store User Data
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // Load Token from Local Storage
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // Sets beginning of every endpoint
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:3000/' + ep;
            // Heroku
            //return 'https://breakpoint-app.herokuapp.com/' + ep;
        }
    };
    // Logged in
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    // Logged Out
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timetable_timetable__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__diary_diary__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_service__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { IUser } from '../home/user';
var HomePage = (function () {
    function HomePage(navCtrl, app, _userService) {
        this.navCtrl = navCtrl;
        this.app = app;
        this._userService = _userService;
    }
    HomePage.prototype.ngOnInit = function () {
        // this._userService.getUsers().subscribe(users => {
        //   this.users = users;
        // },
        //   error => this.errorMessage = <any>error);
    };
    HomePage.prototype.logout = function () {
        //Api Token Logout
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    HomePage.prototype.openPage = function (page) {
        if (page === 'TimetablePage') {
            this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_2__timetable_timetable__["a" /* TimetablePage */]);
        }
        else if (page === 'ChatPage') {
            this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
        }
        else if (page === 'DiaryPage') {
            this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_4__diary_diary__["a" /* DiaryPage */]);
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton color="energy">\n\n    <ion-title>\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="card-background-page">\n\n\n\n    <ion-card (click)="openPage(\'TimetablePage\')" style="background-color: #2A2C43">\n\n      <div class="card-title">Timetable</div>\n\n      <div class="card-subtitle">Classes and Exams</div>\n\n    </ion-card>\n\n  \n\n    <ion-card (click)="openPage(\'ChatPage\')"  style="background-color: #677077">\n\n      <div class="card-title">Chat</div>\n\n      <div class="card-subtitle">Talk with friends</div>\n\n    </ion-card>\n\n  \n\n    <ion-card (click)="openPage(\'DiaryPage\')"  style="background-color: #B5B5B7">\n\n      <div class="card-title">Diary</div>\n\n      <div class="card-subtitle">Track your schedule</div>\n\n    </ion-card>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\Daniel\Documents\College\3rd Year\Main Project\Sligo IT Student App\angular-source\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_5__shared_user_service__["a" /* UserService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map