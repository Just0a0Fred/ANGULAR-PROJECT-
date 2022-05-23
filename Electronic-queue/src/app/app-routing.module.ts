import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { AutentificationGuard } from './guards/autentification.guard';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { CreateQueuePageComponent } from './pages/user-queues-page/pages/create-queue-page/create-queue-page/create-queue-page.component';
import { CraetedQueuesPageComponent } from './pages/user-queues-page/pages/created-queues/craeted-queues-page.component';
import { SignedQueuesPageComponent } from './pages/user-queues-page/pages/signed-queues/signed-queues-page/signed-queues-page.component';
import { UserQueuesPageComponent } from './pages/user-queues-page/user-queues-page.component';

const routes: Routes = [
    { 
        path: '', 
        component: MainPageComponent
    },
    { 
        path: 'company-list', 
        component: CompanyListComponent 
    },
    { 
        path: 'user-queues',
        component: UserQueuesPageComponent,
        canActivate: [AutentificationGuard],
        children: [
            {
                path: 'created-queues',
                component: CraetedQueuesPageComponent,
                canActivate: [AutentificationGuard],
            },
            {
                path: 'signed-queues',
                component: SignedQueuesPageComponent,
                canActivate: [AutentificationGuard],
            },
            {
                path: 'create-queue',
                component: CreateQueuePageComponent,
                canActivate: [AutentificationGuard],
            },
        ], 
    },
    { 
        path: 'profile', 
        component: ProfilePageComponent,
        canActivate: [AutentificationGuard], 
    },
    { 
        path: 'registration', 
        component: RegistrationPageComponent
    },
    { 
        path: 'authorization', 
        component: AuthorizationPageComponent 
    },
    { 
        path: '**',
        redirectTo: '' 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
