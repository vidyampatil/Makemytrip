import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }

  getAllusers(){
    return this.http.get("http://localhost:3000/users");
    
  }
  
  checkAuthentication():string | null{
    return  sessionStorage.getItem('loggedInuser')
   }

  serveruserInfo(obj:any){
    return this.http.post("http://localhost:3000/users",obj)
  }

}
