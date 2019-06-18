import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError:boolean;
  loginErrorMessage:string;
  constructor(
    private router:Router,
    private authService: AuthService
    ) { }
    login(){
    this.authService.login().subscribe(response=>{
      if(response==true){
        this.loginError = false;
        this.router.navigate(['']);
      }
      else{
        this.loginError = true;
        this.loginErrorMessage = "Failure to authenticate";
      }
    });
  }
  ngOnInit() {
  }

}
