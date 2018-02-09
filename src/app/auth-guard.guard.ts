import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServiceEnviadoService } from './service-enviado.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(private service:ServiceEnviadoService,
    private router:Router,
    private cookieService: CookieService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if(!this.service.isUserLoggedIn){
        
        if(this.cookieService.get('loginUsu') !=0){
          console.log("AuthguardGoesTrue")
          this.service.isUserLoggedIn = true
        }else{
          console.log("AuthguardGoesFalse")
          this.router.navigate(['/'])
        }
          
      }
    return this.service.isUserLoggedIn;
    }
}
