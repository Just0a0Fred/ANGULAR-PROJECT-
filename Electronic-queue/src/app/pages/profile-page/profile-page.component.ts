import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, User } from 'src/app/models/user';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { HeaderVisibilityService } from 'src/app/services/header-visibility.service';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
    public isLoading: boolean = false;
    public user: IUser = {
        type: '',
        surname: '',
        name: '',
        secondname: '',
        phoneNumber: '',
        password: '',
        organisationName: '',
        userTalon: '',
    };

    constructor( public http: HttpClient, public authorization: AuthorizationService, public router: Router, public header: HeaderVisibilityService ) { }

    public ngOnInit(): void {
        this.isLoading = true;
        this.http.get<IUser>('http://localhost:3000/api/userInfo').subscribe({
            next: (data: User) => {
                this.isLoading = false;
                this.user = data;
            }
        });
    }

    public onSubmit(): void {
        this.authorization.logoutUser().subscribe({
            next: () => {
                localStorage.clear();
                this.header.isButtonsVisible = true;
                this.router.navigate(['']);
            }
        });
    }
}
