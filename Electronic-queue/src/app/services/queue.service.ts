import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IQueue } from '../models/queue';

@Injectable({
    providedIn: 'root'
})
export class QueueService {

    constructor( public http: HttpClient ) { }

    public registerQueue(queue: IQueue): Observable<{}> {
        return this.http.post<{}>('http://localhost:3000/api/registerQueue', queue);
    }

    public getAllQueues(): Observable<IQueue[]> {
        return this.http.get<IQueue[]>('http://localhost:3000/api/getAllQueues');
    }

    public getUserQueues(): Observable<IQueue[]> {
        return this.http.get<IQueue[]>('http://localhost:3000/api/userQueues');
    }

    public getSignedQueues(): Observable<IQueue[]> {
        return this.http.get<IQueue[]>('http://localhost:3000/api/getSignedQueues');
    }

    public enrollToQueue(queue: IQueue): Observable<IQueue> {
        return this.http.patch<IQueue>('http://localhost:3000/api/enrollUserToQueue', queue);
    }

    public unsubscribeFromSelectedQueue(queue: IQueue): Observable<IQueue> {
        return this.http.patch<IQueue>('http://localhost:3000/api/unsubscribeFromSelectedQueue', queue);
    }

    public checkIsUserSigned(queue: IQueue): Observable<boolean> {
        return this.http.post<boolean>('http://localhost:3000/api/isUserSigned', queue);
    }

    public checkIsUserCreator(queue: IQueue): Observable<boolean> {
        return this.http.post<boolean>('http://localhost:3000/api/isUserCreator', queue);
    }
}
