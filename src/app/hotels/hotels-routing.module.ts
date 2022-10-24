import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';

const routes: Routes = [
 {path:'', component:HotelBookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
