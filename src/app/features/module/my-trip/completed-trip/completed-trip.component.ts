import { Component, OnInit } from '@angular/core';
import { MyAllTripsService } from '../service/my-all-trips.service';

@Component({
  selector: 'app-completed-trip',
  templateUrl: './completed-trip.component.html',
  styleUrls: ['./completed-trip.component.scss']
})
export class CompletedTripComponent implements OnInit {

  myAllTrips: any = [];
  myCompletedTrips: any

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
    this.myCompletedTrips = this.myAllTrips.filter(
      (myCancelledTrip: any) => {
        return myCancelledTrip.status == 'completed'
      }
    )
    console.log(this.myCompletedTrips)
  }

}
