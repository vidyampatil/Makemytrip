import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightRoutingModule } from './flight-routing.module';
import { FlightCreateComponent } from './flight-create/flight-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FlightCreateComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FlightModule { }
