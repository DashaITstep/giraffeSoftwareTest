import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./shared/auth.guard";
import {AuthService} from "./shared/auth.service";
import {AdService} from "./shared/ad.service";

const appRoutes: Routes =[
    { path: '', component: HomePageComponent},
    { path: 'edit', component: CreateAdComponent, canActivate: [AuthGuard]},
    { path: '$id', component: AdDetailsComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateAdComponent,
    AdDetailsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule
  ],
  providers: [AuthService,AuthGuard,AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
