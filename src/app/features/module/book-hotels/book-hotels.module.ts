import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookHotelsRoutingModule } from './book-hotels-routing.module';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { SearchHotelService } from './service/search-hotel.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchHotelComponent
  ],
  imports: [
    CommonModule,
    BookHotelsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    SearchHotelService
  ]
})
export class BookHotelsModule { }
