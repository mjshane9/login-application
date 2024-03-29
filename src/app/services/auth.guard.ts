import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService:AuthService,
    private router:Router,
    ){

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.authService.isLoggedInUser()){
      return true
    }
    this.router.navigate(['login'])
    return false
  }
  canActivate() {
    if(this.authService.isLoggedInUser()){
      return true;
    }
    this.router.navigate(['login'])
    return false
  }
  
}
