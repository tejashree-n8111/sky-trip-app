import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class MyAllTripsService {

  constructor(private httpClient: HttpClient) { }

  getMyAllTrips() {
    return this.httpClient.get('./assets/json/my-trip.json')
  }
}
