import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberPipe } from './phone-number.pipe';
import { DatePipe } from './date.pipe';



@NgModule({
    declarations: [
        PhoneNumberPipe,
        DatePipe
    ],
    exports: [
        PhoneNumberPipe,
        DatePipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedPipesModule { }
