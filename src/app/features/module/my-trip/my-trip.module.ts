import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTripRoutingModule } from './my-trip-routing.module';
import { MyTripComponent } from './my-trip.component';
import { UpcomingTripComponent } from './upcoming-trip/upcoming-trip.component';
import { CancelledTripComponent } from './cancelled-trip/cancelled-trip.component';
import { CompletedTripComponent } from './completed-trip/completed-trip.component';
import { MyAllTripsService } from './service/my-all-trips.service';


@NgModule({
  declarations: [
    MyTripComponent,
    UpcomingTripComponent,
    CancelledTripComponent,
    CompletedTripComponent
  ],
  imports: [
    CommonModule,
    MyTripRoutingModule
  ],
  providers: [
    MyAllTripsService
  ]
})
export class MyTripModule { }
