import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
    selector: 'app-queue-nav',
    templateUrl: './queue-nav.component.html',
    styleUrls: ['./queue-nav.component.scss']
})

export class QueueNavComponent implements OnInit {
    public isAdmin: boolean = false;
    public signedSelected: boolean = true;
    public activeRouteUrl!: string;

    constructor( public authorization: AuthorizationService, public router: Router ) { 
        this.activeRouteUrl = this.router.routerState.snapshot.url;
        if (this.activeRouteUrl === '/user-queues/signed-queues'){
            this.signedSelected = true;
        } else {
            this.signedSelected = false;
        }
    }

    @HostListener('click')
    public addClassSelected(event: Event): void{
        this.signedSelected = !this.signedSelected;
    };

    public ngOnInit(): void {
        this.authorization.checkUserType().subscribe({
            next: (data: boolean) => {
                this.isAdmin = data;
            }
        });
    }
}
