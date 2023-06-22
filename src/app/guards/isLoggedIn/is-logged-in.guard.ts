import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../../services/login/login.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {
  constructor(private _snackBar: MatSnackBar,private loginService: LoginService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.isLoggedIn()){
      return true;
    }else {
      this._snackBar.open('Necesitas estar logueado','Aceptar',{
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: "bottom"
      })
      this.router.navigate(['/login'])
      return false;
    }  }
}
