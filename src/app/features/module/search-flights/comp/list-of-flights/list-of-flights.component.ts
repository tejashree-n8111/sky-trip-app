import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-of-flights',
  templateUrl: './list-of-flights.component.html',
  styleUrls: ['./list-of-flights.component.scss']
})
export class ListOfFlightsComponent implements OnInit {

  flight: any;
  showDetails: boolean = false;
  @Input() flights: any;

  constructor() { }

  ngOnInit(): void {

  }

  toggleFn(flight: any) {
    this.showDetails = !this.showDetails
    this.flight = flight

  }

}
