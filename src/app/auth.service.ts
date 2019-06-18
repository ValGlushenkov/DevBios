import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authResponse = new BehaviorSubject(false); 
  authenticated = this.authResponse.asObservable();
  constructor() { }
  login(){
    return new Observable((observer)=>{
      setTimeout(()=>{
        observer.next(true);
        this.authResponse.next(true);
      }, 1000);
      setTimeout(()=>{
        observer.complete();
      },2000);
    });
  }
  logout(){
    this.authResponse.next(false);
  }
}
