import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { HeaderVisibilityService } from 'src/app/services/header-visibility.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
    public user!: IUser[];

    constructor( public header: HeaderVisibilityService, public auth: AuthorizationService ) { }

    public ngOnInit(): void {
        this.header.show();
    }
}
