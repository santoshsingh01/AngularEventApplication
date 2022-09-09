import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import {ToastrService } from '../common/toastr.service'
import { ActivatedRoute, Route } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>  
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail (click)="handleThubmnailClick(event.name)" [event]="event"></event-thumbnail>                
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events: IEvent[] | undefined

    constructor(private eventService : EventService, private toastr: ToastrService, private route: ActivatedRoute){
       // this.events = []
    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    } 
    
    handleThubmnailClick(eventName:any){
        this.toastr.success(eventName);
    }
} 