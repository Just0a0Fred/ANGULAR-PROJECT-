import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationInterceptor implements HttpInterceptor {
    
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string | null = localStorage.getItem('token');

        if (token) {
            const clonedRequest: HttpRequest<any> = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });

            return next.handle(clonedRequest).pipe(catchError((error: HttpErrorResponse) => {
                if (error instanceof HttpErrorResponse) {
                    return throwError(() => new Error);
                } else {
                    return throwError(error);
                } 
            }));
        } else {
            return next.handle(req) .pipe(catchError((error: HttpErrorResponse) => {
                if (error instanceof HttpErrorResponse) {
                    console.log(error);

                    return throwError(error);
                } else {
                    return throwError(error);
                } 
            }));
        }
    }
    
}