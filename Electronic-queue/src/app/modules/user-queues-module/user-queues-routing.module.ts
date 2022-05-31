import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutentificationGuard } from 'src/app/guards/autentification.guard';
import { UserTypeGuard } from 'src/app/guards/user-type.guard';
import { CreateQueuePageComponent } from './user-queues-page/pages/create-queue-page/create-queue-page.component';
import { CraetedQueuesPageComponent } from './user-queues-page/pages/created-queues/craeted-queues-page.component';
import { SignedQueuesPageComponent } from './user-queues-page/pages/signed-queues/signed-queues-page.component';
import { UserQueuesPageComponent } from './user-queues-page/user-queues-page.component';

const routes: Routes = [
    { 
        path: '',
        component: UserQueuesPageComponent,
        canActivate: [AutentificationGuard],
        children: [
            {
                path: 'created-queues',
                component: CraetedQueuesPageComponent,
                data: {
                    breadcrumb: 'Созданные очереди',
                },
                canActivate: [AutentificationGuard, UserTypeGuard],
                children: [
                    {
                        path: 'create-queue',
                        component: CreateQueuePageComponent,
                        data: {
                            breadcrumb: 'Создание очереди',
                        },
                        canActivate: [AutentificationGuard, UserTypeGuard],
                    }
                ],
            },
            {
                path: 'signed-queues',
                component: SignedQueuesPageComponent,
                canActivate: [AutentificationGuard],
            },
        ], 
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserQueuesRoutingModule { }
