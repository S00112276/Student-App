import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {
    constructor() { }

    // Validate Registration
    validateRegister(user) {
        if (user.firstName == undefined
            || user.lastName == undefined
            || user.username == undefined
            || user.studentId == undefined
            || user.password == undefined
        ) {
            return false;
        }
        else {
            return true;
        }
    }

    // Validate Email
    validateUserID(userID) {
        const re = new RegExp('^[slSL][0-9]{8}$');
        return re.test(userID);
    }

    // Validate Password
    validatePassword(user) {
        if(user.password != user.confirmPassword) {
            return false;
        }
        else {
            return true;
        }
    }
}