import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {
  bookFlight: any;
  constructor(private aR: ActivatedRoute) { }

  ngOnInit(): void {
    this.aR.queryParamMap.subscribe(
      (flightBookingDetails: any) => {
        console.log(flightBookingDetails)
        this.bookFlight = flightBookingDetails.params
      }
    )
  }

}
