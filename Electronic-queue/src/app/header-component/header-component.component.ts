import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { HeaderVisibilityService } from '../services/header-visibility.service';

@Component({
    selector: 'app-header-component',
    templateUrl: './header-component.component.html',
    styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit{

    constructor( public header: HeaderVisibilityService, public authorization: AuthorizationService ) { }

    public ngOnInit(): void {
        this.header.isButtonsVisible = !this.authorization.checkAuthorization();
    }

}
