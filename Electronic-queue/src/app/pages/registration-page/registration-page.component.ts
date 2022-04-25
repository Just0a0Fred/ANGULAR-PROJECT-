import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeaderVisibilityService } from 'src/app/header-visibility.service';
import { IUser, User } from 'src/app/models/user';

@Component({
    selector: 'app-registration-page',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit{
    public currentUser!: User;
    public typeOfUsers: string[] = ['Клиент','Администратор','Работник'];

    public registrationForm: FormGroup = new FormGroup({
        userType: new FormControl(),
        userName: new FormControl(),
        userSurname: new FormControl(),
        userPassword: new FormControl(),
        userSecondname: new FormControl(),
        userPhoneNumber: new FormControl(),
        userOrganisationName: new FormControl(),
    });

    constructor( public header: HeaderVisibilityService ) { 
    }

    public ngOnInit(): void {
        this.header.hide();
    }

    public onSubmit(): void {
        const data: IUser = {
            type: this.registrationForm.controls['userType'].value,
            surname: this.registrationForm.controls['userSurname'].value,
            name: this.registrationForm.controls['userName'].value,
            secondname: this.registrationForm.controls['userSecondname'].value,
            password: this.registrationForm.controls['userPassword'].value,
            phoneNumber: this.registrationForm.controls['userPhoneNumber'].value,
            organisationName: this.registrationForm.controls['userOrganisationName'].value
        };

        this.currentUser = new User(data);
        console.log(this.currentUser);
    }
}
