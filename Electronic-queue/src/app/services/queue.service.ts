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
        return this.http.post<{}>('http://localhost:3000/api/registerQueue', queue, { withCredentials: true });
    }
}
