import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { UserQueuesPageComponent } from './pages/user-queues-page/user-queues-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HeaderVisibilityService } from './services/header-visibility.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { AuthorizationService } from './services/authorization.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationInterceptor } from './services/authorization.interceptor';
import { QueueNavComponent } from './pages/user-queues-page/components/queue-nav/queue-nav.component';
import { SignedQueuesPageComponent } from './pages/user-queues-page/pages/signed-queues/signed-queues-page/signed-queues-page.component';
import { CraetedQueuesPageComponent } from './pages/user-queues-page/pages/created-queues/craeted-queues-page.component';
import { CreateQueuePageComponent } from './pages/user-queues-page/pages/create-queue-page/create-queue-page/create-queue-page.component';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        CompanyListComponent,
        UserQueuesPageComponent,
        ProfilePageComponent,
        HeaderComponentComponent,
        RegistrationPageComponent,
        PhoneNumberPipe,
        AuthorizationPageComponent,
        CraetedQueuesPageComponent,
        QueueNavComponent,
        SignedQueuesPageComponent,
        CreateQueuePageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [
        HeaderVisibilityService,
        AuthorizationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthorizationInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
