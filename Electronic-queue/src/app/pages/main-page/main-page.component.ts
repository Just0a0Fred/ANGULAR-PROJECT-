import { Component, OnInit } from '@angular/core';
import { HeaderVisibilityService } from 'src/app/services/header-visibility.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

    constructor( public header: HeaderVisibilityService ) { }

    public ngOnInit(): void {
        this.header.show();
    }
}
