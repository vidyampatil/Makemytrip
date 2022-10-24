import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightdataService {

  constructor(private http:HttpClient) { }

  getAllflights(){
    return this.http.get("http://localhost:3000/flights");
    
  }

  editflightinfo(id:any,obj:any){
    return this.http.put("http://localhost:3000/flights/"+id,obj)
  }
  
  getAddedflights(obj:any){
    return this.http.post("http://localhost:3000/flights",obj)
  }

  deleteflights(id:any){
    return this.http.delete("http://localhost:3000/flights/"+id)
  }

}
