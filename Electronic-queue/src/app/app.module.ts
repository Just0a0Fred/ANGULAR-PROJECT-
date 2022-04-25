import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { UserQueuesComponent } from './pages/user-queues/user-queues.component';
import { UserCompaniesComponent } from './pages/user-companies/user-companies.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HeaderVisibilityService } from './header-visibility.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        CompanyListComponent,
        UserQueuesComponent,
        UserCompaniesComponent,
        ProfilePageComponent,
        HeaderComponentComponent,
        RegistrationPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [HeaderVisibilityService],
    bootstrap: [AppComponent]
})
export class AppModule { }
