import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueCardComponent } from './queue-card/queue-card.component';



@NgModule({
    declarations: [
        QueueCardComponent
    ],
    exports: [
        QueueCardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class QueueCardModule { }
