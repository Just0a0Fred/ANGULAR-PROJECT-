import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQueue } from 'src/app/models/queue';
import { QueueService } from 'src/app/services/queue.service';

@Component({
    selector: 'app-signed-queues-page',
    templateUrl: './signed-queues-page.component.html',
    styleUrls: ['./signed-queues-page.component.scss']
})
export class SignedQueuesPageComponent implements OnInit {
    public userQueues: IQueue[] = [];
    public isLoading: boolean = false;

    constructor( public queueService: QueueService, public router: Router ) { }

    public ngOnInit(): void {
        this.isLoading = true;
        this.queueService.getSignedQueues().subscribe({
            next: (data: IQueue[]) => {
                this.isLoading = false;
                this.userQueues = data;
                console.log(this.userQueues);
            }
        });
    }

    public onSelected(queue: IQueue): void {
        this.router.navigate(['/queue', queue.id], { state: { queue: JSON.stringify(queue) } });
    }
}
