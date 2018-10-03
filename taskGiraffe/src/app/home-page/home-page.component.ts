import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {AdService} from "../shared/ad.service";
import {PaginationService} from "../shared/pagination.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements DoCheck, OnInit{

    constructor(public auth: AuthService, public ads: AdService, private pagination: PaginationService){};

    public username = '';
    public pass = '';
    public allAds = null;
    public pager = {};
    public itemsToDisplay = null;

    ngDoCheck(): void {
        this.allAds = this.ads.getAllAds();
        if(this.allAds !== null){
            this.setPage(this.pager.currentPage);
        }
    }

    ngOnInit(): void {
        if(this.ads.getAllAds() !== null){
            this.allAds = this.ads.getAllAds();
            this.setPage(1);
        }
    }

    login(){
        if(this.pass === "" || this.username === "") {
            alert('All fields should be filled!');
            return false;
        }
        this.auth.sendToken(this.username, this.pass);
    }

    logout() {
        this.auth.logout();
    }

    deleteAd(id) {
        this.ads.deleteAdById(id);
    }

    private setPage(page: number) {
        this.pager = this.pagination.getPagination(this.allAds['ads'].length, page,5);
        this.itemsToDisplay = this.allAds['ads'].slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
