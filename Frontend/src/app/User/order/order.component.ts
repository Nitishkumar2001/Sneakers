import { Component } from '@angular/core';
import { OrderItemDto } from '../../models/categories.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  orders: OrderItemDto[];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    const userEmail = this.auth.getUserEmail();
    this.auth.getOrdersByUserId(userEmail).subscribe({
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
