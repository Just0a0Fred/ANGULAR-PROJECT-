import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-queues',
    templateUrl: './user-queues-page.component.html',
    styleUrls: ['./user-queues-page.component.scss']
})
export class UserQueuesPageComponent {

    constructor( public router: Router) { }

}
