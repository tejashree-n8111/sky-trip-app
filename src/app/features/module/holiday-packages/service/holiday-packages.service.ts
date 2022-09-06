import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class HolidayPackagesService {

  constructor(private httpClient: HttpClient) { }

  getHolidayPackagesData() {
    return this.httpClient.get('./assets/json/holiday-packages.json')
  }
}
