import { TestBed } from '@angular/core/testing';

import { MyAllTripsService } from './my-all-trips.service';

describe('MyAllTripsService', () => {
  let service: MyAllTripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAllTripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
