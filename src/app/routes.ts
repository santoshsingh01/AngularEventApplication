import { Routes } from "@angular/router";

import {
    EventsListComponent,
    EventListResolver,
    EvenDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    CreateSessionComponent
} from './events/index'
import { Error404Component } from "./errors/404.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";

export const appRoutes : Routes = [
    { path: 'events/new', component: CreateEventComponent , canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },    
    { path: 'events/:id', component: EvenDetailsComponent, canActivate: [EventRouteActivator] },
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: 'dynamicform', component: DynamicFormComponent},
    { path: '404', component: Error404Component},    
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {
        path: 'user', 
        loadChildren: () => import('./user/user.module')
        .then(m=>m.UserModule)
    }
]