import { Component, OnInit } from '@angular/core';
import { MyAllTripsService } from '../service/my-all-trips.service';

@Component({
  selector: 'app-cancelled-trip',
  templateUrl: './cancelled-trip.component.html',
  styleUrls: ['./cancelled-trip.component.scss']
})
export class CancelledTripComponent implements OnInit {
  myAllTrips: any = [];
  myCancelledTrips: any

  constructor(private myAllTripsService: MyAllTripsService) { }

  ngOnInit() {
    this.getAllTrips();
  }

  getAllTrips() {
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
    this.myCancelledTrips = this.myAllTrips.filter(
      (myCancelledTrip: any) => {
        return myCancelledTrip.status.toUpperCase() == 'CANCELLED'
      }
    )
    console.log(this.myCancelledTrips)
  }

}
