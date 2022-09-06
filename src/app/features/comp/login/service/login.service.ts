import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class LoginService {
  constructor(private httpClient: HttpClient) { }

  getUsersData() {
    return this.httpClient.get('./assets/json/user-data.json')
  }

  user = '';
}
