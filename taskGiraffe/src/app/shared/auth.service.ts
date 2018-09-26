import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    constructor(private myRoute: Router) { }

    sendToken(name: string, pass: string) {
        if(localStorage.getItem(name) === null){
            if(pass === "" || name === "") return false;
            localStorage.setItem(name, pass);
        }else {
            if(pass !== localStorage.getItem(name)) return false;
        }
        localStorage.setItem('activeUser', name);
    }

    getToken() {
        return localStorage.getItem('activeUser');
    }

    isLoggednIn() {
        return this.getToken() !== null;
    }

    logout() {
        localStorage.removeItem('activeUser');
    }
}
