import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$=new BehaviorSubject<boolean>(false);
  isLoggedIn$=this._isLoggedIn$.asObservable();
  constructor(
    private userService:ServicesService,
    private router:Router,
    ) {
      const token=localStorage.getItem('login auth');
      this._isLoggedIn$.next(!!token)
     }

  loginAuthentication(login:any){
    return this.userService.loginUser(login).pipe(
      tap((response:any)=>{
        // console.log(response.data)
        this._isLoggedIn$.next(true);
        localStorage.setItem('login auth',response.data)
    })
    )
    
  }

  isLoggedInUser(){
    return !!localStorage.getItem('login auth')
  }

  getToken(){
    return localStorage.getItem('login auth')||''
  }

  
}
