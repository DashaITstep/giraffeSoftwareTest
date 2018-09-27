import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AdService {
    constructor(private router: Router) { }

    public ads = {'ads':[]};

    addAd(ad){
        this.ads.ads = [];
        if (this.getAllAds() !== null){
            for(let i = 0; i< this.getAllAds()['ads'].length; i++){
                this.ads.ads.push(this.getAllAds()['ads'][i]);
            }
        }
        this.ads.ads.push(ad);
        localStorage.setItem('ads', JSON.stringify(this.ads));

        let id = this.getAllAds()['ads'].length-1;
        this.router.navigate(['ad/' + id]);
    }

    getAllAds(){
            return JSON.parse(localStorage.getItem('ads'));
    }

    deleteAdById(id){
        this.ads.ads = [];
        let ads = this.getAllAds()['ads'];
        ads.splice(id, 1);
        for(let i = 0; i< ads.length; i++){
            this.ads.ads.push(ads[i]);
        }
        localStorage.setItem('ads', JSON.stringify(this.ads));
    }

    getAdById(id){
        let ads = this.getAllAds()['ads'];
        return ads[id];
    }

    updateAd(id, editedAd){
        this.ads.ads = [];
        let ads = this.getAllAds()['ads'];
        ads.splice(id, 1, editedAd);
        for(let i = 0; i< ads.length; i++){
            this.ads.ads.push(ads[i]);
        }
        localStorage.setItem('ads', JSON.stringify(this.ads));
        this.router.navigate(['ad/']);
    }

    getOldData(id){
        return this.getAllAds()['ads'][id];
    }
}














