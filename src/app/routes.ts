import { Routes } from "@angular/router";
import { EvenDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";
import { CreateEventComponent } from "./events/create-event.component"
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";

export const appRoutes : Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events/:id', component: EvenDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component},    
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]