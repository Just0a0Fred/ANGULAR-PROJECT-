import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeaderVisibilityService } from 'src/app/services/header-visibility.service';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { IAuthResponse } from 'src/app/models/user.response';
import { IAuthorizationForm } from 'src/app/models/authorizationForm';

@Component({
    selector: 'app-authorization-page',
    templateUrl: './authorization-page.component.html',
    styleUrls: ['./authorization-page.component.scss']
})
export class AuthorizationPageComponent  implements OnInit{
    public serverError: string = '';
    public isLoading: boolean = false;

    public authorizationForm: FormGroup = new FormGroup({
        userPassword: new FormControl(null, Validators.required),
        userPhoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(\+7|8) \(9\d\d\) \d\d\d-\d\d-\d\d/)]),
    });

    constructor( public header: HeaderVisibilityService, public authorize: AuthorizationService, public router: Router ) { 
    }

    public ngOnInit(): void {
        this.header.hide();
    }

    public onSubmit(): void {
        this.isLoading = true;
        const formData: IAuthorizationForm = {
            phoneNumber: this.authorizationForm.controls['userPhoneNumber'].value,
            password: this.authorizationForm.controls['userPassword'].value
        };

        this.authorize.loginUser(formData).subscribe({
            next: (data: IAuthResponse) => {
                this.authorize.storeUser(data.accessToken);
                this.header.isButtonsVisible = false;
                this.router.navigate(['']);
                this.isLoading = false;
            },
            error: (error: HttpErrorResponse) => {
                this.isLoading = false;
                this.serverError = error.error.message;
                setTimeout(() => this.serverError = '', 3000);
            }
        });
    }
}
