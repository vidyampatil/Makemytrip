import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabsRoutingModule } from './cabs-routing.module';
import { CabsBookingComponent } from './cabs-booking/cabs-booking.component';


@NgModule({
  declarations: [
    CabsBookingComponent
  ],
  imports: [
    CommonModule,
    CabsRoutingModule
  ]
})
export class CabsModule { }
