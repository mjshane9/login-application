import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loading:boolean=false;
  registerInfo:any;
  constructor(
    private fb: FormBuilder, 
    private toastr:ToastrService, 
    private router:Router,
    private userService:ServicesService) { }

  ngOnInit(): void {
    this.registerInfo=this.fb.group({
      // name:[null,[Validators.required]],
      email:[null,[Validators.required]],
      password:[null,[Validators.required]]
    })
  }

  get registerControls(): any {
    return this.registerInfo['controls'];
 }
  
  registerUser(){
    this.loading=true
    let register={
      email:this.registerInfo.value.email,
      password:this.registerInfo.value.password
    }
    this.userService.registerUser(register).subscribe((user)=>{
      this.loading=false
      console.log("User==>",user);
    });
  }
}
