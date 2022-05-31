import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQueue } from 'src/app/models/queue';
import { HeaderVisibilityService } from 'src/app/services/header-visibility.service';
import { QueueService } from 'src/app/services/queue.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
    public userQueues: IQueue[] = [];
    public isLoading: boolean = false;

    constructor( public header: HeaderVisibilityService, public queueService: QueueService, public router: Router ) { }

    public ngOnInit(): void {
        this.header.show();
        this.isLoading = true;
        this.queueService.getAllQueues().subscribe({
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
