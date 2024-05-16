import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItemDto } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://localhost:7019/api/Cart/';
  private userUrl = 'https://localhost:7019/api/User/';

  constructor(private http: HttpClient) { }
  
  addToCart(productId: number, quantity: number, userEmail: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}AddItemToCart/${productId}/${quantity}/${userEmail}`, {}, {
      responseType: 'text' as 'json'
    });
  }

  getAllCartItems(userEmail: string): Observable<CartItemDto[]> {
    return this.http.get<CartItemDto[]>(`${this.apiUrl}GetAllCartItems/${userEmail}`);
  }
  clearCart(userEmail: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}ClearCart/${userEmail}`);
  }
  removeCartItem(userEmail: string, productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}RemoveItemFromCart/${productId}/${userEmail}`);
  }
  buyNow(userEmail:string) {
    return this.http.post<any>(`${this.userUrl}CheckOut/${userEmail}`, {});
  }
  
}
