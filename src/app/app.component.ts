import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  authenticated:boolean=false;
  constructor(private authService:AuthService, private router:Router){}
  logout(){
    this.authService.logout();
    // this.authenticated=false;
    this.router.navigate(['/']);
  }
  ngOnInit(){
    this.authService.authenticated.subscribe(res=>this.authenticated = res);
  }
}


