import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { UserQueuesComponent } from './user-queues/user-queues.component';
import { UserCompaniesComponent } from './user-companies/user-companies.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CompanyListComponent,
    UserQueuesComponent,
    UserCompaniesComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
