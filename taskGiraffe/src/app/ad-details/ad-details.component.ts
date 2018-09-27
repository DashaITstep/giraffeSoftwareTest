import {Component, OnInit} from '@angular/core';
import {AdService} from "../shared/ad.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit{

  constructor(private adService: AdService, private activateRoute: ActivatedRoute, private router: Router, private authService : AuthService){}

  public activeAd = null;
  public id = this.activateRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.getActiveAd();
  }

  getActiveAd(){
    if(this.adService.getAdById(this.id) === undefined) this.router.navigate(['/']);
    this.activeAd = this.adService.getAdById(this.id);
  }

  deleteAd(){
    this.adService.deleteAdById(this.id);
    this.router.navigate(['/']);
  }

}
