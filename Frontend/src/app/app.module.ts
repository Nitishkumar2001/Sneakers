import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { UserSignInComponent } from './User/user-sign-in/user-sign-in.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';
import { NgToastModule } from 'ng-angular-popup';
import { HomeComponent } from './User/home/home.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AddproductsComponent } from './admin/addproducts/addproducts.component';
import { AddcategoriesComponent } from './admin/addcategories/addcategories.component';
import { CategoryTableComponent } from './admin/category-table/category-table.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { CartComponent } from './User/cart/cart.component';
import { UsernavbarComponent } from './User/usernavbar/usernavbar.component';
import { OrderComponent } from './User/order/order.component';
import { UserdetailsComponent } from './admin/userdetails/userdetails.component';
import { AuthService } from './services/auth.service';
import { AdminServiceService } from './admin/admin-service.service';
import { AllOrdersComponent } from './admin/all-orders/all-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserSignInComponent,
    AdminSignInComponent,
    UserRegistrationComponent,
    AdminNavbarComponent,
    HomeComponent,
    AdmindashboardComponent,
    AddproductsComponent,
    AddcategoriesComponent,
    CategoryTableComponent,
    EditProductComponent,
    CartComponent,
    UsernavbarComponent,
    OrderComponent,
    UserdetailsComponent,
    AllOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgToastModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost:7019'], // Replace with your allowed domains
        disallowedRoutes: ['http://example.com/api/excluded']
      }
    })
  ],
  providers: [JwtHelperService, AuthService, AdminServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
