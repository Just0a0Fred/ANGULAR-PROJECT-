import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPageComponent } from './authorization-page/authorization-page.component';

const routes: Routes = [
    { 
        path: '', 
        pathMatch: 'full',
        component: AuthorizationPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
