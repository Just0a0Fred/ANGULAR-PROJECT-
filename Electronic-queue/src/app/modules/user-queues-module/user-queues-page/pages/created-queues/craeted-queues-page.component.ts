import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQueue } from 'src/app/models/queue';
import { QueueService } from 'src/app/services/queue.service';

@Component({
    selector: 'app-craeted-queues',
    templateUrl: './craeted-queues-page.component.html',
    styleUrls: ['./craeted-queues-page.component.scss']
})
export class CraetedQueuesPageComponent implements OnInit {
    public userQueues: IQueue[] = [];
    public isLoading: boolean = false;

    constructor( public queueService: QueueService, public router: Router ) { }

    public ngOnInit(): void {
        this.isLoading = true;
        this.queueService.getUserQueues().subscribe({
            next: (data: IQueue[]) => {
                this.isLoading = false;
                this.userQueues = data;
            }
        });
    }

    public onSelected(queue: IQueue): void {
        this.router.navigate(['/queue', queue.id], { state: { queue: JSON.stringify(queue) } });
    }
}
