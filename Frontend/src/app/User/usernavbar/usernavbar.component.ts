import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrl: './usernavbar.component.css'
})
export class UsernavbarComponent {

  name:string = this.auth.getUserName();
  constructor(private auth:AuthService,
    private toast:NgToastService, 
    private route:Router){}

  logout(){
    this.auth.userSignOut();
    this.toast.success({detail:"SUCCESS", summary:"Successfully Logged Out",duration:5000});
    this.route.navigate(['']);
  }

}