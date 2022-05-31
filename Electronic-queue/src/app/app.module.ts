import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { HeaderVisibilityService } from './services/header-visibility.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizationService } from './services/authorization.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationInterceptor } from './services/authorization.interceptor';
import { QueuePageComponent } from './pages/queue-page/queue-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedPipesModule } from './modules/pipes-module/shared-pipes.module';
import { QueueCardModule } from './modules/queue-card-module/queue-card.module';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        ProfilePageComponent,
        HeaderComponentComponent,
        QueuePageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedPipesModule,
        QueueCardModule,
        BrowserModule,
        BrowserAnimationsModule
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
