import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from 'src/app/modules/pipes-module/shared-pipes.module';
import { RegistrationPageComponent } from './registration-page/registration-page.component';


@NgModule({
    declarations: [
        RegistrationPageComponent
    ],
    imports: [
        CommonModule,
        RegistrationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedPipesModule
    ]
})
export class RegistrationModule { }
