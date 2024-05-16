import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { User } from '../../models/categories.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent implements OnInit{

  users: User[];

  constructor(private userService: AdminServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe({
      next:
      (users) => {
        this.users = users;
      },
      error:(error) => {
        console.error('Error fetching users:', error);
      }
  });
  }

}
