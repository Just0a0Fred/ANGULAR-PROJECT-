import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
    providedIn: 'root'
})
export class UserTypeGuard implements CanActivate {
    
    public isAdmin: boolean = false;
    
    constructor( private _authorization: AuthorizationService, private _router: Router){
    }

    public canActivate(): Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkType();
    }

    public async checkType(): Promise<boolean> {
        return new Promise((resolve: Function, reject: Function) => {

            this._authorization.checkUserType().subscribe({
                next: (data: boolean) => {
                    this.isAdmin = data;
                }
            });

            setTimeout(() => {
                resolve(true);
                console.log(this.isAdmin);
                if (this.isAdmin) {
                    return true;
                } else {
                    this._router.navigate(['/user-queues/signed-queues']);
                    
                    return false;
                }
            }, 100);
        });
    }
}
