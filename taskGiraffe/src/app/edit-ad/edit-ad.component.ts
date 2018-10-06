import { Component, OnInit } from '@angular/core';
import {AdService} from "../shared/ad.service";
import {Ad} from "../shared/ad";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.css']
})
export class EditAdComponent implements OnInit{

    constructor(public adService: AdService, private activateRoute: ActivatedRoute, private router: Router) { }

    public title = '';
    public description = '';
    public date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    public author = localStorage.getItem('activeUser');
    public id = this.activateRoute.snapshot.params['id'];
    public oldData = this.adService.getOldData(this.id);

    ngOnInit(): void {
        if(this.adService.getAdById(this.id) === undefined) this.router.navigate(['/']);
        this.title = this.oldData.title;
        this.description = this.oldData.description;
    }

    editAd(){
        if(this.title === "") {this.title = this.oldData.title;}
        if(this.description === "") {this.description = this.oldData.description;}
        this.adService.updateAd(this.id,new Ad(this.title, this.description, this.author, this.date));
    }

}
