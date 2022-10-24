import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  router: any;
  user: any;
  loggeduser: any;
  //isdisabled:boolean = true

  LoginForm!: FormGroup;
  alert: boolean = false;

  get username() {
    return this.registrationForm.get('username');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get emailid() {
    return this.registrationForm.get('emailid');
  }

  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    public _router: Router
  ) {}

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      username: [''],
      password: [''],
    });

    // if(
    //   (this.registrationForm.value.username = " ")||(this.registrationForm.value.phone = " ")||
    //   (this.registrationForm.value.emailid =" ") ||(this.registrationForm.value.password=" ")
    // ){
    //   this.isdisabled = false
    // }

  }

  clicktoLogout() {
    this.router.navigateByUrl('logout');
  }

  registrationForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    emailid: ['',[Validators.required,Validators.minLength(8)]],
    password: ['',[Validators.required,Validators.minLength(8)]],
  });

  submitRegisterForm() {
    let obj = {
      username: this.registrationForm.value.username,
      phone: this.registrationForm.value.phone,
      email: this.registrationForm.value.emailid,
      password: this.registrationForm.value.password,
      id: '',
    };

    this.userservice.serveruserInfo(obj).subscribe((res: any) => {
      console.log('data saved successfully', res);
      this.getuserInfo();
      Swal.fire(
        'You are register successfully',
      )
      this.registrationForm.reset();
    });

    
  }

  closeAlert() {
    this.alert = false;
  }

  getuserInfo() {
    this.userservice.getAllusers().subscribe((data) => {
      this.user = data;
    });
  }

  // Loginn Form Methods

  submitLoginForm() {
    // this.userservice.getAllusers().subscribe((res:any)=>{
    //   const user1 = res.find((a:any)=>{
    //     return a.username === this.LoginForm.value.username && a.password === this.LoginForm.value.password
    //   })
    //   if(user1){
    //     alert("User login Successfully.!");
    //     this.LoginForm.reset();
    //    // this.router.navigate(['admin'])
    //   }else{
    //     alert("User Not Password.!")
    //   }
    // },err=>{
    //   alert("Username & password Not Match")
    // })

    this.userservice.getAllusers().subscribe((res: any) => {
      const userFound = res.find((a: any) => {
        return (
          a.username === this.LoginForm.value.username &&
          a.password === this.LoginForm.value.password
        );
      });

      if (userFound) {
        sessionStorage.setItem('loggedInuser', 'true');
        sessionStorage.setItem('role', userFound.role);

        // console.log(userFound)
        this.loggeduser = userFound;
        Swal.fire(
          'You are Login successfully',
        )
        this.registrationForm.reset();
      } else {
        Swal.fire(
          'Please Enter correct username and password !'
        )
      }
    });
  }

  logout(){
    sessionStorage.clear();
    Swal.fire(
      'You are logged out !'
    )
  }
}
