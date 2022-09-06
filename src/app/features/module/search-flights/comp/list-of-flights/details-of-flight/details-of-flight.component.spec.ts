import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfFlightComponent } from './details-of-flight.component';

describe('DetailsOfFlightComponent', () => {
  let component: DetailsOfFlightComponent;
  let fixture: ComponentFixture<DetailsOfFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOfFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
