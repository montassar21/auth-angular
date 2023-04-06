import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../components/users.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:UsersService,private route:Router,private toast:NgToastService){

  }
  canActivate():boolean
{
  if(this.auth.isLoggedIn()){
    return true ;}
    else {
      this.toast.error({detail:"ERROR",summary:"Please Login first !"});
      this.route.navigate(['login'])
      return false;}
  }

}
