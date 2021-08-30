import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';

import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { ProductComponent } from './product/product.component';
import { ProductcrudComponent } from './productcrud/productcrud.component';
import { RegisterComponent } from './register/register.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent},
  {path:'register',component:RegisterComponent},
  {path:'orderNow',component:OrderNowComponent},
  {path:'product',component:ProductComponent},
  {path:'productSpec:/Id',component:ProductSpecComponent},
  {path:'cart',component:CartComponent},
  {path:'admin-header',component:AdminHeaderComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'users',component:UsersComponent,canActivate:[AuthGuard]},
  {path:'productcrud',component:ProductcrudComponent,canActivate:[AuthGuard]},
  {path:'add-product',component:AddProductComponent,canActivate:[AuthGuard]},
  {path:'admin-orders',component:AdminOrdersComponent,canActivate:[AuthGuard]},
  {path:'search-bar',component:SearchBarComponent},
  {path:'footer',component:FooterComponent},
  {path:'edit-products/:id/:rev',component:EditProductsComponent,canActivate:[AuthGuard]},
  {path:'', component:LoginComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
