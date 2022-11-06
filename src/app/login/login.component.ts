import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInfo:any;
  constructor(
    private fb: FormBuilder,
    private toastr:ToastrService, 
    private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.loginInfo=this.fb.group({
      email:[null,[Validators.required]],
      password:[null,[Validators.required]]
    })
  }

  get loginControls(): any {
    return this.loginInfo['controls'];
 }

  loginUser(){
    console.log("Username==>",this.loginInfo.controls.email.value);
    console.log("Password==>",this.loginInfo.controls.password.value);
    let login={
      email:this.loginInfo.controls.email.value,
      password:this.loginInfo.controls.password.value
    }
    this.authService.loginAuthentication(login).subscribe((token)=>{
      console.log("Token",token);
      this.router.navigate(['/dashboard/main'])
    })
  }

}
