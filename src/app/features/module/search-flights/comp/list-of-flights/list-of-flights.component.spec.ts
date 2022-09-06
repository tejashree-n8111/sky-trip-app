import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFlightsComponent } from './list-of-flights.component';

describe('ListOfFlightsComponent', () => {
  let component: ListOfFlightsComponent;
  let fixture: ComponentFixture<ListOfFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
