import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutentificationGuard } from './guards/autentification.guard';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { QueuePageComponent } from './pages/queue-page/queue-page.component';
import { AuthorizationModule } from './modules/authorization-module/authorization.module';
import { RegistrationModule } from './modules/registration-module/registration.module';
import { UserQueuesModule } from './modules/user-queues-module/user-queues.module';

const routes: Routes = [
    { 
        path: '', 
        component: MainPageComponent
    },
    { 
        path: 'profile', 
        component: ProfilePageComponent,
        canActivate: [AutentificationGuard], 
    },
    { 
        path: 'authorization', 
        loadChildren: ():Promise<typeof AuthorizationModule> => import('./modules/authorization-module/authorization.module').then((x: any) => x.AuthorizationModule),
    },
    { 
        path: 'registration', 
        loadChildren: ():Promise<typeof RegistrationModule> => import('./modules/registration-module/registration.module').then((x: any) => x.RegistrationModule),
    },
    {
        path: 'user-queues',
        loadChildren: ():Promise<typeof UserQueuesModule> => import('./modules/user-queues-module/user-queues.module').then((x: any) => x.UserQueuesModule),
    },
    {
        path: 'queue/:id',
        component: QueuePageComponent,
        canActivate: [AutentificationGuard],
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
