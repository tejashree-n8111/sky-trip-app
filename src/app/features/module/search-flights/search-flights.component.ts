import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchFlightService } from './service/search-flight.service';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.scss']
})
export class SearchFlightsComponent implements OnInit {

  searchFlightForm = new FormGroup(
    {
      from: new FormControl(''),
      to: new FormControl('')
    }
  )

  listOfFlights: any;
  searchFlights: any;

  constructor(private searchFlightService: SearchFlightService) { }

  ngOnInit(): void {
    this.searchFlightService.getAllFlights().subscribe(
      (allFlights: any) => {
        console.log(allFlights)
        this.listOfFlights = allFlights;
        this.searchFlights = allFlights;
      }
    )
  }

  searchFlightFn() {
    this.searchFlights = this.listOfFlights.filter(
      (flights: any) => {
        return this.searchFlightForm.get('from')?.value == flights.from &&
          this.searchFlightForm.get('to')?.value == flights.to
      }
    )
    console.log(this.searchFlights)
  }

}
