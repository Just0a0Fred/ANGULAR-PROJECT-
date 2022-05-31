import { Component, Input } from '@angular/core';
import { IQueue } from 'src/app/models/queue';

@Component({
    selector: 'app-queue-card',
    templateUrl: './queue-card.component.html',
    styleUrls: ['./queue-card.component.scss']
})
export class QueueCardComponent {

    @Input() public userQueue!: IQueue;

    constructor() { }

}
