import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeaderVisibilityService } from 'src/app/services/header-visibility.service';
import { IUser, User } from 'src/app/models/user';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-registration-page',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit{
    public currentUser!: User;
    public typeOfUsers: string[] = ['Клиент','Администратор'];
    public serverError: string = '';
    public isLoading: boolean = false;

    public registrationForm: FormGroup = new FormGroup({
        userType: new FormControl(this.typeOfUsers[0], Validators.required),
        userName: new FormControl('', Validators.required),
        userSurname: new FormControl('', Validators.required),
        userPassword: new FormControl('', Validators.required),
        checkPassword: new FormControl('', Validators.required),
        userSecondname: new FormControl('', Validators.required),
        userPhoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(\+7|8) \(9\d\d\) \d\d\d-\d\d-\d\d/)]),
        userOrganisationName: new FormControl('')
    });

    constructor( public header: HeaderVisibilityService, public registration: AuthorizationService, public router: Router ) { 
    }

    public ngOnInit(): void {
        this.header.hide();
    }

    public onSubmit(): void {
        this.isLoading = true;
        const formData: IUser = {
            type: this.registrationForm.controls['userType'].value,
            surname: this.registrationForm.controls['userSurname'].value,
            name: this.registrationForm.controls['userName'].value,
            secondname: this.registrationForm.controls['userSecondname'].value,
            password: this.registrationForm.controls['userPassword'].value,
            phoneNumber: this.registrationForm.controls['userPhoneNumber'].value,
            organisationName: this.registrationForm.controls['userOrganisationName'].value,
            userTalon: '',
        };

        this.registration.registerUser(new User(formData)).subscribe({
            next: () => {
                this.router.navigate(['/authorization']);
                this.isLoading = false;
            },
            error: (error: HttpErrorResponse) => {
                this.isLoading = false;
                this.serverError = error.error.message;
                setTimeout(() => this.serverError = '', 3000);
            }
        });
    }

    //Метод запрещает вводить буквы любых алфовитов, только цифры!!
    public checkLetters(event: KeyboardEvent): void {
        if (!(/\d/).test(String.fromCharCode((event).charCode))) {
            event.preventDefault();
        }
    }
}