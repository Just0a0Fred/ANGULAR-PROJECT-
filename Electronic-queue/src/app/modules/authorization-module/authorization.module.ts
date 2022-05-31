import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationPageComponent } from './authorization-page/authorization-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from 'src/app/modules/pipes-module/shared-pipes.module';


@NgModule({
    declarations: [
        AuthorizationPageComponent,
    ],
    imports: [
        CommonModule,
        AuthorizationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedPipesModule
    ]
})

export class AuthorizationModule { }
