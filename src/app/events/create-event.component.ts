import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
        <h1> New Event</h1>
        <hr>
        <div class="col-md-6">
            <h3> [Create Event Form will go here] </h3>
            <br/>
            <br/>
            <button type="submit" clas="btn btn-primary">Save</button>
            <button type="button" clas="btn btn-default" (click)="Cancel()">Cancel</button>
        </div>
    `
})

export class CreateEventComponent{
    isDirty:boolean = true

    constructor(private router: Router){

    }
    Cancel(){
        this.router.navigate(['/events']);
    }
}