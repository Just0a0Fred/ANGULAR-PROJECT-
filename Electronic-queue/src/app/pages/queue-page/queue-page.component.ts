import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { INavigation } from 'src/app/models/navigation';
import { IQueue } from 'src/app/models/queue';
import { QueueService } from 'src/app/services/queue.service';

@Component({
    selector: 'app-queue-page',
    templateUrl: './queue-page.component.html',
    styleUrls: ['./queue-page.component.scss']
})
export class QueuePageComponent implements OnInit {
    public selectedQueue!: IQueue;
    public isUserSigned: boolean = false;
    public isUserCreator: boolean = false;

    constructor( public activatedRoute: ActivatedRoute, public queueService: QueueService, public router: Router ) { 
        const navigation: Navigation | null = this.router.getCurrentNavigation();
        const state: INavigation = navigation?.extras.state as {queue: string};
        this.selectedQueue = JSON.parse(state.queue);
    }

    public ngOnInit(): void {
        this.queueService.checkIsUserSigned(this.selectedQueue).subscribe({
            next: (data: boolean) => {
                this.isUserSigned = data;
            }
        });

        this.queueService.checkIsUserCreator(this.selectedQueue).subscribe({
            next: (data: boolean) => {
                this.isUserCreator = data;
            }
        });
    }

    public enrollToSelectedQueue(): void {
        this.queueService.enrollToQueue(this.selectedQueue).subscribe();
        this.router.navigate(['/user-queues/signed-queues']);
    }

    public unsubscribeFromSelectedQueue(): void {
        this.queueService.unsubscribeFromSelectedQueue(this.selectedQueue).subscribe();
        this.router.navigate(['/user-queues/signed-queues']);
    }
}
