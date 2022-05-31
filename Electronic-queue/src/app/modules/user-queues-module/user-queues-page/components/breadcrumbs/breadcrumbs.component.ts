import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs';
import { IBreadCrumb } from 'src/app/models/breadcrumb';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit{
    public breadcrumbs!: IBreadCrumb[];

    constructor( public router: Router, public activatedRoute: ActivatedRoute ) { 
        this.breadcrumbs = this.createBreadCrumbs(this.activatedRoute.root, '', []);
    }

    public ngOnInit(): void {
        this.router.events.pipe(
            filter((event: Event) => event instanceof NavigationEnd),
            distinctUntilChanged(),
        ).subscribe(() => {
            this.breadcrumbs = this.createBreadCrumbs(this.activatedRoute.root, '', []);
        });
    }

    public createBreadCrumbs(route: ActivatedRoute, url: string, breadcrumbs: IBreadCrumb[]): IBreadCrumb[] {
        let label: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
        let path: string | undefined = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

        const lastRoutePart: string | undefined = path?.split('/').pop();
        const isDynamicRoute: boolean | undefined = lastRoutePart?.startsWith(':');

        if(isDynamicRoute && !!route.snapshot) {
            const paramName: string | undefined = lastRoutePart?.split(':')[1];
            if (lastRoutePart && paramName){
                path = path?.replace(lastRoutePart, route.snapshot.params[paramName]);
                label = route.snapshot.params[paramName];
            }
        }

        const nextUrl: string = path ? `/user-queues${url}/${path}` : url;

        const breadcrumb: IBreadCrumb = {
            label: label,
            url: nextUrl,
        };

        const newBreadcrumbs: IBreadCrumb[] = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];

        if (route.firstChild) {
            return this.createBreadCrumbs(route.firstChild, nextUrl, newBreadcrumbs);
        }

        return newBreadcrumbs;
    }
}
