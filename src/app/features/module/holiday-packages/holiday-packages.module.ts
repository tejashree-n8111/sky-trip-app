import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayPackagesRoutingModule } from './holiday-packages-routing.module';
import { HolidayPackagesComponent } from './holiday-packages.component';
import { HolidayPackagesService } from './service/holiday-packages.service';


@NgModule({
  declarations: [
    HolidayPackagesComponent
  ],
  imports: [
    CommonModule,
    HolidayPackagesRoutingModule
  ],
  providers: [
    HolidayPackagesService
  ]
})
export class HolidayPackagesModule { }
