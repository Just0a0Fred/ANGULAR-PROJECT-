import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { HeaderVisibilityService } from '../../services/header-visibility.service';

@Component({
    selector: 'app-header-component',
    templateUrl: './header-component.component.html',
    styleUrls: ['./header-component.component.scss'],
    animations: [
        trigger('openClose', [        
            transition('void => *', [
                style({ opacity: 0 }),
                animate('0.5s', style({ opacity: 1 })),
            ]),
            transition('* => void', [
                animate('0.5s', style({ opacity: 0 })),
            ]),
        ]),
    ]
})
export class HeaderComponentComponent implements OnInit{

    constructor( public header: HeaderVisibilityService, public authorization: AuthorizationService ) { }

    public ngOnInit(): void {
        this.header.isButtonsVisible = !this.authorization.checkAuthorization();
    }

}
