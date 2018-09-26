import { Component, OnInit } from '@angular/core';
import {Ad} from "../shared/ad";
import {AdService} from "../shared/ad.service";

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  constructor(public adService: AdService) { }

  public title = '';
  public description = '';
  public date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  public author = localStorage.getItem('activeUser');


  ngOnInit() {
  }

  addNewAd(){
    this.adService.addAd(new Ad(this.title, this.description, this.author, this.date));
  }

}
