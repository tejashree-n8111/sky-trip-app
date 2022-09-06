import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { SearchHotelService } from '../service/search-hotel.service';


@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent implements OnInit {
  allHotels: any = [];
  searchHotels: any = [];

  constructor(private searchHotelService: SearchHotelService, private FB: FormBuilder) { }

  hotelSearchForm = this.FB.group(
    {
      checkIn: this.FB.control(''),
      checkOut: this.FB.control('')
    }
  )

  ngOnInit(): void {
    this.searchHotelService.getAllHotels().subscribe(
      (allHotels: any) => {
        //console.log(allHotels)
        this.allHotels = allHotels.hotels
      },
      (error) => { console.log(error) }
    )
  }

  searchHotelFn() {
    // console.log(this.hotelSearchForm.value)

    this.searchHotels = this.allHotels.filter(
      (hotel: any) => {
        //console.log(hotel);
        return (this.hotelSearchForm.get('checkIn')?.value >= hotel.checkInDate && this.hotelSearchForm.get('checkIn')?.value <= hotel.checkoutDate)
        // && (this.hotelSearchForm.get('checkOut')?.value >= hotel.checkInDate && this.hotelSearchForm.get('checkOut')?.value <= hotel.checkoutDate)
      }
    );

    console.log(this.searchHotels)
  }

}
//((yourcheckin >= hotelcheckin && yourcheckin <= checkoutdate) && (yourCheckout >= hotelcheckin && yourcheckout <= hotelcheckoutdate))

