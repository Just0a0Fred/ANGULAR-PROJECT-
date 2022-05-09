import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeaderVisibilityService } from 'src/app/services/header-visibility.service';
import { IUser, User } from 'src/app/models/user';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
    selector: 'app-registration-page',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit{
    public currentUser!: User;
    public typeOfUsers: string[] = ['Клиент','Администратор','Работник'];

    public registrationForm: FormGroup = new FormGroup({
        userType: new FormControl('', Validators.required),
        userName: new FormControl('', [Validators.required, Validators.pattern(/[^0-9]/g)]),
        userSurname: new FormControl('', [Validators.required, Validators.pattern(/[^0-9]/i)]),
        userPassword: new FormControl('', Validators.required),
        userSecondname: new FormControl('', [Validators.required, Validators.pattern(/[^0-9]/i)]),
        userPhoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(\+7|8) \(9\d\d\) \d\d\d-\d\d-\d\d/)]),
        userOrganisationName: new FormControl('', Validators.required)
    });

    constructor( public header: HeaderVisibilityService, public registration: AuthorizationService ) { 
    }

    public ngOnInit(): void {
        this.header.hide();
    }

    public onSubmit(): void {
        const formData: IUser = {
            type: this.registrationForm.controls['userType'].value,
            surname: this.registrationForm.controls['userSurname'].value,
            name: this.registrationForm.controls['userName'].value,
            secondname: this.registrationForm.controls['userSecondname'].value,
            password: this.registrationForm.controls['userPassword'].value,
            phoneNumber: this.registrationForm.controls['userPhoneNumber'].value,
            organisationName: this.registrationForm.controls['userOrganisationName'].value
        };

        this.currentUser = new User(formData);
        this.registration.registerUser(this.currentUser).subscribe();
    }
}
