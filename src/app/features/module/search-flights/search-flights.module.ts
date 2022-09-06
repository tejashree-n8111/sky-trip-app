import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchFlightsRoutingModule } from './search-flights-routing.module';
import { SearchFlightsComponent } from './search-flights.component';
import { ListOfFlightsComponent } from './comp/list-of-flights/list-of-flights.component';
import { DetailsOfFlightComponent } from './comp/list-of-flights/details-of-flight/details-of-flight.component';
import { SearchFlightService } from './service/search-flight.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchFlightsComponent,
    ListOfFlightsComponent,
    DetailsOfFlightComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchFlightsRoutingModule
  ],
  providers: [
    SearchFlightService
  ]
})
export class SearchFlightsModule { }
