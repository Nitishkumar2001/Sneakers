import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { Category, OrderItemDto, Product } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string = "https://localhost:7019/api/User/";

  constructor(
    private http: HttpClient, 
    private router: Router,
    private jwtHelper: JwtHelperService) 
    {
   
   }

   getCategories():Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}getCategories`);
   }

   getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}getProductsByCategories/${categoryId}/products`);
  }

  logIn(email: string, password: string){
    return this.http.post<any>(`${this.baseUrl}Login`,{email, password},{responseType: 'text' as 'json'})
  4}
  signUp(signUpObj:any){
    return this.http.post<any>(this.baseUrl +'Register',signUpObj,{responseType: 'text' as 'json'})
  }
  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }
  getToken(){
    return localStorage.getItem('token');
  }
  isUserLoggedIn():boolean{
      return !!localStorage.getItem('token');
  }
  userSignOut(){
    localStorage.clear();
    this.router.navigate(['user/login']);
  }

  getOrdersByUserId(userEmail:string): Observable<OrderItemDto[]> {
    return this.http.get<OrderItemDto[]>(`${this.baseUrl}orders/${userEmail}`);
  }

  getUserEmail(): string {
    const token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.email;
    }
    return '';
  }
  getUserName(): string {
    const token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.unique_name;
    }
    return '';
  }
 
 
}
