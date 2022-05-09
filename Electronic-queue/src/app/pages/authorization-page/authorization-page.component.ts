import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeaderVisibilityService } from 'src/app/services/header-visibility.service';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
    selector: 'app-authorization-page',
    templateUrl: './authorization-page.component.html',
    styleUrls: ['./authorization-page.component.scss']
})
export class AuthorizationPageComponent  implements OnInit{

    public authorizationForm: FormGroup = new FormGroup({
        userPassword: new FormControl(null, Validators.required),
        userPhoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(\+7|8) \(9\d\d\) \d\d\d-\d\d-\d\d/)]),
    });

    constructor( public header: HeaderVisibilityService, public authorize: AuthorizationService ) { 
    }

    public ngOnInit(): void {
        this.header.hide();
    }

    public onSubmit(): void {
        const formData: Object = {
            password: this.authorizationForm.controls['userPassword'].value,
            phoneNumber: this.authorizationForm.controls['userPhoneNumber'].value,
        };

        this.authorize.authorizeUser(formData).subscribe((data: any) => {
            console.log(data);
            this.authorize.storeUser(data.token, data.user);
        });
    }
}
