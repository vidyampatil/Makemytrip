import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightdataService } from 'src/app/Services/flightdata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css','../../../admin/Admin-css/bootstrap.min4.2.1.css','../../../admin/Admin-css/bootstrap-reboot4.2.1.css','../../../admin/Admin-css/vendors/datatables/datatables.min.css',
  '../../../admin/Admin-css/vendors/datatables/datatables.min.css','../../../admin/Admin-css/custom.datatables.css','../../../admin/Admin-css/vendors/dropzone-5.5.0/dist/min/dropzone.min.css','../../../admin/Admin-css/responsive.css','../../../admin/Admin-css/style.css']
})
export class AllFlightsComponent implements OnInit {

  flights:any
  diableupdate:boolean =true
  editflightRecords:any
  flightsarray = [ 'Non-Stop' , '1Stop','2+stops' ];
  
  constructor(private flightservice:FlightdataService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.flightservice.getAllflights().subscribe((data) => {
      this.flights = data;
      //console.log(this.flights)
    });
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
  
  editFlight(list:any){
    this.createFlightForm.patchValue(
      {
     from:list.from,
     to:list.to ,
     dapartDate:list.dapartDate ,
     returnDate:list.returnDate,
     price:list.price,
     traveller:list.traveller,
     flightimg:list.flightimg,
     stop:list.stop,
     distance:list.distance,
      })
      this.editflightRecords = list
      this.diableupdate = false; 
  }

  
  getflightinfo() {
    this.flightservice.getAllflights().subscribe((data) => {
      this.flights = data;
    });

}

  updatevalue(){
    let obj ={
     from:this.createFlightForm.value.from,
     to:this.createFlightForm.value.to ,
     dapartDate:this.createFlightForm.value.dapartDate ,
     returnDate:this.createFlightForm.value.returnDate,
     price:this.createFlightForm.value.price,
     traveller:this.createFlightForm.value.traveller,
     flightimg:this.createFlightForm.value.flightimg,
     stop:this.createFlightForm.value.stop,
     distance:this.createFlightForm.value.distance,
     id:this.editflightRecords.id
    }


    //console.log(this.edituserRecords.id)
    this.flightservice.editflightinfo(this.editflightRecords.id,obj).subscribe(data=>{
       console.log("Data updated"+data)
       this.createFlightForm.reset();
       this.getflightinfo();
      //  this.isdisabled = false;
      Swal.fire(
        'Data updated successfully',
      )
    })
  }


deleteflight(list:any){
  this.flightservice.deleteflights(list.id).subscribe(data=>{
  //  console.log("data deleted successfully..!")
   this.getflightinfo();
   Swal.fire(
    'Data deleted successfully',
  )
  })  
}

}