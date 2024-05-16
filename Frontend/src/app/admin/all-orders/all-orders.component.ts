import { Component } from '@angular/core';
import { OrderItemDto } from '../../models/categories.model';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.css'
})
export class AllOrdersComponent {
  orders: any;

  constructor(private auth: AdminServiceService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.auth.getAllOrders().subscribe({
      next:
      (orders) => {
        this.orders = orders;
      },
      error:(error) => {
        console.error('Error fetching orders:', error);
      }
  });
  }
}
