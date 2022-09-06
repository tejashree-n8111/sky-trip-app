import { Component, OnInit } from '@angular/core';
import { HolidayPackagesService } from './service/holiday-packages.service';

@Component({
  selector: 'app-holiday-packages',
  templateUrl: './holiday-packages.component.html',
  styleUrls: ['./holiday-packages.component.scss']
})
export class HolidayPackagesComponent implements OnInit {
  holidayPackages: any;

  constructor(private holidayPackagesService: HolidayPackagesService) { }

  ngOnInit() {
    this.holidayPackagesService.getHolidayPackagesData().subscribe(
      (holidayPakages: any) => {
        console.log(holidayPakages)
        this.holidayPackages = holidayPakages
      },
      (error) => { console.log(error) }

    )

  }

}
