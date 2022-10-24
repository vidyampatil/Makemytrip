import { Component, OnInit } from '@angular/core';
import { FlightdataService } from 'src/app/Services/flightdata.service';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  

  constructor(private flightdetails:FlightdataService) { }

  ngOnInit(): void {
  }
  
  searchFlight(){
   
  }
  
}
