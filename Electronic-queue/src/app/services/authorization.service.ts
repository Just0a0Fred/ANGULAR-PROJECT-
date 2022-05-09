import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    public token!: string;
    public user!: IUser;

    constructor(public http: HttpClient) { }

    public registerUser(user: IUser): Observable<Object>  {
        return this.http.post('http://localhost:3000/account/registration', user);
    };

    public authorizeUser(user: Object): Observable<Object>  {
        return this.http.post('http://localhost:3000/account/authorization', user);
    };

    public storeUser(token: string, user: IUser): void {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.token = token;
        this.user = user;
    }
}
