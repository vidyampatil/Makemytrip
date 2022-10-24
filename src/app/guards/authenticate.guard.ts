import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {

  constructor(private authService: UserService) { }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean>{
    let validuser: boolean = false

    if (this.authService.checkAuthentication()) {
      validuser = true
      return validuser;
    }
    else {
      Swal.fire(
        'Please Login to Continue'
      )
    return false
    }
   
  }
}
