import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { LoginService } from 'src/app/features/comp/login/service/login.service';



@Injectable({
  providedIn: 'root'
})
export class AuthanticationGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private loginService: LoginService) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (this.loginService.user) {
      return true
    } else {
      return false;
    }


  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (this.loginService.user) {
      return true
    } else {
      return false;
    }

  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return true;
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    return true;
  }

}
