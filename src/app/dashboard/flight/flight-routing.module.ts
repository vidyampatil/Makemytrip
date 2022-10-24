import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightCreateComponent } from './flight-create/flight-create.component';

const routes: Routes = [
  {path:'', component: FlightCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
