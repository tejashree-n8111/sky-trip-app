import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class SearchHotelService {

  constructor(private httpClient: HttpClient) { }

  getAllHotels() {
    return this.httpClient.get('./assets/json/hotels.json')
  }
}
