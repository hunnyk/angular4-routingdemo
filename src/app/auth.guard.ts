import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const emailVal=localStorage.getItem("email");
    if(emailVal!=null){
      console.log('valid');
      return true;
    }
    else {
      console.log('invalid');
      return false;
    }
  }
}
