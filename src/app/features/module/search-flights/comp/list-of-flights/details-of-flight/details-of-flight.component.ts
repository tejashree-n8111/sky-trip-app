import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-of-flight',
  templateUrl: './details-of-flight.component.html',
  styleUrls: ['./details-of-flight.component.scss']
})
export class DetailsOfFlightComponent implements OnInit {
  @Input() flightDetails: any;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  bookingFlightFn() {
    this.router.navigate(['/bookFlight'], { queryParams: this.flightDetails })
  }

}
