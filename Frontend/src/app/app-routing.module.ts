import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
import { UserSignInComponent } from './User/user-sign-in/user-sign-in.component';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { HomeComponent } from './User/home/home.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AddproductsComponent } from './admin/addproducts/addproducts.component';
import { AddcategoriesComponent } from './admin/addcategories/addcategories.component';
import { CartComponent } from './User/cart/cart.component';
import { userAuthGuard } from './Auth/user-auth.guard';
import { OrderComponent } from './User/order/order.component';
import { AdminServiceService } from './admin/admin-service.service';
import { UserdetailsComponent } from './admin/userdetails/userdetails.component';
import { adminGuard } from './admin/Auth/admin.guard';
import { AllOrdersComponent } from './admin/all-orders/all-orders.component';


const routes: Routes = [
  {
    path: 'admin/login',
    component:AdminSignInComponent
  },
  {
    path: '',
    component:NavbarComponent
  },
  {
    path: 'user/login',
    component:UserSignInComponent
  },
  {
    path: 'user/register',
    component:UserRegistrationComponent
  },
  {
    path: 'dashboard',
    component:HomeComponent, 
    canActivate:[userAuthGuard]
  },
  {
    path: 'dashboard',
    redirectTo: 'user/login',
    pathMatch: 'full'
  },
  {
    path:'admindashboard',
    component:AdmindashboardComponent,
    canActivate:[adminGuard]
  },
  {
    path:'allorders',
    component:AllOrdersComponent,
    canActivate:[adminGuard]
  },
  {
    path:'addproducts',
    component:AddproductsComponent,
    canActivate:[adminGuard]
  },
  {
    path:'addcategories',
    component:AddcategoriesComponent,
    canActivate:[adminGuard]
  },
  {
    path:'cartItems',
    component:CartComponent,
    canActivate:[userAuthGuard]
  },
  {
    path:'userOrders',
    component:OrderComponent,
    canActivate:[userAuthGuard]
  },
  {
    path:'userDetails',
    component:UserdetailsComponent,
    canActivate:[adminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
