import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightdataService } from 'src/app/Services/flightdata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-flight-create',
  templateUrl: './flight-create.component.html',
  styleUrls: ['./flight-create.component.css','../../../admin/Admin-css/bootstrap.min4.2.1.css','../../../admin/Admin-css/bootstrap-reboot4.2.1.css','../../../admin/Admin-css/vendors/datatables/datatables.min.css',
  '../../../admin/Admin-css/vendors/datatables/datatables.min.css','../../../admin/Admin-css/custom.datatables.css','../../../admin/Admin-css/vendors/dropzone-5.5.0/dist/min/dropzone.min.css','../../../admin/Admin-css/responsive.css','../../../admin/Admin-css/style.css']
})
export class FlightCreateComponent implements OnInit {
  @ViewChild('fileInput') fileInput:any
  flights:any;
  alert:any;
  
  flightsarray = [ 'Non-Stop' , '1Stop','2+stops' ];

  constructor(private fb: FormBuilder,private flightservice:FlightdataService) { }
  
  ngOnInit(): void {
  }

  createFlightForm = this.fb.group({
    from: ['', [Validators.required, Validators.minLength(3)]],
     to: ['', [Validators.required, Validators.minLength(10)]],
     dapartDate: ['',[Validators.required,Validators.minLength(8)]],
     returnDate: ['',[Validators.required,Validators.minLength(8)]],
     price: ['',[Validators.required,Validators.minLength(8)]],
     traveller: ['',[Validators.required,Validators.minLength(8)]],
     flightimg: ['',[Validators.required,Validators.minLength(8)]],
     stop: ['default',[Validators.required]],
     distance: ['',[Validators.required,Validators.minLength(8)]],
  });

  submitFlightCreateForm(){
    let obj = {
      from: this.createFlightForm.value.from,
      to: this.createFlightForm.value.to,
      dapartDate: this.createFlightForm.value.dapartDate,
      returnDate: this.createFlightForm.value.returnDate,
      price: this.createFlightForm.value.price,
      traveller: this.createFlightForm.value.traveller,
      flightimg: this.fileInput.nativeElement.files[0]?.name,
      stop: this.createFlightForm.value.stop,
      distance: this.createFlightForm.value.distance,
      id: '',
    };
    
    this.flightservice.getAddedflights(obj).subscribe((res)=>{
      this.getflightinfo();
     // this.alert = true;
      this.createFlightForm.reset();
      Swal.fire(
        'Data saved successfully',
      )
    })
    
  }

  closeAlert() {
    this.alert = false;
  }


  getflightinfo() {
    this.flightservice.getAllflights().subscribe((data) => {
      this.flights = data;
    });

  }

}


