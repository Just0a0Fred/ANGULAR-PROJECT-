import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IQueue, Queue } from 'src/app/models/queue';
import { QueueService } from 'src/app/services/queue.service';

@Component({
    selector: 'app-create-queue-page',
    templateUrl: './create-queue-page.component.html',
    styleUrls: ['./create-queue-page.component.scss']
})
export class CreateQueuePageComponent {
    public serverError!: string;

    public createQueueForm: FormGroup = new FormGroup({
        name: new FormControl('',Validators.required),
        adress: new FormControl('',Validators.required),
        startDate: new FormControl('', Validators.required),
        cabinet: new FormControl(''),
        maxClients: new FormControl(),
    });

    constructor( public router: Router, public queueService: QueueService ) { }

    public onSubmit(): void {
        const queue: IQueue = {
            name: this.createQueueForm.controls['name'].value,
            adress: this.createQueueForm.controls['adress'].value,
            startDate: this.createQueueForm.controls['startDate'].value,
            cabinet: this.createQueueForm.controls['cabinet'].value,
            maxClients: this.createQueueForm.controls['maxClients'].value,
            creator: '',
            queue: [],
            organisation: '',
        };

        this.queueService.registerQueue(new Queue(queue)).subscribe({
            next: () => {
                this.router.navigate(['/user-queues/created-queues']);
            },
            error: (error: HttpErrorResponse) => {
                this.serverError = error.error.message;
                setTimeout(() => this.serverError = '', 3000);
            } 
        });
    }
}
