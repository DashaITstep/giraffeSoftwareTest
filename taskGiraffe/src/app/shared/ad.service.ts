import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Ad} from "./ad";

@Injectable()
export class AdService {
    constructor(private myRoute: Router) { }

    public ads = {'ads':[]};

    addAd(ad){
        this.ads.ads.push(ad);
        localStorage.setItem('ads', JSON.stringify(this.ads));
    }

    getAllAds(){
        return JSON.parse(localStorage.getItem('ads'));
    }
}