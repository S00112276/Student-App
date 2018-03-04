webpackJsonp([6],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_diary_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEventPage = (function () {
    function AddEventPage(alertCtrl, navCtrl, navParams, _diaryService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._diaryService = _diaryService;
        this.modules = [];
        this.courses = [];
        this.groups = [];
        this.getModules();
        this.getCourses();
    }
    AddEventPage.prototype.insertEntry = function () {
        var _this = this;
        this.groups = this.module.groups;
        this.lecturer = this.module.lecturer;
        var time = 'T';
        var dueTime = time.concat(this.time);
        var due = this.dueDate.concat(dueTime);
        var entry = {
            title: this.title,
            startDate: new Date(),
            dueDate: due,
            lecturer: this.lecturer,
            groups: this.groups,
            room: this.room,
            module: this.module._id,
            percentage: this.percentage,
            description: this.description
        };
        this._diaryService.insertEntry(entry).subscribe(function (data) {
            if (data.success) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Added to DB',
                    subTitle: 'YAY',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.navCtrl.pop();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Failed',
                    subTitle: ':(',
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
    };
    // Get Modules
    AddEventPage.prototype.getModules = function () {
        var _this = this;
        this._diaryService.getModules().subscribe(function (modules) {
            _this.modules = modules;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Get Courses
    AddEventPage.prototype.getCourses = function () {
        var _this = this;
        this._diaryService.getCourses().subscribe(function (courses) {
            _this.courses = courses;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Returns data on selected collection
    /*   populateArrays(array, _url) {
        this._diaryService.populateArrays(_url).subscribe(data => {
          for (var i = 0; i < data.length; i++) {
            array[i] = data[i];
          }
          // this.getGroups(this.groups);
        },
          error => this.errorMessage = <any>error);
      } */
    /*   filterGroups(moduleID) {
        for (let i = 0; i < this.modules.length; i++) {
          if(this.modules[i].name == moduleID)
              console.log(this.modules[i].groups);
        }
      }
    
      getGroups(module) {
        for (let i = 0; i < this.courses.length; i++) {
          for (let j = 0; j < this.courses[i].length; j++) {
            this.groups.push(this.courses[i].groups[j]);
          }
        }
      } */
    AddEventPage.prototype.removeDuplicates = function (originalArray, objKey) {
        this.removeDuplicates(this.groups, 'name');
        var trimmedArray = [];
        var values = [];
        var value;
        for (var i = 0; i < originalArray.length; i++) {
            value = originalArray[i][objKey];
            if (values.indexOf(value) === -1) {
                trimmedArray.push(originalArray[i]);
                values.push(value);
            }
        }
        return trimmedArray;
    };
    return AddEventPage;
}());
AddEventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-event',template:/*ion-inline-start:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\add-event\add-event.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add entry</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Type</ion-label>\n\n      <ion-select [(ngModel)]="title">\n\n        <ion-option value="assessment">Assessment</ion-option>\n\n        <ion-option value="presentation">Presentation</ion-option>\n\n        <ion-option value="report">Report</ion-option>\n\n        <ion-option value="assignment">Assignment</ion-option>\n\n        <ion-option value="event">Event</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Module</ion-label>\n\n      <ion-select [(ngModel)]="module"><!--(ngModelChange)="filterGroups($event)"-->\n\n        <ion-option *ngFor="let module of modules" [value]="module" >{{module.name | uppercase}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <!-- <ion-item *ngIf="module != null">\n\n      <ion-label>Group</ion-label>\n\n      <ion-select [(ngModel)]="groups">\n\n        <ion-option *ngFor="let group of module.groups" ngValue="group" >{{group\ | uppercase}}</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <ion-item>\n\n      <ion-label floating>Description</ion-label>\n\n      <ion-textarea type="text" [(ngModel)]="description" name="notes"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Room</ion-label>\n\n      <ion-input type="text" [(ngModel)]="room" name="room"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Due Date</ion-label>\n\n      <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" [(ngModel)]="dueDate" name="dueDate"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Time</ion-label>\n\n      <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="time" name="time"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Percentage</ion-label>\n\n      <ion-input type="text" [(ngModel)]="percentage" name="percentage"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button ion-button (click)="insertEntry()" full round>Save</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\add-event\add-event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__shared_diary_service__["a" /* DiaryService */]])
], AddEventPage);

//# sourceMappingURL=add-event.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaryEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the DiaryEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiaryEntryPage = (function () {
    function DiaryEntryPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.entryType = [
            'https://drslash.com/wp-content/uploads/2014/07/Notes.png',
            'https://image.flaticon.com/icons/svg/432/432413.svg',
            'https://image.flaticon.com/icons/svg/235/235248.svg',
            'https://image.flaticon.com/icons/svg/236/236816.svg',
            'https://image.flaticon.com/icons/svg/236/236830.svg'
        ];
        this.entry = this.params.get('entry');
    }
    DiaryEntryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return DiaryEntryPage;
}());
DiaryEntryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-diary-entry',template:/*ion-inline-start:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\diary-entry\diary-entry.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Event\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="md-close-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n          <img *ngIf="entry.title.toLowerCase() == \'assessment\'" src="{{entryType[0]}}">\n\n          <img *ngIf="entry.title.toLowerCase() == \'presentation\'" src="{{entryType[1]}}">\n\n          <img *ngIf="entry.title.toLowerCase() == \'assignment\'" src="{{entryType[2]}}">\n\n          <img *ngIf="entry.title.toLowerCase() == \'event\'" src="{{entryType[3]}}">\n\n          <img *ngIf="entry.title.toLowerCase() == \'report\'" src="{{entryType[4]}}">\n\n      </ion-avatar>\n\n      <h2>{{entry.module | uppercase}}</h2>\n\n      <p>{{entry.title}}</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      Lecturer\n\n      <ion-note item-end>\n\n        {{entry.lecturer}}\n\n      </ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      Room\n\n      <ion-note item-end>\n\n        {{entry.room}}\n\n      </ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      Date Due\n\n      <ion-note item-end>\n\n        {{entry.dueDate | date: \'EEEE, MMMM d\'}}\n\n      </ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      Time\n\n      <ion-note item-end>\n\n        {{entry.dueDate | date: \'HH:mm a\'}}\n\n      </ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      Percentage\n\n      <ion-note item-end>\n\n        {{entry.percentage}}%\n\n      </ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <div><h3>{{entry.description}}</h3></div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\diary-entry\diary-entry.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], DiaryEntryPage);

//# sourceMappingURL=diary-entry.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_validate_service__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomePage = (function () {
    function WelcomePage(loadingCtrl, app, navCtrl, navParams, alertCtrl, validateService, _authService) {
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.validateService = validateService;
        this._authService = _authService;
        this.backgroundImage = 'assets/img/background/background-6.jpg';
    }
    WelcomePage.prototype.goToLogin = function () {
        this.slider.slideTo(1);
    };
    WelcomePage.prototype.goToSignup = function () {
        this.slider.slideTo(2);
    };
    WelcomePage.prototype.slideNext = function () {
        this.innerSlider.slideNext();
    };
    WelcomePage.prototype.slidePrevious = function () {
        this.innerSlider.slidePrev();
    };
    WelcomePage.prototype.presentLoading = function (message) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            duration: 500
        });
        loading.onDidDismiss(function () {
            var alert = _this.alertCtrl.create({
                title: 'Success',
                subTitle: message,
                buttons: ['Dismiss']
            });
            alert.present();
        });
        loading.present();
    };
    // Reset Password -- Not Being Used
    WelcomePage.prototype.resetPassword = function () {
        this.presentLoading('An e-mail was sent with your new password.');
    };
    // SignUp Button Clicked
    WelcomePage.prototype.SignUp = function () {
        var _this = this;
        var user = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.studentID + "@mail.itsligo.ie",
            username: this.username,
            studentId: this.studentID.toLowerCase(),
            password: this.password,
            confirmPassword: this.confirmPassword
        };
        // Check for Empty Fields
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
        if (user.studentId.startsWith("s")) {
            this._authService.registerStudent(user).subscribe(function (data) {
                if (data.success) {
                    _this.presentLoading('Check your email.');
                    // Sends Email to breakpoint@outlook.ie
                    _this._authService.sendValEmail(user);
                    _this._authService.loggedIn(); // Calls loggedIn to update BehaviorSubject
                }
                else {
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Student Registration Unsuccessful',
                        subTitle: 'Please Try Again',
                        buttons: ['OK']
                    });
                    alert_4.present();
                }
            });
        }
        else if (user.studentId.startsWith("l")) {
            this._authService.registerLecturer(user).subscribe(function (data) {
                if (data.success) {
                    _this.presentLoading('Check your email.');
                    // Sends Email to breakpoint@outlook.ie
                    _this._authService.sendValEmail(user);
                    _this._authService.loggedIn(); // Calls loggedIn to update BehaviorSubject
                }
                else {
                    var alert_5 = _this.alertCtrl.create({
                        title: 'Lecturer Registration Unsuccessful',
                        subTitle: 'Please Try Again',
                        buttons: ['OK']
                    });
                    alert_5.present();
                }
            });
        }
        else {
            console.log("ID does not start with either S or L");
            var alert_6 = this.alertCtrl.create({
                title: 'Failed to Register',
                subTitle: 'Incorrect ID Format',
                buttons: ['OK']
            });
            alert_6.present();
            return false;
        }
    };
    // Login Method
    WelcomePage.prototype.Login = function () {
        var _this = this;
        // Create Lecturer Object for Login
        var user = {
            email: this.email.toLowerCase(),
            password: this.password
        };
        // Lecturer Authentication
        if (this.email.startsWith("L") || this.email.startsWith("l")) {
            this._authService.authLecturer(user).subscribe(function (data) {
                if (data.success) {
                    _this._authService.storeUserData(data.token, data.user);
                    _this.presentLoading("You're now logged in!");
                    //alert.present();
                    _this._authService.loggedIn(); // Calls loggedIn to update BehaviorSubject
                }
                else {
                    var alert_7 = _this.alertCtrl.create({
                        title: 'Login Unsuccessful',
                        subTitle: data.msg,
                        buttons: ['OK']
                    });
                    alert_7.present();
                }
            });
        }
        else if (this.email.startsWith("S") || this.email.startsWith("s")) {
            this._authService.authStudent(user).subscribe(function (data) {
                if (data.success) {
                    _this._authService.storeUserData(data.token, data.user);
                    _this.presentLoading("You're now logged in!");
                    _this._authService.loggedIn(); // Calls loggedIn to update BehaviorSubject
                }
                else {
                    var alert_8 = _this.alertCtrl.create({
                        title: 'Login Unsuccessful',
                        subTitle: data.msg,
                        buttons: ['OK']
                    });
                    alert_8.present();
                }
            });
        }
        else {
            console.log("ID does not start with either S or L");
            var alert_9 = this.alertCtrl.create({
                title: 'Failed to Login',
                subTitle: 'Incorrect ID Format',
                buttons: ['OK']
            });
            alert_9.present();
            return false;
        }
    };
    return WelcomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
], WelcomePage.prototype, "slider", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('innerSlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
], WelcomePage.prototype, "innerSlider", void 0);
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\welcome\welcome.html"*/'<ion-content class="transparent-header" [ngStyle]="{\'background-color\': \'#2072f7\'}">\n\n\n\n  <!-- Initial Welcome Page -->\n\n  <ion-slides #slider class="content-slider" direction="vertical">\n\n\n\n    <!-- Logo -->\n\n    <ion-slide class="swiper-no-swiping">\n\n      <div padding>\n\n        <img class="logo" src="assets/imgs/ss.png" />\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button ion-button round color="light" class="login-button" (click)="goToLogin()">LOGIN</button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button round color="light" class="login-button" (click)="goToSignup()">SIGN UP</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </ion-slide>\n\n\n\n    <!-- Login Page -->\n\n    <ion-slide class="zoom swiper-no-swiping">\n\n      <ion-slides #innerSlider class="content-slider">\n\n        <ion-slide class="swiper-no-swiping">\n\n          <div style="padding: 20% 32px 32px 32px">\n\n              <ion-item>\n\n                <ion-label floating>Email</ion-label>\n\n                <ion-input type="text" name="email" [(ngModel)]="email"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label floating>Password</ion-label>\n\n                <ion-input type="password" name="password" [(ngModel)]="password"></ion-input>\n\n              </ion-item>\n\n              <button ion-button block round (click)="Login()" color="light" class="login-button">Login</button>\n\n              <button ion-button clear (click)="slideNext()" color="light" class="forgot-button">FORGOT PASSWORD?</button>\n\n          </div>\n\n          <!-- Switch Page to Sign Up -->\n\n          <button ion-button clear (click)="goToSignup()" class="slide-button position-bottom">GO TO SIGNUP\n\n            <ion-icon name="arrow-down"></ion-icon>\n\n          </button>\n\n        </ion-slide>\n\n\n\n        <!-- Forgot Password -->\n\n        <ion-slide class="swiper-no-swiping">\n\n          <div style="padding: 20% 32px 32px 32px">\n\n            <ion-item>\n\n              <ion-label floating>E-mail</ion-label>\n\n              <ion-input type="email"></ion-input>\n\n            </ion-item>\n\n            <button ion-button block round (click)="resetPassword()" color="light" class="login-button">RESET PASSWORD</button>\n\n            <button ion-button clear (click)="slidePrevious()" color="light" class="goback-button">\n\n              <ion-icon name="arrow-back"></ion-icon> GO BACK</button>\n\n          </div>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-slide>\n\n\n\n    <!-- Sign Up Page -->\n\n    <ion-slide class="zoom swiper-no-swiping">\n\n      <button ion-button clear (click)="goToLogin()" class="slide-button">\n\n        GO TO LOGIN\n\n        <ion-icon name="arrow-up"></ion-icon>\n\n      </button>\n\n      <div style="padding: 32px">\n\n          <ion-item>\n\n            <ion-label floating>First Name</ion-label>\n\n            <ion-input type="text" name="firstName" [(ngModel)]="firstName" required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Last Name</ion-label>\n\n            <ion-input type="text" name="lastName" [(ngModel)]="lastName"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input type="text" name="username" [(ngModel)]="username"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Student ID</ion-label>\n\n            <ion-input type="text" name="studentID" [(ngModel)]="studentID"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" name="password" [(ngModel)]="password"></ion-input>\n\n          </ion-item>\n\n          <ion-item class="margin-bottom">\n\n            <ion-label floating>Confirm Password</ion-label>\n\n            <ion-input type="password" name="password" [(ngModel)]="confirmPassword"></ion-input>\n\n          </ion-item>\n\n          <button ion-button block round (click)="SignUp()" color="light" class="login-button">SIGN UP</button>\n\n      </div>\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__shared_validate_service__["a" /* ValidateService */],
        __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-event/add-event.module": [
		339,
		5
	],
	"../pages/chat-room/chat-room.module": [
		340,
		4
	],
	"../pages/diary-entry/diary-entry.module": [
		341,
		3
	],
	"../pages/diary/diary.module": [
		342,
		2
	],
	"../pages/timetable/timetable.module": [
		343,
		1
	],
	"../pages/welcome/welcome.module": [
		344,
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
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 189:
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

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timetable_timetable__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diary_diary__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { UserService } from '../shared/user.service';
//import { IUser } from '../home/user';


var HomePage = (function () {
    function HomePage(navCtrl, app, socket, _authService) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.socket = socket;
        this._authService = _authService;
        this.username = '';
        this.timetablePage = __WEBPACK_IMPORTED_MODULE_2__timetable_timetable__["a" /* TimetablePage */];
        this.diaryPage = __WEBPACK_IMPORTED_MODULE_3__diary_diary__["a" /* DiaryPage */];
    }
    HomePage.prototype.ngOnInit = function () {
        // this._userService.getUsers().subscribe(users => {
        //   this.users = users;
        // },
        //   error => this.errorMessage = <any>error);
    };
    /* Connects to chat server */
    HomePage.prototype.joinChat = function () {
        this.user = this._authService.user;
        this.username = this.user.username;
        this.socket.connect();
        this.socket.emit('set-username', this.username);
        this.navCtrl.push('ChatRoomPage', { username: this.username });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title> Home </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n\n\n  <ion-card [navPush]="timetablePage" class="timetable">\n\n    <div class="card-title">Timetable</div>\n\n    <div class="card-subtitle">Classes and Exams</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click)="joinChat()" class="chat">\n\n    <div class="card-title">Chat</div>\n\n    <div class="card-subtitle">Talk with friends</div>\n\n  </ion-card>\n\n\n\n  <ion-card [navPush]="diaryPage" class="diary">\n\n    <div class="card-title">Diary</div>\n\n    <div class="card-subtitle">Track your schedule</div>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_socket_io__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatRoomPage = (function () {
    function ChatRoomPage(navCtrl, toastCtrl, navParams, socket) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.socket = socket;
        this.messages = [];
        this.users = [];
        this.username = '';
        this.message = '';
        this.username = this.navParams.get('username');
        this.getMessage().subscribe(function (message) {
            _this.messages.push(message);
        });
        this.getHistory(this.messages);
        this.getUsers().subscribe(function (data) {
            var user = data['user'];
            if (data['event'] === 'left') {
                _this.showtoast('user left: ' + user);
            }
            else {
                _this.showtoast('user joined: ' + user);
            }
        });
    }
    // Track connected users
    ChatRoomPage.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('users-changed', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatRoomPage.prototype.getHistory = function (messages) {
        this.socket.emit('retrieve-history', function (history) {
            for (var i = 0; i < history.length; i++) {
                messages[i] = history[i];
            }
        });
    };
    /*  ionViewDidLoad() {
       let username = 'Ted';
       this.socket.emit('retrieve-history', function (history) {
         console.log(username);
         username = 'Frank';
         console.log(username);
       });
       console.log(username);
     } */
    // Disconnect from server
    ChatRoomPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    // Send message
    ChatRoomPage.prototype.sendMessage = function () {
        this.socket.emit('add-message', { text: this.message });
        this.message = '';
    };
    // Receive message
    ChatRoomPage.prototype.getMessage = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    // Notifications
    ChatRoomPage.prototype.showtoast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'top',
            cssClass: "toast"
        });
        toast.present();
    };
    return ChatRoomPage;
}());
ChatRoomPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-chat-room',template:/*ion-inline-start:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\chat-room\chat-room.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Chat</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- Messages -->\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row *ngFor="let message of messages">\n\n\n\n      <!-- Message from someone -->\n\n      <ion-col col-9 *ngIf="message.from !== username" class="message" [ngClass]="{\'my_message\': message.from === username, \'other_message\': message.from !== username}">\n\n        <span class="user_name">{{ message.from }}:</span>\n\n        <br>\n\n        <span>{{ message.text }}</span>\n\n        <div class="time">{{ message.created | date:\'dd.MM hh:MM\' }}</div>\n\n      </ion-col>\n\n\n\n      <!-- Message to someone -->\n\n      <ion-col offset-3 col-9 *ngIf="message.from === username" class="message" [ngClass]="{\'my_message\': message.from === username, \'other_message\': message.from !== username}">\n\n        <span class="user_name">{{ message.from }}:</span>\n\n        <br>\n\n        <span>{{ message.text }}</span>\n\n        <div class="time">{{ message.created | date:\'dd.MM hh:MM\' }}</div>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<!-- Input message -->\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-row class="message_row">\n\n\n\n      <ion-col col-9>\n\n        <ion-item no-lines>\n\n          <ion-input type="text" placeholder="Message" [(ngModel)]="message"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-3>\n\n        <button ion-button clear color="primary" (click)="sendMessage()" [disabled]="message === \'\'">\n\n          Send\n\n        </button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\chat-room\chat-room.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_ng_socket_io__["Socket"]])
], ChatRoomPage);

//# sourceMappingURL=chat-room.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shared_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shared_validate_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shared_diary_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_timetable_timetable__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_diary_diary__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_event_add_event__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_diary_entry_diary_entry__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_calendar__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng_socket_io__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Services



// Components












var config = { url: 'https://obscure-escarpment-51111.herokuapp.com/', options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_timetable_timetable__["a" /* TimetablePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_diary_diary__["a" /* DiaryPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_diary_entry_diary_entry__["a" /* DiaryEntryPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_add_event_add_event__["a" /* AddEventPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_21_ng_socket_io__["SocketIoModule"].forRoot(config),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add-event/add-event.module#AddEventPageModule', name: 'AddEventPage', segment: 'add-event', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-room/chat-room.module#ChatRoomPageModule', name: 'ChatRoomPage', segment: 'chat-room', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/diary-entry/diary-entry.module#DiaryEntryPageModule', name: 'DiaryEntryPage', segment: 'diary-entry', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/diary/diary.module#DiaryPageModule', name: 'DiaryPage', segment: 'diary', priority: 'low', defaultHistory: [] },
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
            __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_timetable_timetable__["a" /* TimetablePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_diary_diary__["a" /* DiaryPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_diary_entry_diary_entry__["a" /* DiaryEntryPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_add_event_add_event__["a" /* AddEventPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__pages_shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__pages_shared_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_9__pages_shared_diary_service__["a" /* DiaryService */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_calendar__["a" /* Calendar */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_timetable_timetable__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_diary_diary__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chat_room_chat_room__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shared_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(118);
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
    function MyApp(_authService, platform, statusBar, splashScreen) {
        this._authService = _authService;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Listen to authNotifier
        this._authService.isAuthed
            .subscribe(function (status) {
            if (!status) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
            }
        });
    };
    MyApp.prototype.logout = function () {
        this._authService.logout();
        this._authService.loggedIn(); // Calls loggedIn to update BehaviorSubject
    };
    MyApp.prototype.openPage = function (page) {
        if (page === 'TimetablePage') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_timetable_timetable__["a" /* TimetablePage */]);
        }
        else if (page === 'ChatRoomPage') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_chat_room_chat_room__["a" /* ChatRoomPage */]);
        }
        else if (page === 'DiaryPage') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_diary_diary__["a" /* DiaryPage */]);
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\app\app.html"*/'<ion-menu type="overlay" [content]="content">\n\n\n\n    <ion-header>\n\n        <ion-toolbar color="primary">\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <!-- Burger Menu Content -->\n\n    <ion-content>\n\n        <ion-list>\n\n            <button ion-item menuClose (click)="openPage(\'TimetablePage\')">\n\n                Timetable\n\n            </button>\n\n            <button ion-item menuClose (click)="openPage(\'ChatRoomPage\')">\n\n                Chat\n\n            </button>\n\n            <button ion-item menuClose (click)="openPage(\'DiaryPage\')">\n\n                Diary\n\n            </button>\n\n            <button ion-button menuClose color="primary" (click)="logout()">\n\n                Logout\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" #content swipeBackEnabled="false" [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__pages_shared_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <img src="assets/imgs/logo.png" class="navbarLogo"/><ion-title>About</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <img src="assets/imgs/logo.png" class="navbarLogo"/><ion-title>Contact</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 346,
	"./af.js": 346,
	"./ar": 347,
	"./ar-dz": 348,
	"./ar-dz.js": 348,
	"./ar-kw": 349,
	"./ar-kw.js": 349,
	"./ar-ly": 350,
	"./ar-ly.js": 350,
	"./ar-ma": 351,
	"./ar-ma.js": 351,
	"./ar-sa": 352,
	"./ar-sa.js": 352,
	"./ar-tn": 353,
	"./ar-tn.js": 353,
	"./ar.js": 347,
	"./az": 354,
	"./az.js": 354,
	"./be": 355,
	"./be.js": 355,
	"./bg": 356,
	"./bg.js": 356,
	"./bm": 357,
	"./bm.js": 357,
	"./bn": 358,
	"./bn.js": 358,
	"./bo": 359,
	"./bo.js": 359,
	"./br": 360,
	"./br.js": 360,
	"./bs": 361,
	"./bs.js": 361,
	"./ca": 362,
	"./ca.js": 362,
	"./cs": 363,
	"./cs.js": 363,
	"./cv": 364,
	"./cv.js": 364,
	"./cy": 365,
	"./cy.js": 365,
	"./da": 366,
	"./da.js": 366,
	"./de": 367,
	"./de-at": 368,
	"./de-at.js": 368,
	"./de-ch": 369,
	"./de-ch.js": 369,
	"./de.js": 367,
	"./dv": 370,
	"./dv.js": 370,
	"./el": 371,
	"./el.js": 371,
	"./en-au": 372,
	"./en-au.js": 372,
	"./en-ca": 373,
	"./en-ca.js": 373,
	"./en-gb": 374,
	"./en-gb.js": 374,
	"./en-ie": 375,
	"./en-ie.js": 375,
	"./en-il": 376,
	"./en-il.js": 376,
	"./en-nz": 377,
	"./en-nz.js": 377,
	"./eo": 378,
	"./eo.js": 378,
	"./es": 379,
	"./es-do": 380,
	"./es-do.js": 380,
	"./es-us": 381,
	"./es-us.js": 381,
	"./es.js": 379,
	"./et": 382,
	"./et.js": 382,
	"./eu": 383,
	"./eu.js": 383,
	"./fa": 384,
	"./fa.js": 384,
	"./fi": 385,
	"./fi.js": 385,
	"./fo": 386,
	"./fo.js": 386,
	"./fr": 387,
	"./fr-ca": 388,
	"./fr-ca.js": 388,
	"./fr-ch": 389,
	"./fr-ch.js": 389,
	"./fr.js": 387,
	"./fy": 390,
	"./fy.js": 390,
	"./gd": 391,
	"./gd.js": 391,
	"./gl": 392,
	"./gl.js": 392,
	"./gom-latn": 393,
	"./gom-latn.js": 393,
	"./gu": 394,
	"./gu.js": 394,
	"./he": 395,
	"./he.js": 395,
	"./hi": 396,
	"./hi.js": 396,
	"./hr": 397,
	"./hr.js": 397,
	"./hu": 398,
	"./hu.js": 398,
	"./hy-am": 399,
	"./hy-am.js": 399,
	"./id": 400,
	"./id.js": 400,
	"./is": 401,
	"./is.js": 401,
	"./it": 402,
	"./it.js": 402,
	"./ja": 403,
	"./ja.js": 403,
	"./jv": 404,
	"./jv.js": 404,
	"./ka": 405,
	"./ka.js": 405,
	"./kk": 406,
	"./kk.js": 406,
	"./km": 407,
	"./km.js": 407,
	"./kn": 408,
	"./kn.js": 408,
	"./ko": 409,
	"./ko.js": 409,
	"./ky": 410,
	"./ky.js": 410,
	"./lb": 411,
	"./lb.js": 411,
	"./lo": 412,
	"./lo.js": 412,
	"./lt": 413,
	"./lt.js": 413,
	"./lv": 414,
	"./lv.js": 414,
	"./me": 415,
	"./me.js": 415,
	"./mi": 416,
	"./mi.js": 416,
	"./mk": 417,
	"./mk.js": 417,
	"./ml": 418,
	"./ml.js": 418,
	"./mr": 419,
	"./mr.js": 419,
	"./ms": 420,
	"./ms-my": 421,
	"./ms-my.js": 421,
	"./ms.js": 420,
	"./mt": 422,
	"./mt.js": 422,
	"./my": 423,
	"./my.js": 423,
	"./nb": 424,
	"./nb.js": 424,
	"./ne": 425,
	"./ne.js": 425,
	"./nl": 426,
	"./nl-be": 427,
	"./nl-be.js": 427,
	"./nl.js": 426,
	"./nn": 428,
	"./nn.js": 428,
	"./pa-in": 429,
	"./pa-in.js": 429,
	"./pl": 430,
	"./pl.js": 430,
	"./pt": 431,
	"./pt-br": 432,
	"./pt-br.js": 432,
	"./pt.js": 431,
	"./ro": 433,
	"./ro.js": 433,
	"./ru": 434,
	"./ru.js": 434,
	"./sd": 435,
	"./sd.js": 435,
	"./se": 436,
	"./se.js": 436,
	"./si": 437,
	"./si.js": 437,
	"./sk": 438,
	"./sk.js": 438,
	"./sl": 439,
	"./sl.js": 439,
	"./sq": 440,
	"./sq.js": 440,
	"./sr": 441,
	"./sr-cyrl": 442,
	"./sr-cyrl.js": 442,
	"./sr.js": 441,
	"./ss": 443,
	"./ss.js": 443,
	"./sv": 444,
	"./sv.js": 444,
	"./sw": 445,
	"./sw.js": 445,
	"./ta": 446,
	"./ta.js": 446,
	"./te": 447,
	"./te.js": 447,
	"./tet": 448,
	"./tet.js": 448,
	"./tg": 449,
	"./tg.js": 449,
	"./th": 450,
	"./th.js": 450,
	"./tl-ph": 451,
	"./tl-ph.js": 451,
	"./tlh": 452,
	"./tlh.js": 452,
	"./tr": 453,
	"./tr.js": 453,
	"./tzl": 454,
	"./tzl.js": 454,
	"./tzm": 455,
	"./tzm-latn": 456,
	"./tzm-latn.js": 456,
	"./tzm.js": 455,
	"./ug-cn": 457,
	"./ug-cn.js": 457,
	"./uk": 458,
	"./uk.js": 458,
	"./ur": 459,
	"./ur.js": 459,
	"./uz": 460,
	"./uz-latn": 461,
	"./uz-latn.js": 461,
	"./uz.js": 460,
	"./vi": 462,
	"./vi.js": 462,
	"./x-pseudo": 463,
	"./x-pseudo.js": 463,
	"./yo": 464,
	"./yo.js": 464,
	"./zh-cn": 465,
	"./zh-cn.js": 465,
	"./zh-hk": 466,
	"./zh-hk.js": 466,
	"./zh-tw": 467,
	"./zh-tw.js": 467
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 468;

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
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
        this.isAuthed = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](false);
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
        this.user = user;
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Register Lecturer
    AuthService.prototype.registerLecturer = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/registerlecturer');
        this.user = user;
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Authenticate Lecturer
    AuthService.prototype.authLecturer = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticatelecturer');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Authenticate Student
    AuthService.prototype.authStudent = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticatestudent');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Get User Profile - Not in use
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
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
    // Load User from Local Storage
    AuthService.prototype.loadUser = function () {
        var user = localStorage.getItem('user');
        return user;
    };
    // Sets beginning of every endpoint
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:3000/' + ep;
        }
    };
    // Logged in --> Used to conditonally hide/show elements
    AuthService.prototype.loggedIn = function () {
        this.isAuthed.next(!this.isAuthed.value);
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DiaryService = (function () {
    function DiaryService(_http, http) {
        this._http = _http;
        this.http = http;
    }
    // Get Diary Entries
    DiaryService.prototype.getEntries = function () {
        return this._http.get(this.prepEndpoint('diary/diaryentries'))
            .catch(this.handleError);
    };
    // Insert Diary Entries
    DiaryService.prototype.insertEntry = function (entry) {
        console.log(entry);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('diary/addtodiary');
        this.entry = entry;
        return this.http.post(ep, entry, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Get Lecturers
    DiaryService.prototype.getLecturers = function () {
        var ep = this.prepEndpoint('users/lecturers');
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    // Get Modules
    DiaryService.prototype.getModules = function () {
        var ep = this.prepEndpoint('course/modules');
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    // Get Courses
    DiaryService.prototype.getCourses = function () {
        var ep = this.prepEndpoint('course/courses');
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    // Find Module based on groupId
    DiaryService.prototype.getStudentModules = function (groupId) {
        var ep = this.prepEndpoint('course/studentmodules/' + groupId);
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    // Handle Error
    DiaryService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.message);
    };
    // Sets beginning of every endpoint
    DiaryService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:3000/' + ep;
        }
    };
    return DiaryService;
}());
DiaryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], DiaryService);

//# sourceMappingURL=diary.service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_event_add_event__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_diary_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__diary_entry_diary_entry__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DiaryPage = (function () {
    function DiaryPage(navCtrl, _diaryService, modalCtrl) {
        this.navCtrl = navCtrl;
        this._diaryService = _diaryService;
        this.modalCtrl = modalCtrl;
        this.entryType = [
            'https://drslash.com/wp-content/uploads/2014/07/Notes.png',
            'https://image.flaticon.com/icons/svg/432/432413.svg',
            'https://image.flaticon.com/icons/svg/235/235248.svg',
            'https://image.flaticon.com/icons/svg/236/236816.svg',
            'https://image.flaticon.com/icons/svg/236/236830.svg'
        ];
        this.entries = [];
        this.lecturers = [];
        this.modules = [];
        this.courses = [];
        this.getLecturers();
    }
    // Get Lecturers
    DiaryPage.prototype.getLecturers = function () {
        var _this = this;
        this._diaryService.getLecturers().subscribe(function (lecturers) {
            _this.lecturers = lecturers;
            _this.getModules();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Get Modules
    DiaryPage.prototype.getModules = function () {
        var _this = this;
        this._diaryService.getModules().subscribe(function (modules) {
            _this.modules = modules;
            _this.getCourses();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Get Courses
    DiaryPage.prototype.getCourses = function () {
        var _this = this;
        this._diaryService.getCourses().subscribe(function (courses) {
            _this.courses = courses;
            _this.getEntries(_this.entries, _this.lecturers, _this.modules, _this.courses);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Returns Diary Entries
    DiaryPage.prototype.getEntries = function (entries, lecturers, modules, courses) {
        var _this = this;
        this._diaryService.getEntries().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                entries.push(data[i]);
                for (var j = 0; j < entries.length; j++) {
                    for (var k = 0; k < lecturers.length; k++) {
                        if (entries[j].lecturer == lecturers[k]._id) {
                            entries[j].lecturer = (lecturers[k].firstName + " " + lecturers[k].lastName);
                        }
                    }
                    for (var l = 0; l < modules.length; l++) {
                        if (entries[j].module == modules[l]._id) {
                            entries[j].module = (modules[l].name);
                        }
                    }
                }
            }
            _this.entries.sort(_this.sortByDate);
        }, function (error) { return _this.errorMessage = error; });
    };
    // Sort By Date
    DiaryPage.prototype.sortByDate = function (event1, event2) {
        if (event1.dueDate > event2.dueDate)
            return 1;
        else if (event1.dueDate === event2.dueDate)
            return 0;
        else
            return -1;
    };
    DiaryPage.prototype.openModal = function (entry) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__diary_entry_diary_entry__["a" /* DiaryEntryPage */], entry);
        modal.present();
    };
    DiaryPage.prototype.addEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_event_add_event__["a" /* AddEventPage */]);
    };
    return DiaryPage;
}());
DiaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-diary',template:/*ion-inline-start:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\diary\diary.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Diary</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="addEvent()">\n\n                <ion-icon name="md-add-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="list-avatar-page">\n\n\n\n    <ion-list>\n\n\n\n        <ion-item (click)="openModal({entry: entry})" *ngFor="let entry of entries">\n\n            <ion-avatar item-start>\n\n                <img *ngIf="entry.title.toLowerCase() == \'assessment\'" src="{{entryType[0]}}">\n\n                <img *ngIf="entry.title.toLowerCase() == \'presentation\'" src="{{entryType[1]}}">\n\n                <img *ngIf="entry.title.toLowerCase() == \'assignment\'" src="{{entryType[2]}}">\n\n                <img *ngIf="entry.title.toLowerCase() == \'event\'" src="{{entryType[3]}}">\n\n                <img *ngIf="entry.title.toLowerCase() == \'report\'" src="{{entryType[4]}}">\n\n            </ion-avatar>\n\n            <h2>{{entry.dueDate | date: \'EEEE, MMMM d, h:mm a\'}}</h2>\n\n            <h3>{{entry.module | uppercase}}</h3>\n\n            <p>{{entry.title}}</p>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\diary\diary.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_diary_service__["a" /* DiaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_diary_service__["a" /* DiaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _c || Object])
], DiaryPage);

var _a, _b, _c;
//# sourceMappingURL=diary.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_diary_service__ = __webpack_require__(53);
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
    function TimetablePage(navCtrl, navParams, _authService, _diaryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._authService = _authService;
        this._diaryService = _diaryService;
        this.modules = [];
        this.lecturers = [];
        this.mondayModules = [];
        this.tuesdayModules = [];
        this.wednesdayModules = [];
        this.thursdayModules = [];
        this.fridayModules = [];
        this.user = _authService.loadUser();
        this.userObj = JSON.parse(this.user);
        this.getModules();
    }
    // Return Modules for groupId
    TimetablePage.prototype.getModules = function () {
        var _this = this;
        this.groupId = this.userObj.groupId;
        this._diaryService.getStudentModules(this.groupId).subscribe(function (modules) {
            _this.modules = modules;
            _this.groupId = _this.user.groupId;
            _this.getLecturers();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Filter Modules by Day
    TimetablePage.prototype.filterModules = function () {
        for (var i = 0; i < this.modules.length; i++) {
            if (this.modules[i].day.toLowerCase() == "monday") {
                this.mondayModules.push(this.modules[i]);
            }
            else if (this.modules[i].day.toLowerCase() == "tuesday") {
                this.tuesdayModules.push(this.modules[i]);
            }
            else if (this.modules[i].day.toLowerCase() == "wednesday") {
                this.wednesdayModules.push(this.modules[i]);
            }
            else if (this.modules[i].day.toLowerCase() == "thursday") {
                this.thursdayModules.push(this.modules[i]);
            }
            else if (this.modules[i].day.toLowerCase() == "friday") {
                this.fridayModules.push(this.modules[i]);
            }
            var dateString = this.modules[i].startTime;
            this.modules[i].startTime = __WEBPACK_IMPORTED_MODULE_2_moment__(dateString).format("H:mm ");
        }
        this.mondayModules.sort(this.sortModules);
        this.tuesdayModules.sort(this.sortModules);
        this.wednesdayModules.sort(this.sortModules);
        this.thursdayModules.sort(this.sortModules);
        this.fridayModules.sort(this.sortModules);
    };
    // Get Lecturers
    TimetablePage.prototype.getLecturers = function () {
        var _this = this;
        this._diaryService.getLecturers().subscribe(function (lecturers) {
            _this.lecturers = lecturers;
            _this.lecturerNames();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Set Lecturer Names
    TimetablePage.prototype.lecturerNames = function () {
        for (var i = 0; i < this.lecturers.length; i++) {
            for (var j = 0; j < this.modules.length; j++) {
                if (this.lecturers[i]._id == this.modules[j].lecturer) {
                    this.modules[j].lecturer = this.lecturers[i].firstName + " " + this.lecturers[i].lastName;
                }
            }
        }
        this.filterModules();
    };
    // Sort Modules by Start Time
    TimetablePage.prototype.sortModules = function (module1, module2) {
        if (module1.startTime > module2.startTime)
            return 1;
        else if (module1.startTime === module2.startTime)
            return 0;
        else
            return -1;
    };
    return TimetablePage;
}());
TimetablePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-timetable',template:/*ion-inline-start:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\timetable\timetable.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title center>Timetable</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- Timtable -->\n\n<ion-content padding>\n\n  <ion-list>\n\n    <!-- Monday -->\n\n    <ion-item-group>\n\n        <ion-item-divider color="secondary">Monday</ion-item-divider>\n\n        <ion-item *ngFor="let module of mondayModules">\n\n            <h2>{{ module.name }}</h2>\n\n            <h3>{{ module.room }} // {{ module.startTime }} - {{ module.endTime }}</h3>\n\n            <p>{{ module.lecturer }}</p>\n\n        </ion-item>\n\n    </ion-item-group>\n\n    <!-- Tuesday -->\n\n    <ion-item-group>\n\n        <ion-item-divider color="secondary">Tuesday</ion-item-divider>\n\n        <ion-item *ngFor="let module of tuesdayModules">\n\n            <h2>{{ module.name }}</h2>\n\n            <h3>{{ module.room }} // {{ module.startTime }} - {{ module.endTime }}</h3>\n\n            <p>{{ module.lecturer }}</p>\n\n        </ion-item>\n\n    </ion-item-group>\n\n    <!-- Wednesday -->\n\n    <ion-item-group>\n\n        <ion-item-divider color="secondary">Wednesday</ion-item-divider>\n\n        <ion-item *ngFor="let module of wednesdayModules">\n\n            <h2>{{ module.name }}</h2>\n\n            <h3>{{ module.room }} // {{ module.startTime }} - {{ module.endTime }}</h3>\n\n            <p>{{ module.lecturer }}</p>\n\n        </ion-item>\n\n    </ion-item-group>\n\n    <!-- Thursday -->\n\n    <ion-item-group>\n\n        <ion-item-divider color="secondary">Thursday</ion-item-divider>\n\n        <ion-item *ngFor="let module of thursdayModules">\n\n            <h2>{{ module.name }}</h2>\n\n            <h3>{{ module.room }} // {{ module.startTime }} - {{ module.endTime }}</h3>\n\n            <p>{{ module.lecturer }}</p>\n\n        </ion-item>\n\n    </ion-item-group>\n\n    <!-- Friday -->\n\n    <ion-item-group>\n\n        <ion-item-divider color="secondary">Friday</ion-item-divider>\n\n        <ion-item *ngFor="let module of fridayModules">\n\n            <h2>{{ module.name }}</h2>\n\n            <h3>{{ module.room }} // {{ module.startTime }} - {{ module.endTime }}</h3>\n\n            <p>{{ module.lecturer }}</p>\n\n        </ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sophia Price\Documents\CollegeWork\Y3\Student-App\angular-source\src\pages\timetable\timetable.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_diary_service__["a" /* DiaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_diary_service__["a" /* DiaryService */]) === "function" && _d || Object])
], TimetablePage);

var _a, _b, _c, _d;
//# sourceMappingURL=timetable.js.map

/***/ })

},[234]);
//# sourceMappingURL=main.js.map