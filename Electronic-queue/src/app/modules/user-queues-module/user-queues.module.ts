import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserQueuesRoutingModule } from './user-queues-routing.module';
import { QueueCardModule } from '../queue-card-module/queue-card.module';
import { UserQueuesPageComponent } from './user-queues-page/user-queues-page.component';
import { CraetedQueuesPageComponent } from './user-queues-page/pages/created-queues/craeted-queues-page.component';
import { SignedQueuesPageComponent } from './user-queues-page/pages/signed-queues/signed-queues-page.component';
import { CreateQueuePageComponent } from './user-queues-page/pages/create-queue-page/create-queue-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueueNavComponent } from './user-queues-page/components/queue-nav/queue-nav.component';
import { BreadcrumbsComponent } from './user-queues-page/components/breadcrumbs/breadcrumbs.component';
import { SharedPipesModule } from '../pipes-module/shared-pipes.module';


@NgModule({
    declarations: [
        UserQueuesPageComponent,
        CraetedQueuesPageComponent,
        SignedQueuesPageComponent,
        CreateQueuePageComponent,
        QueueNavComponent,
        BreadcrumbsComponent
    ],
    imports: [
        CommonModule,
        UserQueuesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        QueueCardModule,
        SharedPipesModule
    ]
})
export class UserQueuesModule { }
