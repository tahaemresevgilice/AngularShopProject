import { AccountService } from './account.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Router } from '@angular/router';


@Injectable()
export class LoginGuard implements CanActivate{
  constructor(private accountService:AccountService,private router:Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    let logged = this.accountService.isLogged();
    if(logged){
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}
