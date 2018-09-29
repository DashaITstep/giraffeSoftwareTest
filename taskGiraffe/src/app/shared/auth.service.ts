import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor() { }

    sendToken(name: string, pass: string) {
        if(localStorage.getItem(name) === null){
            localStorage.setItem(name, pass);
        }else {
            if(pass !== localStorage.getItem(name)){
                alert('Wrong password!');
                return false;
            }
        }
        localStorage.setItem('activeUser', name);
    }

    getActiveUser() {
        return localStorage.getItem('activeUser');
    }

    isLoggednIn() {
        return this.getActiveUser() !== null;
    }

    logout() {
        localStorage.removeItem('activeUser');
    }
}
