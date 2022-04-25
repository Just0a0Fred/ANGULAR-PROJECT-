import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { UserCompaniesComponent } from './pages/user-companies/user-companies.component';
import { UserQueuesComponent } from './pages/user-queues/user-queues.component';

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'company-list', component: CompanyListComponent },
    { path: 'user-queues', component: UserQueuesComponent },
    { path: 'user-companies', component: UserCompaniesComponent },
    { path: 'profile', component: ProfilePageComponent },
    { path: 'registration', component: RegistrationPageComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
