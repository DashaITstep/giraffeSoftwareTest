import {Component, DoCheck} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {AdService} from "../shared/ad.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements DoCheck{

    constructor(public auth: AuthService, public ads: AdService){};

    public username = '';
    public pass = '';
    public allAds = [];

    ngDoCheck(): void {
        if(this.ads.getAllAds() !== null){
            this.allAds = this.ads.getAllAds();
        }
    }

    login(){
        this.auth.sendToken(this.username, this.pass);
    }

    logout() {
        this.auth.logout();
    }

    deleteAd(id) {
        this.ads.deleteAdById(id)
    }
}
