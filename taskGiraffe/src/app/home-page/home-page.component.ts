import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public username = '';
  public pass = '';
  public flag = true;

  ngOnInit() {}

  login(){
      if(localStorage.getItem(this.username) === null){
          localStorage.setItem(this.username, this.pass);
          this.flag = false;
      }else {
          if(this.pass !== localStorage.getItem(this.username)) return false;
          this.flag = false;
      }
  }

    logout() {
      this.flag = true;
    }
}
