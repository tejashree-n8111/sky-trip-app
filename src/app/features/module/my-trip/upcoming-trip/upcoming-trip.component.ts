import { Component, OnInit } from '@angular/core';
import { MyAllTripsService } from '../service/my-all-trips.service';

@Component({
  selector: 'app-upcoming-trip',
  templateUrl: './upcoming-trip.component.html',
  styleUrls: ['./upcoming-trip.component.scss']
})
export class UpcomingTripComponent implements OnInit {

  myAllTrips: any = [];
  myUpcomingTrips: any

  constructor(private myAllTripsService: MyAllTripsService) { }

  ngOnInit() {
    this.myAllTripsService.getMyAllTrips().subscribe(
      (myTrips) => {
        console.log(myTrips)
        this.myAllTrips = myTrips
        this.filterCancelledTripsFn();
      },
      (error) => { console.log(error) }
    )
  }

  filterCancelledTripsFn() {
    this.myUpcomingTrips = this.myAllTrips.filter(
      (myCancelledTrip: any) => {
        return myCancelledTrip.status == 'upcoming'
      }
    )
    console.log(this.myUpcomingTrips)
  }

}
