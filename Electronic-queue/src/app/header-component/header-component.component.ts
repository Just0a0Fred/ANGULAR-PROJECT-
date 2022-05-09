import { Component } from '@angular/core';
import { HeaderVisibilityService } from '../services/header-visibility.service';

@Component({
    selector: 'app-header-component',
    templateUrl: './header-component.component.html',
    styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {

    constructor( public header: HeaderVisibilityService) { }

}
