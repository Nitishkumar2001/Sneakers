import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../../services/auth.service';
import { AdminServiceService } from '../admin-service.service';


@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrl: './admin-sign-in.component.css'
})
export class AdminSignInComponent implements OnInit{

  adminloginForm!:FormGroup;
  constructor(private fb: FormBuilder, 
    private auth: AdminServiceService,
    private toast:NgToastService,
    private router:Router) {}

  ngOnInit(): void {
    this.adminloginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onLogin(){
    if(this.adminloginForm.valid){
      const { userName, password } = this.adminloginForm.value;
      console.log(this.adminloginForm.value)
      this.auth.adminLogIn(userName, password)
      .subscribe({
        next:(res)=>{
          console.log(res)
          this.adminloginForm.reset();
          this.auth.storeAdminToken(res);
          this.toast.success({detail:"SUCCESS", summary:"Login Success",duration:5000});
          this.router.navigate(['/admindashboard']);
        },
        error:(err)=>{ 
          this.toast.error({detail:"ERROR", summary:"Invalid Email and Password!",duration:5000});
        }
      })
    }
    else{
        console.log("form is not valid");
    }
  }
  
  

}
