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
    public isLoading: boolean = false;

    public createQueueForm: FormGroup = new FormGroup({
        name: new FormControl('',Validators.required),
        adress: new FormControl('',Validators.required),
        startDate: new FormControl('', [Validators.required, Validators.pattern(/^(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:(\/|-|\.)(?:0?[13578]|1[02])\1(?:31))|(?:(\/|-|\.)(?:0?[13-9]|1[0-2])\2(?:29|30)))$|^(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/|-|\.)0?2\3(?:29)$|^(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:0?[1-9]|1\d|2[0-8])$/)]),
        cabinet: new FormControl(''),
        maxClients: new FormControl(),
    });

    constructor( public router: Router, public queueService: QueueService ) { }

    public onSubmit(): void {
        this.isLoading = true;
        const queue: IQueue = {
            id: 0,
            name: this.createQueueForm.controls['name'].value,
            adress: this.createQueueForm.controls['adress'].value,
            startDate: this.createQueueForm.controls['startDate'].value,
            cabinet: this.createQueueForm.controls['cabinet'].value,
            maxClients: this.createQueueForm.controls['maxClients'].value,
            creator: '',
            queue: [],
            organisation: ''
        };

        this.queueService.registerQueue(new Queue(queue)).subscribe({
            next: () => {
                this.router.navigate(['/user-queues/created-queues']);
                this.isLoading = false;
            },
            error: (error: HttpErrorResponse) => {
                this.isLoading = false;
                this.serverError = error.error.message;
                setTimeout(() => this.serverError = '', 3000);
            } 
        });
    }
}
