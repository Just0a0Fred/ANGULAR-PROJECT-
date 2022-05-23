import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { IAuthResponse } from '../models/user.response';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {

    constructor(public http: HttpClient) { }

    public registerUser(user: IUser): Observable<IAuthResponse>  {
        return this.http.post<IAuthResponse>('http://localhost:3000/api/registration', user);
    };

    public loginUser(user: Object): Observable<IAuthResponse>  {
        return this.http.post<IAuthResponse>('http://localhost:3000/api/login', user, { withCredentials: true });
    };

    public logoutUser(): Observable<{}> {
        return this.http.post<{}>('http://localhost:3000/api/logout', '', { withCredentials: true });
    };

    public async checkAuthorization(): Promise<boolean> {
        if (localStorage.getItem('token')){
            await this.http.post<IAuthResponse>('http://localhost:3000/api/refresh', ' ', { withCredentials: true }).subscribe({
                next: (data: IAuthResponse) => {
                    this.storeUser(data.accessToken);
                }
            });

            return true;
        } else {
            return false;
        }
    }

    public storeUser(token: string): void {
        localStorage.setItem('token', token);
    }
}
