import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class SearchFlightService {

  constructor(private httpClient: HttpClient) { }

  getAllFlights() {
    return this.httpClient.get('./assets/json/list-of-flights.json')
  }
}
