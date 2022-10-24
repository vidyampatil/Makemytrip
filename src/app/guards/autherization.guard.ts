import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AutherizationGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let role:string | null = sessionStorage.getItem('role');
     
      let userRoles = role?.split(',')
      console.log("user roles ",userRoles)
      
      if(userRoles?.includes('Admin')){
        return true;
      }else{
        Swal.fire(
          'You dont have required permission'
        )
        return false;
      }
  }
  
}
