import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightListRoutingModule } from './flight-list-routing.module';
import { AllFlightsComponent } from './all-flights/all-flights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllFlightsComponent
  ],
  imports: [
    CommonModule,
    FlightListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FlightListModule { }
