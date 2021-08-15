import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatasComponent } from './datas/datas.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { ProductComponent } from './product/product.component';
import { ProductcrudComponent } from './productcrud/productcrud.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent},
  {path:'register',component:RegisterComponent},
  {path:'orderNow',component:OrderNowComponent},
  {path:'product',component:ProductComponent},
  {path:'productSpec:/Id',component:ProductSpecComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'cart',component:CartComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin-header',component:AdminHeaderComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'datas',component:DatasComponent},
  {path:'users',component:UsersComponent},
  {path:'productcrud',component:ProductcrudComponent},
  {path:'', component:DashboardComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
