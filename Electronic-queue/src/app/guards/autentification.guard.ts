import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
    providedIn: 'root'
})
export class AutentificationGuard implements CanActivate {

    constructor( private _authorization: AuthorizationService, private _router: Router ) {}

    public canActivate(): Observable<boolean | UrlTree> 
      | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (!this._authorization.checkAuthorization()) {
            this._router.navigate(['']);
            
            return false;
        }
        
        return true;
    }
  
}
